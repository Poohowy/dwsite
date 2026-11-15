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

export interface DemoScenario {
  id: string;
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
    noscript: string;
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
    noscript:
      "Interaktywna prezentacja wymaga włączonego JavaScriptu. Poniżej przykładowe zapytanie i przykładowa oferta dla standardowego scenariusza.",
    scenarios: [
      {
        id: "standard",
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
    noscript:
      "The interactive demo needs JavaScript. Below is the sample enquiry and sample offer for the standard scenario.",
    scenarios: [
      {
        id: "standard",
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
