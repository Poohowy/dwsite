/**
 * Cursor-following soft light on cards marked with [data-spotlight].
 * One delegated listener, rAF-throttled; only for fine pointers (no touch emulation).
 */
export function initSpotlight(): void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let frame = 0;
  let target: HTMLElement | null = null;
  let x = 0;
  let y = 0;

  document.addEventListener(
    "pointermove",
    (e) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]") ?? null;
      if (!el) return;
      target = el;
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!target) return;
        const r = target.getBoundingClientRect();
        target.style.setProperty("--sx", `${x - r.left}px`);
        target.style.setProperty("--sy", `${y - r.top}px`);
      });
    },
    { passive: true },
  );
}
