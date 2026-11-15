import type { Lang } from "./types";

/**
 * Contact page copy. Kept separate from the shared dictionaries so the Contact
 * page can evolve without touching homepage content.
 */

/**
 * Contact details — identical in both languages.
 * BUILD-TIME ONLY: never import this into a client <script>; the page ships only
 * the encoded form (see encodeContact) and assembles the details in the browser.
 */
export const CONTACT = {
  email: "sales@datawildcat.pl",
  phoneDisplay: "+48 606 331 385",
  phoneHref: "+48606331385",
} as const;

export interface ContactCopy {
  meta: { title: string; description: string };
  eyebrow: string;
  titleQuestion: string;
  titleInvite: string;
  lead: string;
  free: string;
  detailsLabel: string;
  email: { label: string; action: string };
  phone: { label: string; action: string };
  copy: { idle: string; done: string; emailAria: string; phoneAria: string };
  /** Shown only when JavaScript is unavailable (details are assembled in the browser). */
  noscript: { email: string; phone: string };
  location: { label: string; value: string };
  next: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  closing: { title: string; text: string; email: string; phone: string };
}

const pl: ContactCopy = {
  meta: {
    title: "Kontakt — Data Wildcat",
    description:
      "Napisz lub zadzwoń i opowiedz, co chcesz usprawnić w swojej firmie. Pierwsza konsultacja jest bezpłatna.",
  },
  eyebrow: "Kontakt",
  titleQuestion: "Masz pomysł na usprawnienie swojej firmy?",
  titleInvite: "Porozmawiajmy",
  lead: "Opowiedz nam, co zajmuje czas Twojego zespołu lub utrudnia codzienną pracę. Nie musisz znać rozwiązania — wystarczy, że opiszesz problem. Wspólnie zastanowimy się, co można z tym zrobić.",
  free: "Pierwsza konsultacja jest bezpłatna",
  detailsLabel: "Dane kontaktowe",
  email: { label: "Napisz do nas", action: "Wyślij wiadomość" },
  phone: { label: "Zadzwoń", action: "Zadzwoń teraz" },
  copy: { idle: "Kopiuj", done: "Skopiowano", emailAria: "Kopiuj adres e-mail", phoneAria: "Kopiuj numer telefonu" },
  noscript: {
    email: "Włącz JavaScript, aby zobaczyć adres e-mail",
    phone: "Włącz JavaScript, aby zobaczyć numer telefonu",
  },
  location: { label: "Lokalizacja", value: "Warszawa, Polska" },
  next: {
    eyebrow: "Co dalej?",
    title: "Jak zacząć rozmowę?",
    steps: [
      { title: "Kontaktujesz się z nami", text: "Napisz lub zadzwoń i opowiedz krótko, czego potrzebujesz." },
      { title: "Poznajemy problem", text: "Wspólnie ustalamy, co nie działa lub co można usprawnić." },
      { title: "Szukamy rozwiązania", text: "Sprawdzamy, czy i jak możemy pomóc." },
    ],
  },
  closing: {
    title: "Nie wiesz, od czego zacząć?",
    text: "Wystarczy kilka zdań o tym, co chcesz usprawnić. Resztę ustalimy w rozmowie.",
    email: "Napisz e-mail",
    phone: "Zadzwoń",
  },
};

const en: ContactCopy = {
  meta: {
    title: "Contact — Data Wildcat",
    description:
      "Write or call and tell us what you'd like to improve in your business. The first consultation is free.",
  },
  eyebrow: "Contact",
  titleQuestion: "Have an idea for improving your business?",
  titleInvite: "Let's talk",
  lead: "Tell us what takes up your team's time or makes everyday work harder. You don't need to know the solution — just describe the problem. We'll work out together what can be done about it.",
  free: "The first consultation is free",
  detailsLabel: "Contact details",
  email: { label: "Write to us", action: "Send an email" },
  phone: { label: "Call us", action: "Call now" },
  copy: { idle: "Copy", done: "Copied", emailAria: "Copy email address", phoneAria: "Copy phone number" },
  noscript: {
    email: "Enable JavaScript to see the email address",
    phone: "Enable JavaScript to see the phone number",
  },
  location: { label: "Location", value: "Warsaw, Poland" },
  next: {
    eyebrow: "What happens next?",
    title: "How to start the conversation",
    steps: [
      { title: "You get in touch", text: "Write or call and briefly tell us what you need." },
      { title: "We get to know the problem", text: "Together we work out what isn't working or what could be improved." },
      { title: "We look for a solution", text: "We check whether and how we can help." },
    ],
  },
  closing: {
    title: "Not sure where to start?",
    text: "A few sentences about what you'd like to improve are enough. We'll work out the rest in conversation.",
    email: "Send an email",
    phone: "Call",
  },
};

const copy: Record<Lang, ContactCopy> = { pl, en };

export function contactCopy(lang: Lang): ContactCopy {
  return copy[lang];
}
