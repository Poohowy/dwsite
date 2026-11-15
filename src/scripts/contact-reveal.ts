/**
 * Light anti-harvesting for the Contact page.
 *
 * The static HTML carries contact details only in an encoded form
 * (base64 of the reversed string, split into two chunks), so the full email
 * address / phone number and mailto:/tel: links do not appear in the source.
 * They are assembled here at runtime. This deters basic scrapers only - any bot
 * that executes JavaScript can still read the result.
 */

/** Build time: encode a value into two attribute chunks. */
export function encodeContact(value: string): [string, string] {
  const b64 = btoa(value.split("").reverse().join(""));
  const cut = Math.ceil(b64.length / 2);
  return [b64.slice(cut), b64.slice(0, cut)]; // stored in swapped order
}

function decode(a: string, b: string): string {
  try {
    return atob(b + a).split("").reverse().join("");
  } catch {
    return "";
  }
}

/** Runtime: fill values, hrefs and copy targets for all [data-contact] elements. */
export function revealContacts(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-contact]").forEach((el) => {
    const { contact: kind, ca = "", cb = "" } = el.dataset;
    const value = decode(ca, cb);
    if (!value) return;
    const href = kind === "email" ? `mailto:${value}` : `tel:${value.replace(/[^\d+]/g, "")}`;

    el.querySelectorAll<HTMLAnchorElement>("a[data-contact-link]").forEach((a) => a.setAttribute("href", href));
    if (el.matches("a[data-contact-link]")) el.setAttribute("href", href);

    el.querySelectorAll<HTMLElement>("[data-contact-value]").forEach((v) => {
      v.textContent = value;
      v.setAttribute("data-ready", "");
    });
    el.querySelectorAll<HTMLElement>("[data-copy]").forEach((btn) => (btn.dataset.copy = value));

    el.removeAttribute("data-ca");
    el.removeAttribute("data-cb");
  });
}
