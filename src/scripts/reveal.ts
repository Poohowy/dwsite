/**
 * Reusable scroll-reveal system.
 *
 * Markup:   <el data-reveal>            fade + rise (default)
 *           <el data-reveal="fade">     opacity only
 *           <el data-reveal="scale">    opacity + slight scale (illustrations)
 *           <el data-reveal="track">    no fade; only receives .is-visible (e.g. timeline line)
 *
 * Elements that enter the viewport in the same frame are staggered in DOM order,
 * so headings → descriptions → cards cascade naturally without hand-tuned delays.
 * An explicit `style="--reveal-delay: 120ms"` still wins when set.
 *
 * Safety: content is only hidden under `html.js:not(.reveal-fallback)`. The inline
 * head script adds `.reveal-fallback` if this module has not started within 2.5 s.
 * Each element reveals once; afterwards `data-reveal` is removed so the element's
 * own transitions (hover states) are no longer overridden.
 */
const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;
const DURATION_MS = 700;

export function initReveal(): void {
  const root = document.documentElement;
  root.classList.add("reveal-ready");

  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(finish);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
      visible.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      visible.forEach((el, i) => {
        observer.unobserve(el);
        reveal(el, Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  items.forEach((el) => observer.observe(el));
}

function reveal(el: HTMLElement, batchDelay: number): void {
  const explicit = parseFloat(el.style.getPropertyValue("--reveal-delay"));
  const delay = Number.isFinite(explicit) ? explicit : batchDelay;
  el.style.setProperty("--reveal-delay", `${delay}ms`);
  el.classList.add("is-visible");
  // Clean up after the transition so hover transitions work normally again.
  window.setTimeout(() => finish(el), delay + DURATION_MS + 120);
}

function finish(el: HTMLElement): void {
  el.classList.add("is-visible");
  el.removeAttribute("data-reveal");
  el.style.removeProperty("--reveal-delay");
}
