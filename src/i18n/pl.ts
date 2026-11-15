import type { Dictionary } from "./types";

// Source: docs/HOMEPAGE_DESIGN_SPECIFICATION_v1.0.md (draft copy, section 6).
export const pl: Dictionary = {
  meta: {
    title: "Data Wildcat — Ty przychodzisz z problemem. My znajdujemy rozwiązanie.",
    description:
      "Pomagamy małym i średnim firmom usprawniać procesy, ograniczać powtarzalną pracę i dobierać technologię do realnych potrzeb — od automatyzacji i integracji po dedykowane aplikacje i AI.",
  },
  routes: { home: "/", contact: "/kontakt/", pricer: "/pricer/", archiflow: "/archiflow/" },
  nav: {
    label: "Nawigacja główna",
    pricer: "Pricer",
    archiflow: "ArchiFlow",
    process: "Jak pracujemy?",
    cta: "Umów konsultację",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    langLabel: "Wybór języka",
    homeLabel: "Data Wildcat — strona główna",
  },
  cta: { primary: "Umów bezpłatną konsultację" },
  hero: {
    eyebrow: "Data Wildcat / Partner technologiczny",
    titleLine1: "Ty przychodzisz z problemem.",
    titleLine2: "My znajdujemy rozwiązanie.",
    lead: "Pomagamy firmom usprawniać procesy, ograniczać powtarzalną pracę i lepiej wykorzystywać technologię. Dobieramy rozwiązania do realnych potrzeb - od automatyzacji i integracji po dedykowane aplikacje i AI.",
    secondary: "Zobacz, jak pracujemy",
    diagram: {
      label: "Schemat: od problemu do dobranego rozwiązania",
      problemsLabel: "Problem",
      solutionsLabel: "Rozwiązanie",
      problems: ["Ręczne przepisywanie danych", "Rozproszone informacje", "Systemy bez połączenia"],
      solutions: ["Automatyzacja", "Integracja", "Aplikacja", "AI"],
      note: "Najpierw rozmowa i analiza potrzeb, potem technologia",
    },
  },
  problems: {
    eyebrow: "01 / Czy brzmi to znajomo?",
    title: "W Twojej firmie też tak to wygląda?",
    intro:
      "W wielu firmach wartościowy czas zespołu znika na czynnościach, które powtarzają się każdego dnia. Informacje są rozproszone, dane trzeba przepisywać, a proste zadania zajmują więcej czasu, niż powinny.",
    items: [
      {
        title: "Oferty i wyceny",
        text: "Przygotowanie każdej oferty oznacza ponowne zbieranie informacji, przepisywanie danych i pracę z podobnymi dokumentami.",
      },
      {
        title: "Maile i komunikacja",
        text: "Ważne ustalenia giną w skrzynkach, a informacje trzeba ręcznie przenosić między wiadomościami i systemami.",
      },
      {
        title: "Dokumenty",
        text: "Znalezienie właściwego pliku, aktualnej wersji lub konkretnej informacji zajmuje zbyt dużo czasu.",
      },
      {
        title: "Raportowanie",
        text: "Zanim powstanie raport, ktoś musi zebrać dane z kilku narzędzi i arkuszy.",
      },
      {
        title: "Powtarzalne czynności",
        text: "Zespół codziennie wykonuje zadania według tego samego schematu, zamiast poświęcać czas na ważniejszą pracę.",
      },
      {
        title: "Brak integracji",
        text: "Systemy nie wymieniają danych, więc pracownicy stają się ręcznym łącznikiem między nimi.",
      },
      {
        title: "Kontrola projektów",
        text: "Trudno szybko sprawdzić, co jest zrobione, co się opóźnia i gdzie znajdują się potrzebne dokumenty.",
      },
      {
        title: "Niepewność dotycząca AI",
        text: "Wszyscy mówią o AI, ale nie wiadomo, czy w Twojej firmie rozwiąże konkretny problem, czy tylko doda kolejne narzędzie.",
      },
    ],
  },
  calculator: {
    eyebrow: "02 / Kalkulator",
    title: "Ile kosztuje Twoją firmę powtarzalna praca?",
    intro:
      "Sprawdź, ile czasu i pieniędzy Twój zespół przeznacza na zadania, które być może można uprościć lub zautomatyzować.",
    inputsLabel: "Dane wejściowe",
    sliders: {
      people: { label: "Osoby wykonujące powtarzalną pracę", unit: "os.", min: 2, max: 250, step: 1, initial: 25 },
      hours: { label: "Powtarzalna praca na osobę / tydzień", unit: "h", min: 1, max: 20, step: 1, initial: 6 },
      rate: { label: "Średni koszt godziny pracownika", unit: "zł", min: 20, max: 400, step: 1, initial: 55 },
    },
    resultsLabel: "Szacowany wpływ",
    results: {
      hours: "Godziny powtarzalnej pracy / tydzień",
      monthly: "Szacunkowy koszt / miesiąc",
      yearly: "Szacunkowy koszt / rok",
    },
    hoursUnit: "h",
    disclaimer:
      "To szacunek oparty na podanych wartościach. Rzeczywiste możliwości ograniczenia kosztów zależą od procesu, zakresu zmian i sposobu wdrożenia.",
    assumptions: "Założenia: 52 tygodnie w roku, miesiąc = 52 / 12 tygodnia.",
    locale: "pl-PL",
    currency: "PLN",
  },
  solutions: {
    eyebrow: "03 / Nasze podejście",
    title: "Najpierw poznajemy Twoją firmę. Potem dobieramy rozwiązanie.",
    intro:
      "Każda firma działa inaczej. Dlatego najpierw poznajemy sposób pracy i szukamy miejsca, w którym można coś uprościć. Dopiero później dobieramy rozwiązanie — takie, które ma sens biznesowy i technologiczny.",
    chooseLabel: "Dobieramy rozwiązanie",
    items: [
      { title: "Automatyzacja procesów", text: "Ograniczamy ręczne, powtarzalne zadania i usprawniamy przepływ pracy." },
      {
        title: "Sztuczna inteligencja",
        text: "Wykorzystujemy AI tam, gdzie pomaga analizować informacje, pracować z dokumentami lub wspierać decyzje.",
      },
      {
        title: "Dedykowane aplikacje",
        text: "Tworzymy narzędzia dopasowane do procesów, których nie obsługują dobrze gotowe rozwiązania.",
      },
      {
        title: "Integracje systemów",
        text: "Łączymy używane narzędzia, aby informacje przepływały między nimi bez ręcznego kopiowania.",
      },
    ],
    deployment: {
      label: "Dopasowujemy wdrożenie",
      title: "Technologia powinna pasować do Twojej firmy. Nie odwrotnie.",
      intro:
        "Niezależnie od tego, czy potrzebujesz prostej automatyzacji, dedykowanej aplikacji czy rozwiązania wykorzystującego AI, dobieramy sposób wdrożenia do Twoich procesów i warunków.",
      or: "lub",
      options: [
        {
          title: "Chmura",
          text: "Możemy wykorzystać AWS, Azure lub Google Cloud, jeśli chmura jest właściwym wyborem dla danego rozwiązania.",
          tags: ["AWS", "Azure", "Google Cloud"],
        },
        {
          title: "Środowisko lokalne",
          text: "Rozwiązania mogą działać również w infrastrukturze Twojej firmy, jeśli wymagają tego procesy lub zasady organizacji.",
        },
      ],
    },
    statement: "Nie każda firma potrzebuje AI. Każda potrzebuje rozwiązania, które ma sens.",
  },
  products: {
    eyebrow: "04 / Przykładowe rozwiązania",
    title: "Produkty, które mogą pomóc Twojej firmie już dziś.",
    intro: "Poznaj narzędzia, które rozwijamy, aby usprawniać konkretne procesy biznesowe.",
    mockNote: "Makieta poglądowa",
    pricer: {
      status: "Gotowy produkt",
      name: "Pricer",
      text: "Automatyzacja przygotowywania ofert na podstawie wiadomości i informacji otrzymanych od klienta. Mniej ręcznego przepisywania, bardziej uporządkowany proces przygotowania wyceny.",
      cta: "Poznaj Pricer",
      mock: {"steps": ["Wiadomość", "Analiza", "Oferta"], "mailFrom": "Klient", "mailSubject": "Zapytanie ofertowe", "extracted": "Dane z wiadomości", "fields": ["Klient", "Zakres", "Ilość", "Termin"], "offer": "Oferta", "total": "Razem", "ready": "Gotowa do wysłania"},
    },
    archiflow: {
      status: "W trakcie rozwoju",
      name: "ArchiFlow",
      text: "System rozwijany z myślą o biurach architektonicznych, który ma wspierać organizację projektów, harmonogramów, zespołu i dokumentacji.",
      cta: "Poznaj ArchiFlow",
      mock: {"nav": ["Projekty", "Harmonogram", "Zespół", "Dokumenty", "Klienci"], "overview": "Aktywne projekty", "projects": ["Projekt A", "Projekt B", "Projekt C"], "statuses": ["Koncepcja", "Projekt budowlany", "Projekt wykonawczy"], "schedule": "Harmonogram", "documents": "Dokumenty"},
    },
  },
  process: {
    eyebrow: "05 / Jak pracujemy?",
    title: "Od pierwszej rozmowy do rozwiązania.",
    intro: "Nie musisz wiedzieć, jakiej technologii potrzebujesz. Wystarczy, że opowiesz nam, co chcesz usprawnić.",
    steps: [
      { title: "Rozmawiamy", text: "Zaczynamy od bezpłatnej konsultacji i poznania problemu." },
      { title: "Poznajemy proces", text: "Sprawdzamy, jak wygląda obecna praca i gdzie pojawiają się trudności." },
      { title: "Proponujemy rozwiązanie", text: "Przedstawiamy możliwe podejście, zakres i kolejne kroki." },
      { title: "Budujemy i wdrażamy", text: "Tworzymy rozwiązanie i pomagamy uruchomić je w firmie." },
      { title: "Rozwijamy", text: "W razie potrzeby rozwijamy rozwiązanie wraz ze zmieniającymi się potrzebami." },
    ],
    cta: "Porozmawiajmy o Twoim problemie",
  },
  team: {
    eyebrow: "06 / Dlaczego my?",
    title: "Technologia to narzędzie. Najważniejsze jest to, co dzięki niej zmienisz.",
    pillars: [
      { title: "Najpierw słuchamy", text: "Zanim zaproponujemy rozwiązanie, chcemy zrozumieć, jak działa Twoja firma." },
      { title: "Bez niepotrzebnego żargonu", text: "Wyjaśniamy możliwości i ograniczenia prostym językiem." },
      {
        title: "Bez wciskania technologii",
        text: "Nie proponujemy AI ani skomplikowanego systemu, jeśli prostsze rozwiązanie wystarczy.",
      },
      { title: "Jasne zasady współpracy", text: "Wiesz, co proponujemy, dlaczego i jakie są kolejne kroki." },
    ],
    teamTitle: "Poznaj ludzi, z którymi będziesz pracować.",
    teamText:
      "Data Wildcat tworzy trzyosobowy zespół z kilkunastoletnim doświadczeniem w branży, szczególnie w przetwarzaniu dużych zbiorów danych i automatyzacji procesów.",
    placeholderName: "Członek zespołu",
    placeholderNote: "Zdjęcie i opis do uzupełnienia",
  },
  faq: {
    eyebrow: "07 / FAQ",
    title: "Najczęstsze pytania",
    items: [
      {
        q: "Czy moja firma musi korzystać z AI, żeby współpracować z Data Wildcat?",
        a: "Nie. AI jest tylko jednym z narzędzi. Czasami lepszym rozwiązaniem będzie automatyzacja, integracja systemów lub dedykowana aplikacja. Zaczynamy od problemu i dobieramy do niego odpowiednie podejście.",
      },
      {
        q: "Czy współpracujecie z małymi firmami?",
        a: "Tak. Koncentrujemy się na potrzebach małych i średnich przedsiębiorstw. Rozwiązanie powinno być dopasowane do skali i możliwości firmy.",
      },
      {
        q: "Nie wiem dokładnie, czego potrzebuję. Czy mimo to mogę się odezwać?",
        a: "Oczywiście. Nie musisz znać technologii ani gotowego rozwiązania. Wystarczy, że opowiesz nam, co chciałbyś usprawnić.",
      },
      {
        q: "Jak wygląda pierwsza konsultacja?",
        a: "To bezpłatna rozmowa, podczas której poznajemy problem i obecny sposób pracy. Wspólnie zastanawiamy się, jakie mogą być kolejne kroki.",
      },
      {
        q: "Ile kosztuje stworzenie rozwiązania?",
        a: "Koszt zależy od problemu, zakresu i złożoności projektu. Po poznaniu potrzeb możemy zaproponować odpowiednie podejście i określić zakres prac.",
      },
      {
        q: "Czy rozwiązanie musi działać w chmurze?",
        a: "Nie. W zależności od wymagań może działać w chmurze lub w środowisku lokalnym firmy.",
      },
      {
        q: "Co z bezpieczeństwem danych?",
        a: "Sposób przetwarzania i przechowywania danych dobieramy do wymagań projektu i środowiska klienta. Konkretne zasady bezpieczeństwa ustalamy przed wdrożeniem.",
      },
      {
        q: "Czy możecie połączyć rozwiązanie z systemami, których już używamy?",
        a: "To jeden z obszarów, którymi się zajmujemy. Możliwość integracji zależy od konkretnych systemów i dostępnych sposobów wymiany danych.",
      },
    ],
  },
  finalCta: {
    title: "Masz problem, który można rozwiązać lepiej? Porozmawiajmy.",
    text: "Opowiedz nam, co zajmuje czas Twojego zespołu lub utrudnia codzienną pracę. Wspólnie sprawdzimy, czy możemy to usprawnić.",
  },
  footer: {
    tagline: "Ty przychodzisz z problemem. My znajdujemy rozwiązanie.",
    navLabel: "Nawigacja w stopce",
    productsLabel: "Produkty",
    companyLabel: "Firma",
    contact: "Kontakt",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  stub: {
    badge: "Strona w przygotowaniu",
    text: "Ta podstrona jest w przygotowaniu. Wkrótce znajdziesz tu szczegółowe informacje.",
    back: "Wróć na stronę główną",
  },
};
