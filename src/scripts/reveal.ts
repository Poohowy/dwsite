/**
 * Subtle reveal-on-scroll. Content is visible by default; the hidden start
 * state only applies when JS runs (html.js) and motion is not reduced.
 */
export function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  items.forEach((el) => observer.observe(el));
}
