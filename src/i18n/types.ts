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

/** Labels used inside the illustrative Pricer preview (not real data). */
export interface PricerMock {
  steps: [string, string, string];
  mailFrom: string;
  mailSubject: string;
  extracted: string;
  fields: string[];
  offer: string;
  total: string;
  ready: string;
}

/** Labels used inside the illustrative ArchiFlow preview (not real data). */
export interface ArchiFlowMock {
  nav: string[];
  overview: string;
  projects: string[];
  statuses: string[];
  schedule: string;
  documents: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  routes: { home: string; contact: string; pricer: string; archiflow: string };
  nav: {
    label: string;
    pricer: string;
    archiflow: string;
    process: string;
    home: string;
    approach: string;
    products: string;
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
  solutions: {
    eyebrow: string;
    title: string;
    intro: string;
    chooseLabel: string;
    items: TitledText[];
    deployment: {
      label: string;
      title: string;
      intro: string;
      or: string;
      options: (TitledText & { tags?: string[] })[];
    };
    statement: string;
  };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    mockNote: string;
    pricer: { status: string; name: string; text: string; cta: string; mock: PricerMock };
    archiflow: { status: string; name: string; text: string; cta: string; mock: ArchiFlowMock };
  };
  process: { eyebrow: string; title: string; intro: string; steps: TitledText[]; cta: string };
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
  footer: {
    tagline: string;
    navLabel: string;
    productsLabel: string;
    companyLabel: string;
    contact: string;
    faq: string;
    addressLabel: string;
    taxIdLabel: string;
    krsLabel: string;
    rights: string;
  };
  stub: { badge: string; text: string; back: string };
}
