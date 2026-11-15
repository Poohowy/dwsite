import type { Lang } from "./types";

/**
 * ArchiFlow landing page — copy.
 * Source of truth: docs/ARCHIFLOW_PRODUCT_LANDING_PAGE_SPECIFICATION_v1.0.md
 *
 * Only capabilities confirmed by the specification and the supplied screenshots.
 * Not an ERP/CRM; no integrations, automatic planning/assignment, invoicing,
 * budgeting, statistics or testimonials. The client portal is described only
 * with the four confirmed items and is never illustrated with internal screens.
 */

/** Real product screenshots in /public/images/archiflow (intrinsic sizes for layout stability). */
export const SCREENSHOTS = {
  dashboard: { src: "/images/archiflow/dashboard.png", width: 2078, height: 1241 },
  projects: { src: "/images/archiflow/projects.png", width: 2084, height: 1232 },
  schedule: { src: "/images/archiflow/schedule.png", width: 2169, height: 1235 },
  team: { src: "/images/archiflow/team.png", width: 2099, height: 1232 },
  clients: { src: "/images/archiflow/clients.png", width: 2082, height: 1231 },
} as const;

export type ScreenshotKey = keyof typeof SCREENSHOTS;

export interface ArchiFlowModule {
  label: string;
  title: string;
  text: string;
  /** Screenshot key, or omitted for a text-based composition. */
  shot?: ScreenshotKey;
  alt?: string;
  /** For the documentation module: what the project record brings together. */
  record?: { title: string; items: string[] };
}

export interface ArchiFlowCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; secondary: string; shotAlt: string };
  problem: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  overview: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] };
  modules: { eyebrow: string; title: string; openFull: string; items: ArchiFlowModule[] };
  portal: {
    eyebrow: string;
    title: string;
    text: string;
    practice: { title: string; text: string };
    hub: string;
    client: { title: string; text: string };
    listTitle: string;
    items: string[];
    benefit: string;
    diagramLabel: string;
  };
  benefits: { eyebrow: string; title: string; items: string[] };
  growth: { eyebrow: string; title: string; text: string };
  closing: { title: string; text: string };
  screenshotNote: string;
}

const pl: ArchiFlowCopy = {
  meta: {
    title: "ArchiFlow — zarządzanie projektami dla biur architektonicznych | Data Wildcat",
    description:
      "ArchiFlow porządkuje projekty, harmonogramy, zespół i informacje o klientach biura architektonicznego w jednym miejscu.",
  },
  hero: {
    eyebrow: "Zarządzanie projektami dla biur architektonicznych",
    title: "Wszystkie projekty Twojego biura. W jednym miejscu.",
    lead: "ArchiFlow pomaga uporządkować projekty, harmonogramy, zespół i informacje o klientach. Zyskaj lepszy wgląd w to, co dzieje się w Twoim biurze - bez szukania informacji w wielu miejscach.",
    secondary: "Poznaj możliwości",
    shotAlt:
      "Ekran Dashboard w ArchiFlow: liczba aktywnych projektów, projekty wymagające uwagi, najbliższe terminy, obciążenie zespołu i ostatnio aktualizowane projekty.",
  },
  problem: {
    eyebrow: "Problem",
    title: "Kiedy informacje są wszędzie, trudno mieć kontrolę nad całością.",
    intro:
      "Projekty, terminy, dokumenty i ustalenia z klientami często żyją w różnych plikach, skrzynkach mailowych i głowach pracowników. ArchiFlow pomaga zebrać najważniejsze informacje w jednym systemie.",
    items: [
      { title: "Rozproszone informacje", text: "Status projektu wymaga sprawdzania kilku źródeł." },
      { title: "Brak pełnego obrazu", text: "Trudno szybko ocenić, które projekty wymagają uwagi." },
      { title: "Niepewne terminy", text: "Potencjalne opóźnienia łatwo zauważyć zbyt późno." },
      { title: "Przeciążony zespół", text: "Bez wspólnego widoku trudno ocenić obciążenie pracowników." },
      {
        title: "Powtarzające się pytania klientów",
        text: "Pracownicy poświęcają czas na przekazywanie informacji o statusie prac.",
      },
    ],
  },
  overview: {
    eyebrow: "Jedno centralne miejsce",
    title: "Pełniejszy obraz pracy biura. Bez zbierania informacji z kilku miejsc.",
    text: "ArchiFlow łączy informacje o projektach, terminach, zespole i klientach. Dzięki temu właściciel biura i osoby odpowiedzialne za realizację mogą szybciej ocenić sytuację i skupić się na prowadzeniu projektów.",
    items: [
      { title: "Aktywne projekty i ich statusy", text: "Wiesz, ile realizacji jest w toku i na jakim są etapie." },
      { title: "Sprawy wymagające uwagi", text: "Projekty, które potrzebują reakcji, widać od razu." },
      { title: "Najbliższe terminy", text: "Nadchodzące ważne wydarzenia zebrane w jednym miejscu." },
      { title: "Obciążenie zespołu", text: "Szybciej zauważysz, kto ma za dużo pracy." },
      { title: "Ostatnia aktywność", text: "Chronologiczny podgląd ostatnich działań w projektach." },
    ],
  },
  modules: {
    eyebrow: "Możliwości",
    title: "Moduły, które porządkują codzienną pracę biura.",
    openFull: "Otwórz zrzut ekranu w pełnym rozmiarze",
    items: [
      {
        label: "Projekty",
        title: "Projekty pod kontrolą.",
        text: "Wszystkie realizacje w jednym widoku. Wyszukuj projekty, filtruj je według statusu, klienta lub osoby odpowiedzialnej i sprawdzaj postęp oraz terminy.",
        shot: "projects",
        alt: "Moduł Projekty w ArchiFlow: lista projektów z osobą odpowiedzialną, aktualnym etapem, postępem, terminem zakończenia i statusem, z filtrami statusu, klienta i osoby odpowiedzialnej.",
      },
      {
        label: "Harmonogram",
        title: "Terminy i etapy w jednym harmonogramie.",
        text: "Zobacz etapy wielu projektów na wspólnej osi czasu. Śledź postęp, nadchodzące kamienie milowe i projekty wymagające uwagi.",
        shot: "schedule",
        alt: "Moduł Harmonogram w ArchiFlow: etapy wielu projektów na wspólnej osi czasu, lista projektów wymagających uwagi, nadchodzące kamienie milowe i legenda statusów etapów.",
      },
      {
        label: "Zespół",
        title: "Zespół i obciążenie pracą.",
        text: "Sprawdzaj przypisane projekty i obciążenie poszczególnych osób. Łatwiej zauważaj przeciążenia i planuj pracę zespołu.",
        shot: "team",
        alt: "Moduł Zespół w ArchiFlow: członkowie zespołu z rolą, liczbą aktywnych projektów, poziomem obciążenia i statusem.",
      },
      {
        label: "Klienci",
        title: "Wszystkie relacje z klientami w jednym miejscu.",
        text: "Porządkuj informacje o klientach, typach współpracy i powiązanych projektach.",
        shot: "clients",
        alt: "Moduł Klienci w ArchiFlow: lista klientów z typem klienta (firma lub klient indywidualny), liczbą aktywnych projektów, ostatnią aktywnością i statusem.",
      },
      {
        label: "Dokumentacja projektu",
        title: "Dokumentacja przypisana do projektu.",
        text: "Gromadź kluczowe informacje, harmonogram, etapy oraz dokumenty związane z realizacją w ramach karty projektu.",
        record: {
          title: "Karta projektu",
          items: [
            "Dane klienta",
            "Numer umowy",
            "Harmonogram projektu",
            "Aktualny status",
            "Lista etapów",
            "Dokumenty i pliki związane z realizacją",
          ],
        },
      },
    ],
  },
  portal: {
    eyebrow: "Panel klienta",
    title: "Przejrzystość współpracy także po stronie klienta.",
    text: "Klient nie musi za każdym razem kontaktować się z biurem, aby dowiedzieć się, na jakim etapie jest jego projekt. Dedykowany panel zapewnia dostęp do udostępnionych informacji o realizacji.",
    practice: { title: "Biuro architektoniczne", text: "Prowadzi projekt i udostępnia informacje o realizacji" },
    hub: "ArchiFlow",
    client: { title: "Klient", text: "Sprawdza status swojego projektu samodzielnie" },
    listTitle: "Klient ma dostęp do:",
    items: [
      "Aktualnego etapu projektu",
      "Harmonogramu projektu",
      "Dokumentów i plików udostępnionych przez biuro",
      "Historii zakończonych etapów",
    ],
    benefit: "Mniej powtarzających się pytań o status prac. Więcej przejrzystości dla klienta.",
    diagramLabel: "Schemat: biuro architektoniczne, ArchiFlow i klient",
  },
  benefits: {
    eyebrow: "Korzyści",
    title: "Mniej czasu na szukanie informacji. Więcej kontroli nad realizacją.",
    items: [
      "Jeden widok najważniejszych informacji o projektach.",
      "Szybsze wychwytywanie opóźnień i spraw wymagających reakcji.",
      "Lepszy wgląd w obciążenie zespołu.",
      "Łatwiejsze przekazywanie projektów między pracownikami.",
      "Mniej powtarzającej się komunikacji o statusie prac.",
      "Większa przejrzystość dla klientów.",
    ],
  },
  growth: {
    eyebrow: "Rozwój produktu",
    title: "Narzędzie, które może rosnąć razem z Twoim biurem.",
    text: "ArchiFlow jest rozwijany z myślą o codziennych potrzebach biur architektonicznych. Obok obecnych możliwości systemu rozwijane są kolejne usprawnienia, które będą stopniowo rozszerzać sposób zarządzania projektami i współpracę z klientami.",
  },
  closing: {
    title: "Chcesz lepiej uporządkować pracę swojego biura?",
    text: "Porozmawiajmy o tym, jak ArchiFlow może pomóc w zarządzaniu projektami, harmonogramami i codzienną pracą zespołu.",
  },
  screenshotNote: "Zrzuty ekranu z aplikacji ArchiFlow.",
};

const en: ArchiFlowCopy = {
  meta: {
    title: "ArchiFlow — project management for architecture practices | Data Wildcat",
    description:
      "ArchiFlow brings an architecture practice's projects, schedules, team and client information together in one place.",
  },
  hero: {
    eyebrow: "Project management for architecture practices",
    title: "Every project in your practice. All in one place.",
    lead: "ArchiFlow helps you organise projects, schedules, your team and client information. Get a clearer picture of what's happening across your practice — without searching through multiple tools and files.",
    secondary: "Explore the features",
    shotAlt:
      "ArchiFlow Dashboard: number of active projects, projects needing attention, upcoming deadlines, team workload and recently updated projects.",
  },
  problem: {
    eyebrow: "The problem",
    title: "When information is everywhere, keeping track of everything is hard.",
    intro:
      "Project details, deadlines, documents and client agreements often live in different files, email inboxes and people's heads. ArchiFlow helps bring the most important information together in one system.",
    items: [
      { title: "Scattered information", text: "Checking a project's status means looking in several places." },
      { title: "Limited overview", text: "It's hard to see quickly which projects need attention." },
      { title: "Uncertain deadlines", text: "Potential delays can go unnoticed for too long." },
      { title: "Team overload", text: "Without a shared overview, it's harder to understand team workload." },
      { title: "Repeated client questions", text: "Team members spend time giving updates on ongoing work." },
    ],
  },
  overview: {
    eyebrow: "One central place",
    title: "A clearer picture of your practice. Without gathering information from multiple places.",
    text: "ArchiFlow brings together information about projects, deadlines, the team and clients. Owners and the people responsible for delivery can understand the current situation more quickly and focus on moving projects forward.",
    items: [
      { title: "Active projects and their status", text: "See how many projects are underway and what stage each one is at." },
      { title: "Items needing attention", text: "Projects that need action are visible straight away." },
      { title: "Upcoming deadlines", text: "Important upcoming dates gathered in one place." },
      { title: "Team workload", text: "Spot more quickly who has too much on their plate." },
      { title: "Recent activity", text: "A chronological view of the latest actions across projects." },
    ],
  },
  modules: {
    eyebrow: "Features",
    title: "Modules that bring order to your practice's day-to-day work.",
    openFull: "Open the screenshot at full size",
    items: [
      {
        label: "Projects",
        title: "Keep projects under control.",
        text: "All ongoing work in one view. Search for projects, filter them by status, client or responsible person, and check progress and deadlines.",
        shot: "projects",
        alt: "ArchiFlow Projects module: project list with responsible person, current stage, progress, completion date and status, with status, client and responsible-person filters.",
      },
      {
        label: "Schedule",
        title: "Deadlines and stages on one schedule.",
        text: "See the stages of multiple projects on a shared timeline. Track progress, upcoming milestones and projects that need attention.",
        shot: "schedule",
        alt: "ArchiFlow Schedule module: stages of multiple projects on a shared timeline, projects needing attention, upcoming milestones and a stage-status legend.",
      },
      {
        label: "Team",
        title: "Your team and its workload.",
        text: "Review assigned projects and the workload of each team member. Spot overload more easily and plan the team's work.",
        shot: "team",
        alt: "ArchiFlow Team module: team members with role, number of active projects, workload level and status.",
      },
      {
        label: "Clients",
        title: "All your client relationships in one place.",
        text: "Keep client information, relationship types and associated projects organised.",
        shot: "clients",
        alt: "ArchiFlow Clients module: client list with client type (business or individual), number of active projects, most recent activity and status.",
      },
      {
        label: "Project documentation",
        title: "Documentation that belongs to the project.",
        text: "Keep key information, the schedule, stages and project-related documents together in the project record.",
        record: {
          title: "Project record",
          items: [
            "Client details",
            "Contract number",
            "Project schedule",
            "Current status",
            "List of stages",
            "Documents and files related to delivery",
          ],
        },
      },
    ],
  },
  portal: {
    eyebrow: "Client view",
    title: "Keep clients informed, too.",
    text: "Clients don't need to contact the practice every time they want to know where their project stands. A dedicated client view gives them access to the information shared about the project.",
    practice: { title: "Architecture practice", text: "Runs the project and shares delivery information" },
    hub: "ArchiFlow",
    client: { title: "Client", text: "Checks their project's status on their own" },
    listTitle: "Clients can see:",
    items: [
      "The current project stage",
      "The project schedule",
      "Documents and files shared by the practice",
      "The history of completed stages",
    ],
    benefit: "Fewer repeated questions about project status. More transparency for clients.",
    diagramLabel: "Diagram: architecture practice, ArchiFlow and client",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Less time searching for information. More control over project delivery.",
    items: [
      "One view of the most important project information.",
      "Faster identification of delays and items requiring action.",
      "Better visibility into team workload.",
      "Easier handover of projects between team members.",
      "Less repetitive communication about project status.",
      "Greater transparency for clients.",
    ],
  },
  growth: {
    eyebrow: "Product development",
    title: "A tool that can grow with your practice.",
    text: "ArchiFlow is being developed around the day-to-day needs of architecture practices. Alongside the capabilities already available, further improvements will gradually expand the ways teams manage projects and work with clients.",
  },
  closing: {
    title: "Ready to bring more structure to your practice?",
    text: "Let's talk about how ArchiFlow can help you manage projects, schedules and your team's day-to-day work.",
  },
  screenshotNote: "Screenshots from the ArchiFlow application (Polish interface).",
};

const copy: Record<Lang, ArchiFlowCopy> = { pl, en };

export function archiflowCopy(lang: Lang): ArchiFlowCopy {
  return copy[lang];
}
