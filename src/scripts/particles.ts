/**
 * Hero particle field - lightweight Canvas 2D, no dependencies.
 *
 * - A grid of small square dots with per-dot depth (size, opacity, parallax).
 * - Fine pointers: a smoothed cursor leaves a short trail; nearby dots brighten
 *   (mostly turquoise, a sparse subset red), grow slightly and are gently pushed away.
 * - Touch / coarse pointers and prefers-reduced-motion: a single static render.
 * - The rAF loop runs only while something is moving; it stops when the field is
 *   at rest, when the hero is off-screen and when the tab is hidden.
 */

interface Options {
  canvas: HTMLCanvasElement;
  host: HTMLElement;
}

const GREY: [number, number, number] = [196, 202, 205];
const TEAL: [number, number, number] = [79, 179, 203];
const RED: [number, number, number] = [228, 0, 58];

const TRAIL_MAX = 28;
const TRAIL_DECAY = 0.019; // life lost per frame (~0.9 s trail at 60 fps)
const HEAD_RADIUS = 175;
const TRAIL_RADIUS = 120;
const PUSH_RADIUS = 150;
const PUSH_FORCE = 15;
const GLOW_RADIUS = 220; // soft light under the cursor, kept low-opacity
const RED_SHARE = 0.12;
const MAX_DPR = 2;
const INTRO_MS = 1100;

export function initParticles({ canvas, host }: Options): () => void {
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const interactive = finePointer && !reduced;

  // ----- Field state -----
  let w = 0;
  let h = 0;
  let dpr = 1;
  let count = 0;
  let bx = new Float32Array(0); // base x
  let by = new Float32Array(0); // base y
  let z = new Float32Array(0); // depth 0.35..1
  let mask = new Float32Array(0); // composition mask (keeps the headline area calm)
  let red = new Uint8Array(0); // 1 = activates red instead of teal
  let ox = new Float32Array(0); // spring offset x
  let oy = new Float32Array(0); // spring offset y
  let act = new Float32Array(0); // smoothed activation 0..1

  // ----- Pointer state -----
  let inside = false;
  let tx = 0;
  let ty = 0; // target (raw pointer)
  let mx = 0;
  let my = 0; // smoothed
  let px = 0;
  let py = 0; // parallax (smoothed, -0.5..0.5)
  const trail: { x: number; y: number; life: number }[] = [];
  let glow = 0; // 0..1 presence of the cursor light

  let raf = 0;
  let visible = true;
  let inView = true;
  let introStart = interactive ? performance.now() : 0;

  function build(): void {
    const rect = host.getBoundingClientRect();
    w = Math.max(1, Math.round(rect.width));
    h = Math.max(1, Math.round(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const spacing = w >= 1280 ? 26 : w >= 768 ? 24 : 22;
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;
    count = cols * rows;
    bx = new Float32Array(count);
    by = new Float32Array(count);
    z = new Float32Array(count);
    mask = new Float32Array(count);
    red = new Uint8Array(count);
    ox = new Float32Array(count);
    oy = new Float32Array(count);
    act = new Float32Array(count);

    const offX = (w - (cols - 1) * spacing) / 2;
    const offY = (h - (rows - 1) * spacing) / 2;
    const wide = w >= 1024;
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++, i++) {
        const x = offX + c * spacing;
        const y = offY + r * spacing;
        // Deterministic pseudo-random per dot (stable across resizes of the same size)
        const n = hash(c * 73856093 ^ r * 19349663);
        bx[i] = x;
        by[i] = y;
        z[i] = 0.35 + 0.65 * n;
        red[i] = hash(c * 83492791 ^ r * 2654435761) < RED_SHARE ? 1 : 0;

        // Composition: quieter behind the headline (left on desktop, top on mobile), fade at the bottom.
        const u = x / w;
        const v = y / h;
        const horiz = wide ? smoothstep(0.18, 0.7, u) * 0.6 + 0.4 : 0.65 + 0.35 * smoothstep(0.35, 0.9, v);
        const bottom = 1 - smoothstep(0.78, 1, v);
        const top = smoothstep(0, 0.08, v);
        mask[i] = horiz * bottom * top;
      }
    }
  }

  function draw(now: number): boolean {
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx!.clearRect(0, 0, w, h);

    let moving = false;

    // Smooth the pointer and parallax
    if (interactive) {
      const k = 0.2;
      mx += (tx - mx) * k;
      my += (ty - my) * k;
      const tpx = inside ? mx / w - 0.5 : 0;
      const tpy = inside ? my / h - 0.5 : 0;
      px += (tpx - px) * 0.06;
      py += (tpy - py) * 0.06;
      if (Math.abs(tpx - px) > 0.0005 || Math.abs(tpy - py) > 0.0005) moving = true;

      if (inside) {
        const last = trail[trail.length - 1];
        if (!last || Math.hypot(last.x - mx, last.y - my) > 6) {
          trail.push({ x: mx, y: my, life: 1 });
          if (trail.length > TRAIL_MAX) trail.shift();
        }
        if (Math.abs(tx - mx) > 0.3 || Math.abs(ty - my) > 0.3) moving = true;
      }
      for (let t = trail.length - 1; t >= 0; t--) {
        trail[t].life -= TRAIL_DECAY;
        if (trail[t].life <= 0) trail.splice(t, 1);
      }
      if (trail.length) moving = true;
    }

    // Intro fade (once, interactive only): sweeps in from the right
    let introT = 1;
    if (introStart) {
      introT = Math.min(1, (now - introStart) / INTRO_MS);
      if (introT < 1) moving = true;
      else introStart = 0;
    }

    // Bounding box of the influence area (skip far dots cheaply)
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    const R = Math.max(HEAD_RADIUS, PUSH_RADIUS);
    if (inside) {
      minX = mx - R;
      maxX = mx + R;
      minY = my - R;
      maxY = my + R;
    }
    for (const p of trail) {
      minX = Math.min(minX, p.x - TRAIL_RADIUS);
      maxX = Math.max(maxX, p.x + TRAIL_RADIUS);
      minY = Math.min(minY, p.y - TRAIL_RADIUS);
      maxY = Math.max(maxY, p.y + TRAIL_RADIUS);
    }

    // Soft cursor light (one gradient fill per frame; fades out when the pointer leaves)
    if (interactive) {
      glow += ((inside ? 1 : 0) - glow) * 0.08;
      if (glow > 0.01) {
        const g = ctx!.createRadialGradient(mx, my, 0, mx, my, GLOW_RADIUS);
        g.addColorStop(0, `rgba(${TEAL[0]},${TEAL[1]},${TEAL[2]},${0.11 * glow})`);
        g.addColorStop(0.5, `rgba(${TEAL[0]},${TEAL[1]},${TEAL[2]},${0.04 * glow})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = g;
        ctx!.fillRect(mx - GLOW_RADIUS, my - GLOW_RADIUS, GLOW_RADIUS * 2, GLOW_RADIUS * 2);
        if (Math.abs((inside ? 1 : 0) - glow) > 0.01) moving = true;
      }
    }

    // Three passes so fillStyle is set only three times per frame
    for (let pass = 0; pass < 3; pass++) {
      const c = pass === 0 ? GREY : pass === 1 ? TEAL : RED;
      ctx!.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;

      for (let i = 0; i < count; i++) {
        const depth = z[i];
        let x = bx[i];
        let y = by[i];

        if (pass === 0 && interactive) {
          // Update physics once per frame (in the first pass)
          let target = 0;
          let fx = 0;
          let fy = 0;
          if (x > minX && x < maxX && y > minY && y < maxY) {
            if (inside) {
              const dx = x - mx;
              const dy = y - my;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < HEAD_RADIUS) target = Math.max(target, (1 - d / HEAD_RADIUS) ** 1.5);
              if (d < PUSH_RADIUS && d > 0.01) {
                const f = sq(1 - d / PUSH_RADIUS) * PUSH_FORCE * depth;
                fx = (dx / d) * f;
                fy = (dy / d) * f;
              }
            }
            for (let t = 0; t < trail.length; t++) {
              const p = trail[t];
              const dx = x - p.x;
              const dy = y - p.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < TRAIL_RADIUS * TRAIL_RADIUS) {
                const v = (1 - Math.sqrt(d2) / TRAIL_RADIUS) ** 1.6 * p.life;
                if (v > target) target = v;
              }
            }
          }
          act[i] += (target - act[i]) * (target > act[i] ? 0.35 : 0.08);
          ox[i] += (fx - ox[i]) * 0.14;
          oy[i] += (fy - oy[i]) * 0.14;
          if (act[i] > 0.002 || Math.abs(ox[i]) > 0.02 || Math.abs(oy[i]) > 0.02) moving = true;
          else {
            act[i] = 0;
            ox[i] = 0;
            oy[i] = 0;
          }
        }

        const a = act[i];
        if (pass === 0) {
          // Base dot (dimmed where active so the coloured dot reads cleanly)
          let alpha = (0.09 + depth * 0.17) * mask[i] * (1 - a * 0.9);
          if (introT < 1) alpha *= clamp01((introT * 1.6 - (1 - x / w) * 0.6) / 0.6);
          if (alpha < 0.004) continue;
          ctx!.globalAlpha = alpha;
        } else {
          if (a < 0.02) continue;
          const isRed = red[i] === 1;
          if ((pass === 2) !== isRed) continue;
          const m = 0.6 + 0.4 * mask[i];
          ctx!.globalAlpha = Math.min(1, a * (isRed ? 1 : 1.15) * m * (0.65 + depth * 0.35));
        }

        // Parallax depth + spring offset
        x += ox[i] - px * 14 * depth;
        y += oy[i] - py * 10 * depth;
        const size = (1 + depth * 0.9) * (1 + a * 1.4);
        ctx!.fillRect(x - size / 2, y - size / 2, size, size);
      }
    }
    ctx!.globalAlpha = 1;
    return moving;
  }

  function loop(now: number): void {
    raf = 0;
    const moving = draw(now);
    if (moving && visible && inView) raf = requestAnimationFrame(loop);
  }

  function wake(): void {
    if (!raf && visible && inView) raf = requestAnimationFrame(loop);
  }

  // ----- Events -----
  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    const r = host.getBoundingClientRect();
    tx = e.clientX - r.left;
    ty = e.clientY - r.top;
    if (!inside) {
      mx = tx;
      my = ty;
      inside = true;
    }
    wake();
  };
  const onLeave = () => {
    inside = false;
    wake();
  };
  const onVisibility = () => {
    visible = !document.hidden;
    if (visible) wake();
  };

  let resizeFrame = 0;
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      build();
      draw(performance.now());
      wake();
    });
  });

  const io = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) wake();
  });

  build();
  draw(performance.now());
  ro.observe(host);
  io.observe(host);
  document.addEventListener("visibilitychange", onVisibility);
  if (interactive) {
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    wake(); // play intro
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
  };
}

function sq(v: number): number {
  return v * v;
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function smoothstep(a: number, b: number, v: number): number {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
}

function hash(n: number): number {
  let x = n | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967295;
}
