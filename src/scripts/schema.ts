/**
 * Hero "problem → solution" schema enhancement.
 *
 * Progressive: without JS the CSS connectors remain. With JS we draw curved SVG
 * connectors measured from the real chip positions and run a calm sequence:
 *   problem highlights → light travels to the hub → hub pulses →
 *   light travels to a matching solution → solution highlights → pause.
 * Hovering a chip shows its connections and pauses the sequence.
 * Reduced motion: connectors + hover only, no travelling light or sequence.
 */

// Illustrative pairs [problemIndex, solutionIndex], played in order.
const SEQUENCE: [number, number][] = [
  [0, 0], // re-typing data → automation
  [2, 1], // disconnected systems → integration
  [1, 3], // scattered information → AI
  [0, 2], // re-typing data → application
];

const TRAVEL_MS = 900;
const HOLD_MS = 1600;
const GAP_MS = 500;
const SVG_NS = "http://www.w3.org/2000/svg";

export function initSchema(root: HTMLElement): void {
  const body = root.querySelector<HTMLElement>("[data-schema-body]");
  const nodeOrNull = root.querySelector<HTMLElement>("[data-schema-node]");
  const problems = Array.from(root.querySelectorAll<HTMLElement>("[data-problem]"));
  const solutions = Array.from(root.querySelectorAll<HTMLElement>("[data-solution]"));
  if (!body || !nodeOrNull || !problems.length || !solutions.length) return;
  const node: HTMLElement = nodeOrNull;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ----- Build SVG layer -----
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.classList.add("schema__links");
  svg.setAttribute("aria-hidden", "true");
  const mkPath = (cls: string) => {
    const p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("class", cls);
    svg.appendChild(p);
    return p;
  };
  const inPaths = problems.map(() => mkPath("schema__link schema__link--in"));
  const outPaths = solutions.map(() => mkPath("schema__link schema__link--out"));
  const dotIn = document.createElementNS(SVG_NS, "circle");
  const dotOut = document.createElementNS(SVG_NS, "circle");
  dotIn.setAttribute("class", "schema__spark schema__spark--in");
  dotOut.setAttribute("class", "schema__spark schema__spark--out");
  for (const d of [dotIn, dotOut]) {
    d.setAttribute("r", "2.5");
    svg.appendChild(d);
  }
  body.prepend(svg);

  const layout = () => {
    const b = body.getBoundingClientRect();
    const n = node.getBoundingClientRect();
    const hx = n.left + n.width / 2 - b.left;
    const hy = n.top + n.height / 2 - b.top;
    svg.setAttribute("viewBox", `0 0 ${b.width} ${b.height}`);
    svg.setAttribute("width", String(b.width));
    svg.setAttribute("height", String(b.height));

    problems.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const sx = r.right - b.left;
      const sy = r.top + r.height / 2 - b.top;
      inPaths[i].setAttribute("d", curve(sx, sy, hx - n.width / 2, hy));
    });
    solutions.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const ex = r.left - b.left;
      const ey = r.top + r.height / 2 - b.top;
      outPaths[i].setAttribute("d", curve(hx + n.width / 2, hy, ex, ey));
    });
  };

  layout();
  new ResizeObserver(() => requestAnimationFrame(layout)).observe(body);
  root.setAttribute("data-enhanced", "");

  // ----- Highlight helpers -----
  const clear = () => {
    root.querySelectorAll(".is-active").forEach((el) => el.classList.remove("is-active"));
    node.classList.remove("is-pulsing");
  };
  const on = (el: Element) => el.classList.add("is-active");

  const related = {
    problem: (i: number) => [...new Set(SEQUENCE.filter(([p]) => p === i).map(([, s]) => s))],
    solution: (i: number) => [...new Set(SEQUENCE.filter(([, s]) => s === i).map(([p]) => p))],
  };

  // ----- Sequence runner (cancellable) -----
  let generation = 0;
  let paused = false;
  let inView = true;

  const sleep = (ms: number, gen: number) =>
    new Promise<boolean>((resolve) => window.setTimeout(() => resolve(gen === generation), ms));

  const travel = (dot: SVGCircleElement, path: SVGPathElement, gen: number) =>
    new Promise<boolean>((resolve) => {
      const len = path.getTotalLength();
      const start = performance.now();
      dot.classList.add("is-active");
      const step = (now: number) => {
        if (gen !== generation) return resolve(false);
        const t = Math.min(1, (now - start) / TRAVEL_MS);
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const pt = path.getPointAtLength(len * e);
        dot.setAttribute("cx", String(pt.x));
        dot.setAttribute("cy", String(pt.y));
        if (t < 1) requestAnimationFrame(step);
        else {
          dot.classList.remove("is-active");
          resolve(true);
        }
      };
      requestAnimationFrame(step);
    });

  async function run(gen: number) {
    let k = 0;
    while (gen === generation) {
      const [p, s] = SEQUENCE[k % SEQUENCE.length];
      clear();
      on(problems[p]);
      on(inPaths[p]);
      if (!(await sleep(250, gen))) return;
      if (!(await travel(dotIn, inPaths[p], gen))) return;
      node.classList.add("is-pulsing");
      on(outPaths[s]);
      if (!(await travel(dotOut, outPaths[s], gen))) return;
      on(solutions[s]);
      if (!(await sleep(HOLD_MS, gen))) return;
      clear();
      if (!(await sleep(GAP_MS, gen))) return;
      k++;
    }
  }

  const stop = () => {
    generation++;
    dotIn.classList.remove("is-active");
    dotOut.classList.remove("is-active");
  };
  let ready = false;
  const start = () => {
    if (!ready || reduced || paused || !inView || document.hidden) return;
    stop();
    run(generation);
  };

  // ----- Hover / focus interaction -----
  const showProblem = (i: number) => {
    stop();
    clear();
    on(problems[i]);
    on(inPaths[i]);
    related.problem(i).forEach((s) => {
      on(outPaths[s]);
      on(solutions[s]);
    });
    node.classList.add("is-pulsing");
  };
  const showSolution = (i: number) => {
    stop();
    clear();
    on(solutions[i]);
    on(outPaths[i]);
    related.solution(i).forEach((p) => {
      on(inPaths[p]);
      on(problems[p]);
    });
    node.classList.add("is-pulsing");
  };

  problems.forEach((el, i) => el.addEventListener("pointerenter", () => ((paused = true), showProblem(i))));
  solutions.forEach((el, i) => el.addEventListener("pointerenter", () => ((paused = true), showSolution(i))));
  body.addEventListener("pointerleave", () => {
    paused = false;
    clear();
    window.setTimeout(start, 400);
  });

  // ----- Lifecycle -----
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) start();
    else stop();
  }).observe(root);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  // Let the hero entrance finish before the first sequence starts.
  window.setTimeout(() => {
    ready = true;
    start();
  }, 1200);
}

function curve(x1: number, y1: number, x2: number, y2: number): string {
  const dx = (x2 - x1) * 0.55;
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
}
