import type { Dictionary } from "./types";

// DRAFT English copy — translated from the Polish draft in
// docs/HOMEPAGE_DESIGN_SPECIFICATION_v1.0.md. Final EN copywriting is still open (P2).
export const en: Dictionary = {
  meta: {
    title: "Data Wildcat — You bring the problem. We find the solution.",
    description:
      "We help small and medium-sized businesses improve processes, reduce repetitive work and choose technology that fits real needs — from automation and integrations to custom applications and AI.",
  },
  routes: { home: "/en/", contact: "/en/contact/", pricer: "/en/pricer/", archiflow: "/en/archiflow/" },
  nav: {
    label: "Main navigation",
    pricer: "Pricer",
    archiflow: "ArchiFlow",
    process: "How we work",
    home: "Home",
    approach: "Our approach",
    products: "Products",
    cta: "Book a consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Choose language",
    homeLabel: "Data Wildcat — home",
  },
  cta: { primary: "Book a free consultation" },
  hero: {
    eyebrow: "Data Wildcat / Technology partner",
    titleLine1: "You bring the problem.",
    titleLine2: "We find the solution.",
    lead: "We help businesses improve processes, reduce repetitive work and make better use of technology. We match the solution to real needs — from automation and integrations to custom applications and AI.",
    secondary: "See how we work",
    diagram: {
      label: "Diagram: from a problem to a well-matched solution",
      problemsLabel: "Problem",
      solutionsLabel: "Solution",
      problems: ["Re-typing data by hand", "Scattered information", "Disconnected systems"],
      solutions: ["Automation", "Integration", "Application", "AI"],
      note: "Problem first, technology second",
    },
  },
  problems: {
    eyebrow: "01 / Sound familiar?",
    title: "Does this look like your company too?",
    intro:
      "In many companies, valuable team time disappears into tasks that repeat every single day. Information is scattered, data has to be re-typed, and simple tasks take longer than they should.",
    items: [
      {
        title: "Quotes and offers",
        text: "Every new offer means gathering information again, re-typing data and working with near-identical documents.",
      },
      {
        title: "Email and communication",
        text: "Important decisions get lost in inboxes, and information has to be moved by hand between messages and systems.",
      },
      {
        title: "Documents",
        text: "Finding the right file, the latest version or a specific piece of information takes far too long.",
      },
      {
        title: "Reporting",
        text: "Before a report exists, someone has to collect data from several tools and spreadsheets.",
      },
      {
        title: "Repetitive tasks",
        text: "Your team follows the same routine every day instead of spending time on more important work.",
      },
      {
        title: "No integration",
        text: "Systems don't exchange data, so people end up acting as the manual link between them.",
      },
      {
        title: "Project oversight",
        text: "It's hard to see at a glance what's done, what's running late and where the documents you need are.",
      },
      {
        title: "Uncertainty about AI",
        text: "Everyone is talking about AI, but it's unclear whether it would solve a real problem in your company or just add another tool.",
      },
    ],
  },
  calculator: {
    eyebrow: "02 / Calculator",
    title: "What does repetitive work cost your company?",
    intro:
      "See how much time and money your team spends on tasks that could perhaps be simplified or automated.",
    inputsLabel: "Inputs",
    sliders: {
      people: { label: "People doing repetitive work", unit: "people", min: 2, max: 250, step: 1, initial: 25 },
      hours: { label: "Repetitive work per person / week", unit: "h", min: 1, max: 20, step: 1, initial: 6 },
      rate: { label: "Average hourly cost per employee", unit: "$", min: 20, max: 400, step: 1, initial: 55 },
    },
    resultsLabel: "Estimated impact",
    results: {
      hours: "Hours of repetitive work / week",
      monthly: "Estimated cost / month",
      yearly: "Estimated cost / year",
    },
    hoursUnit: "h",
    disclaimer:
      "This is an estimate based on the values you entered. The actual potential to reduce costs depends on the process, the scope of change and how it is implemented.",
    assumptions: "Assumptions: 52 weeks per year, one month = 52 / 12 weeks.",
    locale: "en-US",
    currency: "USD",
  },
  solutions: {
    eyebrow: "03 / Our approach",
    title: "First, we get to know your business. Then we find the right solution.",
    intro:
      "Every company works differently. That's why we first learn how you work and look for the place where something can be simplified. Only then do we choose a solution — one that makes sense both for the business and technically.",
    chooseLabel: "Choosing the solution",
    items: [
      { title: "Process automation", text: "We reduce manual, repetitive tasks and streamline the flow of work." },
      {
        title: "Artificial intelligence",
        text: "We use AI where it helps analyse information, work with documents or support decisions.",
      },
      {
        title: "Custom applications",
        text: "We build tools tailored to processes that off-the-shelf software doesn't handle well.",
      },
      {
        title: "System integrations",
        text: "We connect the tools you already use so information flows between them without manual copying.",
      },
    ],
    deployment: {
      label: "Fitting the deployment",
      title: "Technology should fit your company. Not the other way around.",
      intro:
        "Whether you need a simple automation, a custom application or a solution that uses AI, we choose how to deliver it based on your processes and constraints.",
      or: "or",
      options: [
        {
          title: "Cloud",
          text: "We can use AWS, Azure or Google Cloud when the cloud is the right choice for a given solution.",
          tags: ["AWS", "Azure", "Google Cloud"],
        },
        {
          title: "On-premises",
          text: "Solutions can also run on your company's own infrastructure if your processes or policies require it.",
        },
      ],
    },
    statement: "Not every company needs AI. Every company needs a solution that makes sense.",
  },
  products: {
    eyebrow: "04 / Example solutions",
    title: "Products that can help your business today.",
    intro: "Explore the tools we develop to improve specific business processes.",
    mockNote: "Illustrative mock-up",
    pricer: {
      status: "Available product",
      name: "Pricer",
      text: "Automates preparing quotes based on emails and information received from the client. Less manual re-typing, a more organised quoting process.",
      cta: "Discover Pricer",
      mock: {"steps": ["Message", "Analysis", "Quote"], "mailFrom": "Client", "mailSubject": "Request for a quote", "extracted": "Extracted details", "fields": ["Client", "Scope", "Quantity", "Deadline"], "offer": "Quote", "total": "Total", "ready": "Ready to send"},
    },
    archiflow: {
      status: "In development",
      name: "ArchiFlow",
      text: "A system being developed for architecture studios, designed to support the organisation of projects, schedules, the team and documentation.",
      cta: "Discover ArchiFlow",
      mock: {"nav": ["Projects", "Schedule", "Team", "Documents", "Clients"], "overview": "Active projects", "projects": ["Project A", "Project B", "Project C"], "statuses": ["Concept", "Permit design", "Detailed design"], "schedule": "Schedule", "documents": "Documents"},
    },
  },
  process: {
    eyebrow: "05 / How we work",
    title: "From the first conversation to a solution.",
    intro: "You don't need to know which technology you need. Just tell us what you'd like to improve.",
    steps: [
      { title: "We talk", text: "We start with a free consultation and get to know the problem." },
      { title: "We map the process", text: "We look at how the work is done today and where the difficulties are." },
      { title: "We propose a solution", text: "We present a possible approach, its scope and the next steps." },
      { title: "We build and deploy", text: "We build the solution and help you put it to work in your company." },
      { title: "We evolve it", text: "If needed, we develop the solution further as your needs change." },
    ],
    cta: "Let's talk about your problem",
  },
  team: {
    eyebrow: "06 / Why us",
    title: "Technology is a tool. What matters is what you change with it.",
    pillars: [
      { title: "We listen first", text: "Before we propose anything, we want to understand how your company works." },
      { title: "No unnecessary jargon", text: "We explain possibilities and limitations in plain language." },
      {
        title: "No technology pushing",
        text: "We won't propose AI or a complex system if a simpler solution will do.",
      },
      { title: "Clear terms", text: "You know what we propose, why, and what the next steps are." },
    ],
    teamTitle: "Meet the people you'll work with.",
    teamText:
      "Data Wildcat is a three-person team with well over a decade of industry experience, especially in processing large datasets and process automation.",
    placeholderName: "Team member",
    placeholderNote: "Photo and bio to be added",
  },
  faq: {
    eyebrow: "07 / FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Does my company have to use AI to work with Data Wildcat?",
        a: "No. AI is only one of the tools. Sometimes automation, a system integration or a custom application is the better answer. We first get to know your situation, then choose the approach that fits it.",
      },
      {
        q: "Do you work with small companies?",
        a: "Yes. We focus on the needs of small and medium-sized businesses. A solution should fit the scale and resources of the company.",
      },
      {
        q: "I'm not sure exactly what I need. Can I still get in touch?",
        a: "Of course. You don't need to know the technology or have a solution in mind. Just tell us what you'd like to improve.",
      },
      {
        q: "What does the first consultation look like?",
        a: "It's a free conversation in which we learn about the problem and how you work today. Together we consider what the next steps could be.",
      },
      {
        q: "How much does building a solution cost?",
        a: "It depends on the problem, the scope and the complexity of the project. Once we understand your needs, we can propose an approach and define the scope of work.",
      },
      {
        q: "Does the solution have to run in the cloud?",
        a: "No. Depending on your requirements, it can run in the cloud or on your company's own infrastructure.",
      },
      {
        q: "What about data security?",
        a: "We match how data is processed and stored to the requirements of the project and the client's environment. Specific security rules are agreed before deployment.",
      },
      {
        q: "Can you connect the solution to the systems we already use?",
        a: "That's one of the areas we work in. Whether an integration is possible depends on the specific systems and the available ways of exchanging data.",
      },
    ],
  },
  finalCta: {
    title: "Is there something in your business that could work better? Let's talk.",
    text: "Tell us what takes up your team's time or makes everyday work harder. Together we'll see whether we can improve it.",
  },
  footer: {
    tagline: "You bring the problem. We find the solution.",
    navLabel: "Footer navigation",
    productsLabel: "Products",
    companyLabel: "Company",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  stub: {
    badge: "Page in preparation",
    text: "This page is being prepared. Detailed information will be available here soon.",
    back: "Back to the homepage",
  },
};
