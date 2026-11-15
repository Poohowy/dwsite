# PRICER — PRODUCT LANDING PAGE SPECIFICATION

**Version:** 1.0 (draft for review)  
**Project:** Data Wildcat website  
**Page:** Pricer  
**Status:** Product and content specification; implementation prompt to follow after review

---

## 1. Purpose of this document

This document defines the content, structure, positioning and interactive product demonstration for the Pricer landing page on the Data Wildcat website.

It is based primarily on:
- The supplied product presentation transcript (`system-wycen-i-ofertowania-audio.txt`).
- Three supplied screenshots showing the operational panel, incoming customer message and rendered offer.
- The existing Data Wildcat website direction and visual identity.

The page should explain the business problem Pricer solves, demonstrate the workflow, and encourage potential clients to contact Data Wildcat.

This is a product landing page, not a technical manual.

## 2. Product positioning

### Main idea

**Od wiadomości klienta do gotowej oferty — w jednym uporządkowanym procesie.**

Pricer helps a company turn an incoming customer request into a structured quotation based on predefined product data, pricing rules, discounts and templates.

It reduces repetitive manual work while keeping pricing controlled and traceable.

### Suggested headline

**Przygotowuj oferty szybciej. Bez ręcznego przepisywania i zgadywania cen.**

Suggested supporting copy:

"Pricer zamienia wiadomości od klientów w uporządkowane wyceny i gotowe oferty. Korzysta z katalogu produktów, zdefiniowanych reguł cenowych i szablonów, dzięki czemu zespół pracuje szybciej, a Ty zachowujesz kontrolę nad wynikiem."

Alternative shorter headline:

**Od zapytania klienta do gotowej oferty.**

### What Pricer is — in plain language

Pricer is a configurable quotation and offer preparation system. It brings together:
- Incoming customer requests.
- Product catalogue and pricing data.
- Automatic quotation calculations.
- Quantity discounts and other configured rules.
- Editable offer and response templates.
- Offer history and traceability.

The system is based on predefined business data and rules. Prices are not guessed by an AI model, and discounts are not manually calculated each time.

### Main value proposition

- Less manual copying and repetitive work.
- Faster preparation of quotations.
- Consistent calculations based on configured data.
- Better visibility into how a final price was calculated.
- Human control over the proposed offer before it is sent.
- A record of previously prepared offers.

Avoid promising specific time savings, percentage reductions or guaranteed business results. No measured results were supplied.

## 3. Audience and communication

The page should speak to business owners, sales teams and people responsible for preparing quotations.

Assume visitors are not necessarily technical.

Use practical business language:
- "zapytanie klienta"
- "katalog produktów"
- "wycena"
- "rabat"
- "gotowa oferta"
- "historia ofert"

Avoid leading with implementation details, architecture, LLMs, RAG, prompt engineering or internal panel terminology.

The page should communicate that the solution can be adapted to a company's product catalogue, pricing rules and offer templates, without claiming that every integration or configuration is available out of the box.

## 4. Confirmed capabilities from the product presentation

The following capabilities are explicitly demonstrated or described in the supplied transcript.

### 4.1 Incoming customer request

- A user can paste a customer's message manually.
- The process may also be integrated with an email inbox or another communication channel.
- An incoming message can be passed automatically into the quotation workflow when the relevant integration is implemented.

Important wording: email integration is described as a possible integration, not necessarily a universally enabled default feature. Phrase it as configurable/possible, not guaranteed.

### 4.2 Product catalogue as the source of truth

The catalogue contains information required for pricing, including:
- Products.
- Prices.
- VAT rates.
- Pricing models.
- Other data used by the quotation process.

Calculations are based on configured data rather than guessed prices or manually entered values on every request.

### 4.3 Automatic quotation calculations

The system can calculate:
- Net values.
- VAT.
- Gross values.

It can also apply configured relationships and pricing rules. The calculation process can be inspected, so the user can see how the result was reached.

### 4.4 Discounts

- Quantity discounts can be configured using predefined thresholds.
- The system identifies when a discount should apply.
- The discount is included in the quotation and carried into the offer.

Do not imply that every discount model is available without configuration. Describe discounts as configurable rules.

### 4.5 Budget-based suggestions

The presentation demonstrates a case where a customer specifies a maximum budget per basket.

The system can suggest additional products so that the proposed basket remains within the stated budget.

Before sending the offer, the user retains control:
- They can work with a draft offer.
- They can remove unwanted items.
- The system can suggest replacements that still fit the budget.

Do not claim unrestricted AI product recommendations. Describe this as suggestions based on the configured catalogue, rules and budget constraints.

### 4.6 Offer generation

The presentation describes generating the offer as HTML or PDF.

The generated response can be used without manually copying tables, prices and descriptions into an email or CRM.

Do not advertise DOCX export unless separately confirmed. The supplied presentation confirms HTML and PDF.

### 4.7 Editable templates

- Templates define the appearance of the final offer and the wording of the response.
- Templates can be edited in the panel.
- Users can preview and validate changes.
- A new version can be published.
- Routine template changes do not need to involve a programmer.

### 4.8 Offer history

Each prepared offer is saved.

Users can return to previous records and inspect:
- The original incoming message.
- Calculation details.
- The generated offer.

This supports review, comparison and explanation of previous decisions.

## 5. Recommended page structure

The landing page should be visually engaging but not excessively long. It should follow the existing Data Wildcat design system.

### Section 1 — Hero

Purpose: explain the product immediately.

Suggested eyebrow:
**SYSTEM WYCEN I OFERTOWANIA**

Suggested headline:
**Od wiadomości klienta do gotowej oferty.**

Suggested supporting copy:
"Pricer porządkuje proces przygotowania wycen — od pierwszego zapytania, przez automatyczne obliczenia i rabaty, aż po gotową ofertę. Wszystko na podstawie danych i reguł Twojej firmy."

Primary CTA:
**Umów bezpłatną konsultację**

Secondary CTA:
**Zobacz, jak działa Pricer** — scrolls to the interactive demonstration.

Visual direction:
- A bespoke, simplified workflow visual rather than a generic stock image.
- Show a customer message flowing into a structured quotation and then an offer.
- Use subtle motion only if it fits the existing website.
- Do not display fake live AI processing in the hero.

### Section 2 — The problem

Suggested heading:
**Zapytanie jest proste. Przygotowanie dobrej oferty już nie zawsze.**

Explain the manual work:
- Reading unstructured customer emails.
- Identifying requested products and quantities.
- Looking up prices and VAT.
- Checking discounts and pricing rules.
- Preparing the offer and customer response.
- Keeping a record of what was sent and how the price was calculated.

Suggested closing statement:
"Przy większej liczbie zapytań ręczna praca zwiększa ryzyko pomyłek, niespójności i traconego czasu."

### Section 3 — How Pricer works

Suggested heading:
**Jeden proces. Od zapytania do oferty.**

Show a clear 5-step workflow:

1. **Wiadomość klienta**  
   Wklej zapytanie lub przekaż je do procesu przez skonfigurowany kanał komunikacji.

2. **Rozpoznanie potrzeb**  
   System analizuje treść i identyfikuje produkty, ilości, wymagania lub budżet.

3. **Wycena na podstawie danych**  
   Ceny, VAT i rabaty wynikają z katalogu produktów oraz skonfigurowanych reguł.

4. **Weryfikacja i dopracowanie**  
   Użytkownik może sprawdzić wynik, zmienić pozycje i zaakceptować propozycję.

5. **Gotowa oferta**  
   System przygotowuje uporządkowaną ofertę, np. w HTML lub PDF, a wycena trafia do historii.

Do not change this into a claim that every step is fully autonomous. Keep the user's review and control visible.

### Section 4 — Interactive demonstration

This is the key interactive element of the page.

Suggested heading:
**Sprawdź, jak Pricer zamienia wiadomość w ofertę.**

Suggested supporting copy:
"Wybierz przykładowe zapytanie i zobacz, jak może wyglądać wynik procesu."

The demo should be a frontend-only, illustrative simulation. It does not connect to the actual Pricer backend and does not execute a real AI model.

It must be clearly labelled:
**Przykładowa prezentacja działania — dane i wynik demonstracyjne.**

#### 4.1 Important content limitation

The supplied presentation contains two examples from the same product domain: gift baskets.

Example A — standard request:
"Dzień dobry,

Potrzebujemy pięciu zestawów koszy prezentowych na konferencję. W każdym herbata, baton energetyczny, krakersy i miód. Proszę o ofertę.

Pozdrawiam  
Jan Kowalski"

Example B — request with a budget:
"Dzień dobry.

Potrzebujemy pięciu zestawów koszy prezentowych na konferencję. W każdym herbata, baton energetyczny, krakersy i miód. Maksymalna cena koszyka to 90 zł netto. Proszę o ofertę.

Pozdrawiam,  
Jan Kowalski"

The source material does not provide verified examples from multiple industries. Do not invent industry-specific product catalogues or claim that such scenarios have been tested.

For the first version, use a selector with two scenarios:
- **Kosze prezentowe - standardowe zapytanie**
- **Kosze prezentowe - z limitem budżetu**

The UI can be designed so that additional industries/domains can be added later when real examples and product data are supplied.

If the user later supplies more domains, the selector label can become "Wybierz branżę" or "Wybierz scenariusz".

#### 4.2 Demo interaction

Recommended flow:

1. User selects one of the two scenarios.
2. The corresponding example customer email appears in a readable email-style panel.
3. User clicks **Przygotuj przykładową ofertę**.
4. A short, polished sequence of illustrative processing states appears:
   - Analizowanie wiadomości.
   - Dopasowanie produktów z katalogu.
   - Obliczanie wyceny.
   - Przygotowanie oferty.
5. The demo displays a sample offer.

Important:
- Do not claim that a real backend or AI model is running.
- The progress sequence is a visual simulation only.
- Make the illustrative nature clear before the user starts the demo.
- Avoid fake long loading times. The interaction should feel responsive.
- Provide a reset or "Zobacz ponownie" action.

#### 4.3 Demonstration output — standard request

The transcript and screenshot provide these sample facts:
- Customer: Jan Kowalski.
- Quantity: 5 gift baskets.
- Products requested: tea, energy bar, crackers and honey.
- Example unit price shown in the screenshot: 89.00 PLN net, 20.47 PLN VAT, 109.47 PLN gross.
- The screenshot shows a quantity discount rule and a 0.0% discount for quantity 5 in that displayed result.

Important: The screenshot is a partial view of the generated offer and does not expose the complete product breakdown or total. Do not invent line-item prices or totals and present them as actual Pricer output.

For the demo, either:
- Show only the supported unit price and VAT breakdown, plus the requested products and quantity; or
- Create a clearly labelled illustrative sample calculation with internally consistent arithmetic, explicitly marked as fictional demonstration data.

Preferred: use a compact offer preview with no invented detailed line-item pricing.

#### 4.4 Demonstration output — budget request

Confirmed facts:
- 5 gift baskets.
- Requested contents: tea, energy bar, crackers and honey.
- Maximum budget: 90 PLN net per basket.
- The system can suggest additional products while keeping the basket within budget.
- The user can remove items and receive alternative suggestions.

The source does not provide the exact final product composition or final calculation for this second scenario.

Therefore:
- Demonstrate the budget constraint and explain that the system can suggest products within it.
- Do not invent exact final basket contents, discounts or final totals and present them as source-backed output.
- If a fictional output is needed for the visual demo, mark it explicitly as an illustrative example and keep all figures mathematically consistent.

#### 4.5 Offer preview design

The output should look like a polished offer document, not a raw admin panel.

Suggested elements:
- "Oferta - kosze prezentowe".
- Customer name.
- Quantity.
- Requested product list.
- A compact pricing summary, only using grounded or explicitly illustrative values.
- A small status label such as "Przykładowa oferta".
- Optional "HTML" and "PDF" format indicators, since the product presentation confirms these formats.

Do not create a fake working download button. If there is no real generated file, do not imply that the user can download it.

### Section 5 — What makes Pricer useful

Suggested heading:
**Więcej niż automatyczne liczenie cen.**

Use four benefit cards:

1. **Ceny oparte na danych**  
   Wycena korzysta z katalogu produktów, cen i stawek VAT.

2. **Reguły i rabaty pod kontrolą**  
   Zdefiniowane zasady pomagają zachować spójność ofert.

3. **Ty decydujesz o finalnej ofercie**  
   Możesz sprawdzić propozycję, zmienić pozycje i dopracować wynik przed wysłaniem.

4. **Historia i przejrzystość**  
   Wróć do wcześniejszych wycen, wiadomości i szczegółów kalkulacji.

### Section 6 — Configurable for your business

Suggested heading:
**Dopasowany do zasad, według których działa Twoja firma.**

Explain that Pricer can be configured around:
- Product catalogue.
- Pricing models and VAT.
- Quantity discounts and other pricing rules.
- Customer and project types where relevant.
- Offer and response templates.
- Communication channels, where integrations are implemented.

Keep the message practical. Do not promise a specific integration, ERP/CRM connector or feature that is not confirmed.

### Section 7 — Closing CTA

Suggested headline:
**Ile czasu zajmuje dziś przygotowanie jednej oferty?**

Suggested supporting copy:
"Porozmawiajmy o tym, jak wygląda proces wycen w Twojej firmie i czy Pricer może go uprościć."

CTA:
**Umów bezpłatną konsultację**

The CTA should route to the existing Contact page.

## 6. Use of supplied screenshots

The three screenshots show:
1. Template management panel with template list and HTML/template code.
2. Incoming customer message and quotation input screen.
3. Rendered HTML offer preview.

They are useful as real product evidence, but their current appearance is not polished enough to serve as the main visual language of the landing page.

Recommendations:
- Do not use them in the hero.
- Consider a compact "Zajrzyj do panelu" or "Zobacz elementy systemu" section.
- Present them in a restrained image gallery or product walkthrough, with captions.
- Crop them carefully to show the relevant part of each screen.
- Do not distort or artificially redesign the actual screenshots.
- Do not imply that the website demo is the live operational panel.

Possible captions:
- "Konfiguracja szablonów ofert"
- "Wiadomość klienta jako punkt wyjścia wyceny"
- "Podgląd wygenerowanej oferty"

The screenshots can also be omitted from the first version if they make the page visually weaker. The interactive demo should be the primary product visual.

## 7. Visual design direction

The Pricer page must feel like a natural extension of the current Data Wildcat website.

Preserve:
- Dark, elegant visual language.
- Strong typography.
- Restrained turquoise and red accents.
- Generous spacing.
- Subtle grid/background treatments where already used.
- Existing navigation and footer.
- Existing PL/EN language system.
- Existing page transitions and animation conventions.

Avoid:
- Generic SaaS templates.
- Neon gradients.
- Robot/AI stock imagery.
- Excessive glassmorphism.
- Dense technical dashboards as the hero.
- Large blocks of technical copy.

The page should communicate a business solution, not sell an AI technology stack.

## 8. Polish and English content

Implement both language versions using the project's existing routing and translation conventions.

Polish is the default language.

English copy should be written naturally, not translated word-for-word.

Keep product capabilities and limitations consistent in both languages.

## 9. Technical implementation constraints for the future Claude prompt

- Inspect the existing Astro project before implementation.
- Reuse the current design system and page conventions.
- Do not modify the homepage.
- Do not change the Contact page.
- Do not change the global navigation or footer unless necessary to add the Pricer route.
- Do not introduce new dependencies unless explicitly approved.
- Implement the interactive demo as a self-contained page component with local sample data.
- Keep demo scenario data separate from presentation markup where practical.
- Ensure the demo works without a backend.
- Make the demo accessible by keyboard and on mobile.
- Respect reduced-motion preferences.
- Avoid claiming that a simulated process is real AI execution.
- Do not add unsupported product features or fabricated customer results.

## 10. Open decisions before implementation

The following points should be confirmed before writing the final Claude Code implementation prompt:

1. **Scenario selector:** Should the first release contain only the two gift-basket examples from the presentation, or can the user provide additional real examples from other product domains/industries?
2. **Demo output:** Is it acceptable to show a concise offer preview using only the confirmed facts, rather than inventing a full itemized quotation?
3. **Screenshots:** Should the three real screenshots appear in a small secondary section, or should we keep the page cleaner and use only the newly designed interactive demo?
4. **Product naming:** Should the page consistently use "Pricer", or "Pricer — system wycen i ofertowania" on first mention?

---

## 11. Source-grounding checklist

The following claims are supported by the supplied presentation:
- Pricer moves from a customer message to a prepared offer.
- It uses a product catalogue as the source of truth.
- The catalogue includes prices, VAT rates and pricing models.
- It calculates net, VAT and gross values.
- It supports configured quantity discounts.
- It can handle a budget-constrained basket and suggest additional products.
- The user can review and edit the draft offer.
- It generates HTML or PDF offers.
- It supports editable templates with preview, validation and publishing.
- It stores offer history, including the original message, calculation details and generated offer.

The following are not established by the supplied material and must not be claimed without confirmation:
- Specific integrations with named email providers, CRMs or ERPs.
- DOCX export.
- Exact processing time or percentage time savings.
- Specific supported industries beyond the demonstrated gift-basket domain.
- Fully autonomous sending of offers.
- Exact final contents and totals of the budget-based example.
- Any customer testimonials, measured outcomes or ROI figures.

**End of specification.**
