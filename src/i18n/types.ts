export type Lang = "pl" | "en";

export interface TitledText {
  title: string;
  text: string;
}

export interface SliderCopy {
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  initial: number;
}

export interface Dictionary {
  meta: { title: string; description: string };
  routes: { home: string; contact: string; pricer: string; archiflow: string };
  nav: {
    label: string;
    pricer: string;
    archiflow: string;
    process: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
    langLabel: string;
    homeLabel: string;
  };
  cta: { primary: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    secondary: string;
    diagram: {
      label: string;
      problemsLabel: string;
      solutionsLabel: string;
      problems: string[];
      solutions: string[];
      note: string;
    };
  };
  problems: { eyebrow: string; title: string; intro: string; items: TitledText[] };
  calculator: {
    eyebrow: string;
    title: string;
    intro: string;
    inputsLabel: string;
    sliders: { people: SliderCopy; hours: SliderCopy; rate: SliderCopy };
    resultsLabel: string;
    results: { hours: string; monthly: string; yearly: string };
    hoursUnit: string;
    disclaimer: string;
    assumptions: string;
    locale: string;
    currency: string;
  };
  solutions: { eyebrow: string; title: string; intro: string; items: TitledText[]; statement: string };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    mockNote: string;
    pricer: { status: string; name: string; text: string; cta: string; mock: { inbox: string; offer: string; formats: string } };
    archiflow: { status: string; name: string; text: string; cta: string; mock: { columns: string[] } };
  };
  process: { eyebrow: string; title: string; intro: string; steps: TitledText[]; cta: string };
  capabilities: { eyebrow: string; title: string; intro: string; items: (TitledText & { tags?: string[] })[] };
  team: {
    eyebrow: string;
    title: string;
    pillars: TitledText[];
    teamTitle: string;
    teamText: string;
    placeholderName: string;
    placeholderNote: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; text: string };
  footer: { tagline: string; navLabel: string; productsLabel: string; companyLabel: string; contact: string; rights: string };
  stub: { badge: string; text: string; back: string };
}
