import { en } from "./en";
import { pl } from "./pl";
import type { Dictionary, Lang } from "./types";

export type { Dictionary, Lang } from "./types";

const dictionaries: Record<Lang, Dictionary> = { pl, en };

export function t(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** In-page anchor of the "How we work" section (linked from hero, nav and footer). */
export function processAnchor(lang: Lang): string {
  return lang === "pl" ? "jak-pracujemy" : "how-we-work";
}

export type PageKey = keyof Dictionary["routes"];

/** Path of the same page in the other language — used by the PL/EN switcher and hreflang. */
export function alternates(page: PageKey): Record<Lang, string> {
  return { pl: pl.routes[page], en: en.routes[page] };
}
