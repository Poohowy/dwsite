import type { Lang } from "./types";

/**
 * Pricer landing page - copy and demo scenario data.
 * Source of truth: docs/PRICER_PRODUCT_LANDING_PAGE_SPECIFICATION_v1.0.md
 *
 * Only capabilities confirmed in the specification are described here. In
 * particular: HTML/PDF output (no DOCX), integrations only "where configured",
 * human review before sending, no measured results.
 */

/* ------------------------------------------------------------------ */
/* Demo scenarios - add new scenarios by appending to `scenarios`.     */
/* ------------------------------------------------------------------ */

export interface DemoPricing {
  /** Per-basket values from the example shown in the product presentation. */
  net: number;
  vat: number;
  gross: number;
  /** Quantity discount shown for this quantity in the example. */
  discountPercent: number;
}

/** An industry groups scenarios that share one pricing approach. */
export interface DemoIndustry {
  id: string;
  label: string;
  /** Pricing approach shown under the industry name. */
  hint: string;
  /** Industry-specific processing labels; falls back to `demo.steps`. */
  steps?: string[];
}

/** Itemised, illustrative calculation (service / custom-order scenarios). */
export interface DemoQuote {
  label: string;
  lines: { label: string; detail: string; amount: number }[];
  vatRate: number;
}

export interface DemoScenario {
  id: string;
  /** Industry id (see `demo.industries`). */
  industry: string;
  /** Label in the "Choose a scenario" selector. */
  label: string;
  /** Short description under the label. */
  hint: string;
  email: { from: string; subject: string; body: string };
  /** What the illustration shows as recognised in the message. */
  detected: { label: string; value: string; highlight?: boolean }[];
  offer: {
    title: string;
    customer: string;
    quantity: string;
    items: string[];
    /** Grounded unit pricing (standard scenario). */
    pricing?: DemoPricing;
    /** Budget constraint (budget scenario) - no invented composition or totals. */
    budget?: { limitNet: number; suggestionsTitle: string; suggestions: string[]; reviewNote: string };
    /** Optional label overrides for non-product scenarios. */
    quantityLabel?: string;
    itemsLabel?: string;
    /** Illustrative itemised calculation (values not from a real price list). */
    quote?: DemoQuote;
    reviewNote?: string;
    note: string;
  };
}

export interface PricerCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    secondary: string;
    flow: { label: string; message: string; catalogue: string; quote: string; offer: string; vat: string };
  };
  problem: { eyebrow: string; title: string; intro: string; tasks: string[]; closing: string };
  how: { eyebrow: string; title: string; reviewBadge: string; steps: { title: string; text: string }[] };
  demo: {
    eyebrow: string;
    title: string;
    lead: string;
    notice: string;
    industryLabel: string;
    selectorLabel: string;
    emailLabel: string;
    toLabel: string;
    subjectLabel: string;
    generate: string;
    again: string;
    running: string;
    done: string;
    placeholder: string;
    steps: string[];
    detectedLabel: string;
    offerBadge: string;
    customerLabel: string;
    quantityLabel: string;
    itemsLabel: string;
    perBasket: string;
    netLabel: string;
    vatLabel: string;
    grossLabel: string;
    discountLabel: string;
    budgetLabel: string;
    budgetPerBasket: string;
    formatsLabel: string;
    illustrativeLabel: string;
    totalNetLabel: string;
    totalVatLabel: string;
    totalGrossLabel: string;
    noscript: string;
    industries: DemoIndustry[];
    scenarios: DemoScenario[];
  };
  benefits: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  config: { eyebrow: string; title: string; lead: string; items: { title: string; note?: string }[] };
  closing: { title: string; text: string };
  locale: string;
  currency: string;
}

const EXAMPLE_PRICING: DemoPricing = { net: 89.0, vat: 20.47, gross: 109.47, discountPercent: 0 };

const pl: PricerCopy = {
  meta: {
    title: "Pricer - system wycen i ofertowania | Data Wildcat",
    description:
      "Pricer zamienia zapytania klientów w uporządkowane wyceny i gotowe oferty na podstawie katalogu produktów, reguł cenowych i szablonów Twojej firmy.",
  },
  hero: {
    eyebrow: "System wycen i ofertowania",
    title: "Od wiadomości klienta do gotowej oferty.",
    lead: "Pricer porządkuje proces przygotowania wycen - od pierwszego zapytania, przez automatyczne obliczenia i rabaty, aż po gotową ofertę. Wszystko na podstawie danych i reguł Twojej firmy.",
    secondary: "Zobacz, jak działa Pricer",
    flow: {
      label: "Schemat: wiadomość klienta, dane produktów i cen, wycena, gotowa oferta",
      message: "Wiadomość klienta",
      catalogue: "Produkty i ceny",
      quote: "Wycena",
      offer: "Gotowa oferta",
      vat: "VAT",
    },
  },
  problem: {
    eyebrow: "Problem",
    title: "Zapytanie jest proste. Przygotowanie dobrej oferty już nie zawsze.",
    intro: "Za każdą wysłaną ofertą stoi kilka ręcznych kroków, które powtarzają się przy każdym zapytaniu:",
    tasks: [
      "Czytanie nieuporządkowanych wiadomości od klientów",
      "Ustalanie, o jakie produkty i ilości chodzi",
      "Wyszukiwanie cen i stawek VAT",
      "Sprawdzanie rabatów i zasad cenowych",
      "Przygotowanie oferty i odpowiedzi do klienta",
      "Zapisanie, co zostało wysłane i jak policzono cenę",
    ],
    closing: "Przy większej liczbie zapytań ręczna praca zwiększa ryzyko pomyłek, niespójności i traconego czasu.",
  },
  how: {
    eyebrow: "Jak działa Pricer",
    title: "Jeden proces. Od zapytania do oferty.",
    reviewBadge: "Twoja decyzja",
    steps: [
      {
        title: "Wiadomość klienta",
        text: "Wklej zapytanie lub przekaż je do procesu przez skonfigurowany kanał komunikacji.",
      },
      {
        title: "Rozpoznanie potrzeb",
        text: "System analizuje treść i identyfikuje produkty, ilości, wymagania lub budżet.",
      },
      {
        title: "Wycena na podstawie danych",
        text: "Ceny, VAT i rabaty wynikają z katalogu produktów oraz skonfigurowanych reguł.",
      },
      {
        title: "Weryfikacja i dopracowanie",
        text: "Użytkownik może sprawdzić wynik, zmienić pozycje i zaakceptować propozycję.",
      },
      {
        title: "Gotowa oferta",
        text: "System przygotowuje uporządkowaną ofertę, np. w HTML lub PDF, a wycena trafia do historii.",
      },
    ],
  },
  demo: {
    eyebrow: "Prezentacja",
    title: "Sprawdź, jak Pricer zamienia wiadomość w ofertę.",
    lead: "Wybierz przykładowe zapytanie i zobacz, jak może wyglądać wynik procesu.",
    notice: "Przykładowa prezentacja działania - dane i wynik demonstracyjne.",
    industryLabel: "Wybierz branżę",
    selectorLabel: "Wybierz scenariusz",
    emailLabel: "Wiadomość od klienta",
    toLabel: "Do",
    subjectLabel: "Temat",
    generate: "Przygotuj przykładową ofertę",
    again: "Zobacz ponownie",
    running: "Trwa symulacja…",
    done: "Przykładowa oferta jest gotowa.",
    placeholder: "Tu pojawi się przykładowa oferta przygotowana na podstawie wybranej wiadomości.",
    steps: [
      "Analizowanie wiadomości",
      "Dopasowanie produktów z katalogu",
      "Obliczanie wyceny",
      "Przygotowanie oferty",
    ],
    detectedLabel: "Rozpoznane w wiadomości",
    offerBadge: "Przykładowa oferta",
    customerLabel: "Klient",
    quantityLabel: "Ilość",
    itemsLabel: "Zawartość kosza",
    perBasket: "Cena za kosz",
    netLabel: "Netto",
    vatLabel: "VAT",
    grossLabel: "Brutto",
    discountLabel: "Rabat ilościowy",
    budgetLabel: "Limit budżetu",
    budgetPerBasket: "netto / kosz",
    formatsLabel: "Format oferty",
    illustrativeLabel: "Wartości ilustracyjne",
    totalNetLabel: "Razem netto",
    totalVatLabel: "VAT 23%",
    totalGrossLabel: "Razem brutto",
    noscript:
      "Interaktywna prezentacja wymaga włączonego JavaScriptu. Poniżej przykładowe zapytanie i przykładowa oferta dla standardowego scenariusza.",
    industries: [
      { id: "gifts", label: "Upominki i prezenty firmowe", hint: "Katalog produktów, rabaty ilościowe, budżet" },
      {
        id: "architecture",
        label: "Architektura",
        hint: "Usługa wyceniana według parametrów projektu",
        steps: [
          "Analizowanie wiadomości",
          "Rozpoznanie parametrów projektu",
          "Obliczanie wyceny usługi",
          "Przygotowanie oferty",
        ],
      },
      {
        id: "metal",
        label: "Konstrukcje metalowe",
        hint: "Zlecenie na wymiar: materiały, wymiary, usługi",
        steps: [
          "Analizowanie wiadomości",
          "Rozpoznanie wymiarów i materiałów",
          "Kalkulacja konstrukcji i usług",
          "Przygotowanie oferty",
        ],
      },
    ],
    scenarios: [
      {
        id: "standard",
        industry: "gifts",
        label: "Kosze prezentowe - standardowe zapytanie",
        hint: "Pięć koszy o określonej zawartości",
        email: {
          from: "Jan Kowalski",
          subject: "Zapytanie ofertowe - kosze prezentowe",
          body: "Dzień dobry,\n\nPotrzebujemy pięciu zestawów koszy prezentowych na konferencję. W każdym herbata, baton energetyczny, krakersy i miód. Proszę o ofertę.\n\nPozdrawiam\nJan Kowalski",
        },
        detected: [
          { label: "Produkt", value: "Kosz prezentowy" },
          { label: "Ilość", value: "5" },
          { label: "Zawartość", value: "herbata, baton energetyczny, krakersy, miód" },
        ],
        offer: {
          title: "Oferta - kosze prezentowe",
          customer: "Jan Kowalski",
          quantity: "5 koszy",
          items: ["Herbata", "Baton energetyczny", "Krakersy", "Miód"],
          pricing: EXAMPLE_PRICING,
          note: "Cena za kosz na podstawie przykładu z prezentacji produktu. Dane demonstracyjne.",
        },
      },
      {
        id: "budget",
        industry: "gifts",
        label: "Kosze prezentowe - z limitem budżetu",
        hint: "Ta sama zawartość, maks. 90 zł netto za kosz",
        email: {
          from: "Jan Kowalski",
          subject: "Zapytanie ofertowe - kosze prezentowe (budżet)",
          body: "Dzień dobry.\n\nPotrzebujemy pięciu zestawów koszy prezentowych na konferencję. W każdym herbata, baton energetyczny, krakersy i miód. Maksymalna cena koszyka to 90 zł netto. Proszę o ofertę.\n\nPozdrawiam,\nJan Kowalski",
        },
        detected: [
          { label: "Produkt", value: "Kosz prezentowy" },
          { label: "Ilość", value: "5" },
          { label: "Zawartość", value: "herbata, baton energetyczny, krakersy, miód" },
          { label: "Budżet", value: "maks. 90 zł netto / kosz", highlight: true },
        ],
        offer: {
          title: "Oferta - kosze prezentowe",
          customer: "Jan Kowalski",
          quantity: "5 koszy",
          items: ["Herbata", "Baton energetyczny", "Krakersy", "Miód"],
          budget: {
            limitNet: 90,
            suggestionsTitle: "Propozycje uzupełnienia",
            suggestions: [
              "Pricer może zaproponować dodatkowe produkty z katalogu tak, aby kosz mieścił się w limicie.",
              "Każda propozycja jest wersją roboczą - możesz usunąć pozycję i otrzymać inną, wciąż mieszczącą się w budżecie.",
            ],
            reviewNote: "Ofertę akceptujesz dopiero po sprawdzeniu propozycji.",
          },
          note: "Skład kosza i ceny zależą od katalogu i reguł Twojej firmy. Dane demonstracyjne.",
        },
      },
      {
        id: "house",
        industry: "architecture",
        label: "Projekt domu jednorodzinnego",
        hint: "Wycena usługi projektowej, ok. 160 m²",
        email: {
          from: "Tomasz Wiśniewski",
          subject: "Zapytanie o wycenę projektu domu jednorodzinnego",
          body: "Dzień dobry,\n\nchciałbym zapytać o wycenę przygotowania indywidualnego projektu domu jednorodzinnego o powierzchni około 160 m².\n\nDom byłby parterowy z poddaszem użytkowym i garażem jednostanowiskowym. Interesuje nas nowoczesna, prosta bryła z przestronnym salonem połączonym z kuchnią.\n\nDziałka znajduje się w okolicach Warszawy i ma powierzchnię około 900 m².\n\nCzy mogą Państwo podać szacunkową cenę przygotowania projektu oraz orientacyjny termin realizacji?\n\nPozdrawiam\nTomasz Wiśniewski",
        },
        detected: [
          { label: "Usługa", value: "indywidualny projekt domu jednorodzinnego" },
          { label: "Powierzchnia", value: "ok. 160 m²" },
          { label: "Bryła", value: "parter + poddasze użytkowe, nowoczesna" },
          { label: "Garaż", value: "jednostanowiskowy" },
          { label: "Działka", value: "ok. 900 m², okolice Warszawy" },
          { label: "Klient pyta o", value: "cenę i termin realizacji", highlight: true },
        ],
        offer: {
          title: "Oferta - projekt domu jednorodzinnego",
          customer: "Tomasz Wiśniewski",
          quantityLabel: "Przedmiot oferty",
          quantity: "Indywidualny projekt domu",
          itemsLabel: "Parametry projektu",
          items: ["Ok. 160 m² powierzchni", "Parter z poddaszem użytkowym", "Garaż jednostanowiskowy", "Salon połączony z kuchnią", "Działka ok. 900 m²"],
          quote: {
            label: "Kalkulacja usługi",
            vatRate: 0.23,
            lines: [
              { label: "Projekt indywidualny - stawka bazowa", detail: "160 m² × 120,00 zł/m²", amount: 19200 },
              { label: "Poddasze użytkowe - złożoność", detail: "+10% stawki bazowej", amount: 1920 },
              { label: "Garaż jednostanowiskowy w bryle budynku", detail: "ryczałt", amount: 2500 },
              { label: "Analiza działki i uwarunkowań lokalnych", detail: "ryczałt", amount: 1800 },
            ],
          },
          reviewNote: "Termin realizacji i ostateczną cenę biuro potwierdza po weryfikacji wyceny.",
          note: "Pozycje, stawki i kwoty są ilustracyjne i nie pochodzą z rzeczywistego cennika. Dane demonstracyjne.",
        },
      },
      {
        id: "fence",
        industry: "metal",
        label: "Ogrodzenie z bramą i furtką",
        hint: "Wykonanie, malowanie i montaż, ok. 45 mb",
        email: {
          from: "Michał Nowak",
          subject: "Zapytanie o wycenę ogrodzenia posesji",
          body: "Dzień dobry,\n\nproszę o wycenę wykonania i montażu ogrodzenia posesji wraz z bramą wjazdową.\n\nInteresuje mnie ogrodzenie metalowe o długości około 45 metrów, wykonane z poziomych profili stalowych w kolorze antracytowym. Zamówienie powinno obejmować także bramę przesuwną o szerokości 5 metrów oraz furtkę o szerokości około 1 metra.\n\nProszę o uwzględnienie w wycenie wykonania konstrukcji, malowania proszkowego oraz montażu na miejscu. Posesja znajduje się w okolicach Piaseczna.\n\nBędę wdzięczny za szacunkową cenę i termin realizacji.\n\nPozdrawiam\nMichał Nowak",
        },
        detected: [
          { label: "Zlecenie", value: "wykonanie i montaż ogrodzenia" },
          { label: "Długość", value: "ok. 45 mb" },
          { label: "Materiał", value: "poziome profile stalowe, antracyt" },
          { label: "Brama", value: "przesuwna, szer. 5 m" },
          { label: "Furtka", value: "szer. ok. 1 m" },
          { label: "Usługi", value: "malowanie proszkowe, montaż", highlight: true },
          { label: "Lokalizacja", value: "okolice Piaseczna" },
        ],
        offer: {
          title: "Oferta - ogrodzenie posesji",
          customer: "Michał Nowak",
          quantityLabel: "Przedmiot oferty",
          quantity: "Ogrodzenie z bramą i furtką",
          itemsLabel: "Parametry zamówienia",
          items: ["Ogrodzenie ok. 45 mb", "Poziome profile stalowe, antracyt", "Brama przesuwna 5 m", "Furtka ok. 1 m", "Malowanie proszkowe", "Montaż na miejscu"],
          quote: {
            label: "Kalkulacja zamówienia",
            vatRate: 0.23,
            lines: [
              { label: "Przęsła z poziomych profili stalowych", detail: "45 mb × 420,00 zł/mb", amount: 18900 },
              { label: "Brama przesuwna, szer. 5 m", detail: "1 szt.", amount: 7800 },
              { label: "Furtka, szer. ok. 1 m", detail: "1 szt.", amount: 1900 },
              { label: "Malowanie proszkowe - antracyt", detail: "+12% wartości konstrukcji", amount: 3432 },
              { label: "Montaż na miejscu", detail: "45 mb × 90,00 zł/mb + bramy 1 200,00 zł", amount: 5250 },
            ],
          },
          reviewNote: "Termin realizacji i ostateczną cenę potwierdzasz po weryfikacji wyceny.",
          note: "Pozycje, stawki i kwoty są ilustracyjne i nie pochodzą z rzeczywistego cennika. Dane demonstracyjne.",
        },
      },
    ],
  },
  benefits: {
    eyebrow: "Korzyści",
    title: "Więcej niż automatyczne liczenie cen.",
    items: [
      { title: "Ceny oparte na danych", text: "Wycena korzysta z katalogu produktów, cen i stawek VAT." },
      { title: "Reguły i rabaty pod kontrolą", text: "Zdefiniowane zasady pomagają zachować spójność ofert." },
      {
        title: "Ty decydujesz o finalnej ofercie",
        text: "Możesz sprawdzić propozycję, zmienić pozycje i dopracować wynik przed wysłaniem.",
      },
      { title: "Historia i przejrzystość", text: "Wróć do wcześniejszych wycen, wiadomości i szczegółów kalkulacji." },
    ],
  },
  config: {
    eyebrow: "Konfiguracja",
    title: "Dopasowany do zasad, według których działa Twoja firma.",
    lead: "Każda firma ma własny sposób wyceny, inne produkty i zasady współpracy z klientami. Pricer można dopasować do tych reguł, tak aby przygotowywanie ofert odpowiadało rzeczywistemu procesowi w Twojej firmie.",
    items: [
      { title: "Katalog produktów" },
      { title: "Modele cenowe i stawki VAT" },
      { title: "Rabaty ilościowe i inne reguły cenowe" },
      { title: "Typy klientów i projektów", note: "jeśli mają znaczenie" },
      { title: "Szablony ofert i odpowiedzi" },
      { title: "Kanały komunikacji", note: "tam, gdzie wdrożono integrację" },
    ],
  },
  closing: {
    title: "Ile czasu zajmuje dziś przygotowanie jednej oferty?",
    text: "Porozmawiajmy o tym, jak wygląda proces wycen w Twojej firmie i czy Pricer może go uprościć.",
  },
  locale: "pl-PL",
  currency: "PLN",
};

const en: PricerCopy = {
  meta: {
    title: "Pricer - quotation and offer system | Data Wildcat",
    description:
      "Pricer turns customer enquiries into structured quotes and ready-to-send offers, based on your product catalogue, pricing rules and templates.",
  },
  hero: {
    eyebrow: "Quotation and offer system",
    title: "From a customer's message to a ready offer.",
    lead: "Pricer brings order to the way quotes are prepared - from the first enquiry, through automatic calculations and discounts, to a finished offer. All based on your company's own data and rules.",
    secondary: "See how Pricer works",
    flow: {
      label: "Diagram: customer message, product and pricing data, quote, ready offer",
      message: "Customer message",
      catalogue: "Products & prices",
      quote: "Quote",
      offer: "Ready offer",
      vat: "VAT",
    },
  },
  problem: {
    eyebrow: "The problem",
    title: "The enquiry is simple. Preparing a good offer isn't always.",
    intro: "Behind every offer sent there are several manual steps, repeated for each enquiry:",
    tasks: [
      "Reading unstructured customer emails",
      "Working out which products and quantities are needed",
      "Looking up prices and VAT rates",
      "Checking discounts and pricing rules",
      "Preparing the offer and the reply to the customer",
      "Recording what was sent and how the price was calculated",
    ],
    closing: "As the number of enquiries grows, manual work increases the risk of mistakes, inconsistencies and lost time.",
  },
  how: {
    eyebrow: "How Pricer works",
    title: "One process. From enquiry to offer.",
    reviewBadge: "Your call",
    steps: [
      {
        title: "Customer message",
        text: "Paste the enquiry, or pass it into the process through a configured communication channel.",
      },
      {
        title: "Understanding the request",
        text: "The system reads the message and identifies products, quantities, requirements or budget.",
      },
      {
        title: "Data-based pricing",
        text: "Prices, VAT and discounts come from the product catalogue and configured rules.",
      },
      {
        title: "Review and refine",
        text: "You can check the result, change items and approve the proposal.",
      },
      {
        title: "Ready offer",
        text: "The system prepares a structured offer, e.g. as HTML or PDF, and the quote is saved to the history.",
      },
    ],
  },
  demo: {
    eyebrow: "Demo",
    title: "See how Pricer turns a message into an offer.",
    lead: "Choose a sample enquiry and see what the result of the process can look like.",
    notice: "Illustrative demo - sample data and sample result.",
    industryLabel: "Choose an industry",
    selectorLabel: "Choose a scenario",
    emailLabel: "Message from the customer",
    toLabel: "To",
    subjectLabel: "Subject",
    generate: "Prepare a sample offer",
    again: "Run again",
    running: "Running the simulation…",
    done: "The sample offer is ready.",
    placeholder: "A sample offer based on the selected message will appear here.",
    steps: ["Reading the message", "Matching products from the catalogue", "Calculating the quote", "Preparing the offer"],
    detectedLabel: "Recognised in the message",
    offerBadge: "Sample offer",
    customerLabel: "Customer",
    quantityLabel: "Quantity",
    itemsLabel: "Basket contents",
    perBasket: "Price per basket",
    netLabel: "Net",
    vatLabel: "VAT",
    grossLabel: "Gross",
    discountLabel: "Quantity discount",
    budgetLabel: "Budget limit",
    budgetPerBasket: "net / basket",
    formatsLabel: "Offer format",
    illustrativeLabel: "Illustrative values",
    totalNetLabel: "Total net",
    totalVatLabel: "VAT 23%",
    totalGrossLabel: "Total gross",
    noscript:
      "The interactive demo needs JavaScript. Below is the sample enquiry and sample offer for the standard scenario.",
    industries: [
      { id: "gifts", label: "Gift & Corporate Gifting", hint: "Product catalogue, quantity discounts, budget" },
      {
        id: "architecture",
        label: "Architecture",
        hint: "Service priced by project parameters",
        steps: [
          "Reading the message",
          "Identifying the project parameters",
          "Calculating the service quote",
          "Preparing the offer",
        ],
      },
      {
        id: "metal",
        label: "Metal Fabrication",
        hint: "Custom order: materials, dimensions, services",
        steps: [
          "Reading the message",
          "Identifying dimensions and materials",
          "Calculating structure and services",
          "Preparing the offer",
        ],
      },
    ],
    scenarios: [
      {
        id: "standard",
        industry: "gifts",
        label: "Gift baskets - standard enquiry",
        hint: "Five baskets with specified contents",
        email: {
          from: "Jan Kowalski",
          subject: "Request for a quote - gift baskets",
          body: "Hello,\n\nWe need five gift baskets for a conference. Each with tea, an energy bar, crackers and honey. Please send us an offer.\n\nBest regards\nJan Kowalski",
        },
        detected: [
          { label: "Product", value: "Gift basket" },
          { label: "Quantity", value: "5" },
          { label: "Contents", value: "tea, energy bar, crackers, honey" },
        ],
        offer: {
          title: "Offer - gift baskets",
          customer: "Jan Kowalski",
          quantity: "5 baskets",
          items: ["Tea", "Energy bar", "Crackers", "Honey"],
          pricing: EXAMPLE_PRICING,
          note: "Price per basket based on the example from the product presentation. Sample data.",
        },
      },
      {
        id: "budget",
        industry: "gifts",
        label: "Gift baskets - with a budget limit",
        hint: "Same contents, max. PLN 90 net per basket",
        email: {
          from: "Jan Kowalski",
          subject: "Request for a quote - gift baskets (budget)",
          body: "Hello,\n\nWe need five gift baskets for a conference. Each with tea, an energy bar, crackers and honey. The maximum price per basket is PLN 90 net. Please send us an offer.\n\nBest regards,\nJan Kowalski",
        },
        detected: [
          { label: "Product", value: "Gift basket" },
          { label: "Quantity", value: "5" },
          { label: "Contents", value: "tea, energy bar, crackers, honey" },
          { label: "Budget", value: "max. PLN 90 net / basket", highlight: true },
        ],
        offer: {
          title: "Offer - gift baskets",
          customer: "Jan Kowalski",
          quantity: "5 baskets",
          items: ["Tea", "Energy bar", "Crackers", "Honey"],
          budget: {
            limitNet: 90,
            suggestionsTitle: "Suggested additions",
            suggestions: [
              "Pricer can suggest additional products from the catalogue so that the basket stays within the limit.",
              "Every suggestion is a draft - you can remove an item and get another one that still fits the budget.",
            ],
            reviewNote: "You approve the offer only after reviewing the proposal.",
          },
          note: "Basket contents and prices depend on your catalogue and rules. Sample data.",
        },
      },
      {
        id: "house",
        industry: "architecture",
        label: "Single-family house design",
        hint: "Design service quote, approx. 160 m²",
        email: {
          from: "Tomasz Wiśniewski",
          subject: "Request for a Quote for a Single-Family House Design",
          body: "Hello,\n\nI would like to request a quote for preparing a custom design for a single-family house with an approximate floor area of 160 m².\n\nThe house would be single-storey with a usable attic and a single-car garage. We are interested in a modern, simple building design with a spacious living room connected to the kitchen.\n\nThe plot is located near Warsaw and has an area of approximately 900 m².\n\nCould you please provide an estimated price for preparing this design and an approximate project delivery timeline?\n\nBest regards,\nTomasz Wiśniewski",
        },
        detected: [
          { label: "Service", value: "custom single-family house design" },
          { label: "Floor area", value: "approx. 160 m²" },
          { label: "Building", value: "single storey + usable attic, modern" },
          { label: "Garage", value: "single-car" },
          { label: "Plot", value: "approx. 900 m², near Warsaw" },
          { label: "Customer asks for", value: "price and delivery timeline", highlight: true },
        ],
        offer: {
          title: "Offer - single-family house design",
          customer: "Tomasz Wiśniewski",
          quantityLabel: "Subject of the offer",
          quantity: "Custom house design",
          itemsLabel: "Project parameters",
          items: ["Approx. 160 m² floor area", "Single storey with usable attic", "Single-car garage", "Living room open to the kitchen", "Plot approx. 900 m²"],
          quote: {
            label: "Service calculation",
            vatRate: 0.23,
            lines: [
              { label: "Custom design - base rate", detail: "160 m² × PLN 120.00/m²", amount: 19200 },
              { label: "Usable attic - complexity", detail: "+10% of base rate", amount: 1920 },
              { label: "Integrated single-car garage", detail: "flat fee", amount: 2500 },
              { label: "Plot and local conditions analysis", detail: "flat fee", amount: 1800 },
            ],
          },
          reviewNote: "The practice confirms the timeline and final price after reviewing the quote.",
          note: "Items, rates and amounts are illustrative and do not come from a real price list. Sample data.",
        },
      },
      {
        id: "fence",
        industry: "metal",
        label: "Fencing with sliding and pedestrian gates",
        hint: "Fabrication, coating and installation, approx. 45 m",
        email: {
          from: "Michał Nowak",
          subject: "Request for a Quote for Property Fencing",
          body: "Hello,\n\nI would like to request a quote for manufacturing and installing property fencing, including an entrance gate.\n\nI am interested in metal fencing approximately 45 meters long, made of horizontal steel profiles in anthracite grey. The order should also include a sliding gate with a width of 5 meters and a pedestrian gate approximately 1 meter wide.\n\nPlease include the manufacturing of the structure, powder coating, and on-site installation in the quotation. The property is located near Piaseczno.\n\nI would appreciate an estimated price and delivery timeline.\n\nBest regards,\nMichał Nowak",
        },
        detected: [
          { label: "Order", value: "fencing fabrication and installation" },
          { label: "Length", value: "approx. 45 m" },
          { label: "Material", value: "horizontal steel profiles, anthracite" },
          { label: "Gate", value: "sliding, 5 m wide" },
          { label: "Pedestrian gate", value: "approx. 1 m wide" },
          { label: "Services", value: "powder coating, installation", highlight: true },
          { label: "Location", value: "near Piaseczno" },
        ],
        offer: {
          title: "Offer - property fencing",
          customer: "Michał Nowak",
          quantityLabel: "Subject of the offer",
          quantity: "Fencing with gates",
          itemsLabel: "Order parameters",
          items: ["Fencing approx. 45 m", "Horizontal steel profiles, anthracite", "Sliding gate 5 m", "Pedestrian gate approx. 1 m", "Powder coating", "On-site installation"],
          quote: {
            label: "Order calculation",
            vatRate: 0.23,
            lines: [
              { label: "Fence panels, horizontal steel profiles", detail: "45 m × PLN 420.00/m", amount: 18900 },
              { label: "Sliding gate, 5 m wide", detail: "1 pc", amount: 7800 },
              { label: "Pedestrian gate, approx. 1 m wide", detail: "1 pc", amount: 1900 },
              { label: "Powder coating - anthracite", detail: "+12% of structure value", amount: 3432 },
              { label: "On-site installation", detail: "45 m × PLN 90.00/m + gates PLN 1,200.00", amount: 5250 },
            ],
          },
          reviewNote: "You confirm the timeline and final price after reviewing the quote.",
          note: "Items, rates and amounts are illustrative and do not come from a real price list. Sample data.",
        },
      },
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "More than automatic price calculation.",
    items: [
      { title: "Prices based on data", text: "Quotes use your product catalogue, prices and VAT rates." },
      { title: "Rules and discounts under control", text: "Defined rules help keep your offers consistent." },
      {
        title: "You decide on the final offer",
        text: "Review the proposal, change items and refine the result before it is sent.",
      },
      { title: "History and transparency", text: "Go back to earlier quotes, messages and calculation details." },
    ],
  },
  config: {
    eyebrow: "Configuration",
    title: "Built around the rules your business already works by.",
    lead: "Every company has its own way of pricing, its own products and its own terms with customers. Pricer can be adapted to those rules, so that preparing offers reflects the way your business actually works.",
    items: [
      { title: "Product catalogue" },
      { title: "Pricing models and VAT rates" },
      { title: "Quantity discounts and other pricing rules" },
      { title: "Customer and project types", note: "where relevant" },
      { title: "Offer and reply templates" },
      { title: "Communication channels", note: "where an integration is in place" },
    ],
  },
  closing: {
    title: "How long does it take to prepare one offer today?",
    text: "Let's talk about how quoting works in your company and whether Pricer could make it simpler.",
  },
  locale: "en-GB",
  currency: "PLN",
};

const copy: Record<Lang, PricerCopy> = { pl, en };

export function pricerCopy(lang: Lang): PricerCopy {
  return copy[lang];
}
