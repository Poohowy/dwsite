# ArchiFlow --- Product & Landing Page Specification v1.0

**Project:** Data Wildcat\
**Product:** ArchiFlow\
**Document:** Product and landing page specification\
**Version:** 1.0\
**Website languages:** Polish and English (PL/EN)\
**Status:** Source specification for implementation

------------------------------------------------------------------------

## 1. Document purpose

This document describes ArchiFlow for the purpose of creating a
dedicated product landing page on the Data Wildcat website.

It is based on: - the document *Workshop Summary --- Automation of the
Quotation Process and Improvement of Project Management*, prepared
following workshops held on 17 March 2026 and 27 April 2026; - the
supplied screenshots of the ArchiFlow interface; - the product decisions
and context established during the project.

The page should explain, in accessible business language, which problems
ArchiFlow addresses, how it supports the day-to-day work of an
architecture practice, and which areas of the business it covers. It
should not read like technical documentation or an uncontextualised list
of features.

For the purpose of this presentation, assume that the functionality
described below is available and working. References to product
development should concern new features and future enhancements, not
imply that the core capabilities presented on the page are unavailable.

## 2. Product positioning

### 2.1. What is ArchiFlow?

ArchiFlow is a system that supports the management of an architecture
practice --- from overseeing the project portfolio and organising team
workload to monitoring schedules and keeping client and project
information organised.

It provides one central place to monitor ongoing projects, their stages,
deadlines, statuses and responsible team members. It also supports
communication with clients by giving them access to information about
their projects.

### 2.2. Core value proposition

**More control over your projects. Less information scattered across the
practice.**

ArchiFlow helps owners and teams at architecture practices organise
their work, understand project status more quickly and reduce the time
spent manually searching for information.

### 2.3. Target audience

-   Owners and managers of architecture practices.
-   Architects and members of project teams.
-   People responsible for project coordination and scheduling.
-   The practice's clients --- both individual and business clients ---
    who access information shared about their projects.

The messaging should not target only large practices. Present ArchiFlow
as a tool that helps organise the work of an architecture practice,
whether it manages a handful of projects or a much larger portfolio.

## 3. Problems ArchiFlow addresses

The workshop findings point to several recurring organisational
problems.

### 3.1. No single source of information

Project information is often scattered across: - email inboxes; - Excel
spreadsheets; - PDF documents; - project folders; - individual
employees' knowledge.

Finding the current status of a project requires additional work and
often means contacting the people involved in its delivery.

### 3.2. Limited visibility into project progress

Managers need quick answers to questions such as: - What stage has a
particular project reached? - Which projects need attention? - Which
deadlines are at risk? - Who is responsible for each project? - How is
the team workload distributed?

Without a central overview, answering these questions requires manually
collecting information.

### 3.3. Too much operational communication

Clients regularly ask about project status, upcoming stages and
deadlines. Team members need to look up the latest information and
prepare a response, increasing the practice's operational workload.

### 3.4. Difficulty handing projects over

Knowledge about project status, client agreements and current tasks can
be concentrated in specific individuals. This makes it harder for
colleagues to cover for one another and for new team members to get up
to speed.

### 3.5. Limited visibility into the causes of delays

It is important to distinguish time spent carrying out work from time
spent waiting for client decisions or materials. Without the right
information, it is difficult to understand the actual causes of delays.

## 4. ArchiFlow functionality

This section combines the business requirements described in the
workshop summary with the functionality visible in the supplied
screenshots. Do not add features that are not supported by these
materials.

### 4.1. Dashboard --- an overview of the practice

The Dashboard gives managers a quick overview of the current situation
across the practice.

The supplied screenshot shows: - the number of active projects; -
projects requiring attention; - delayed projects; - the number of team
members; - a list of projects requiring action; - upcoming deadlines; -
team workload; - recently updated projects, including their stage,
progress, deadline and status; - recent activity.

**Business value:** instead of collecting information from several
places, a manager can quickly see which areas need attention.

### 4.2. Projects --- a central view of ongoing work

The Projects module brings project information together and makes it
possible to browse projects by status.

The supplied screenshot shows: - project or client search; - status
filters: all, in progress, needs attention, delayed and completed; -
filtering by client and responsible person; - sorting; - project and
client names; - the person responsible; - the current project stage; -
percentage progress; - completion deadline; - project status.

**Business value:** easier oversight of the project portfolio and faster
identification of projects that need action.

### 4.3. Schedule --- a consolidated view of deadlines and stages

The Schedule module presents the timelines of multiple projects on a
shared timeline.

The supplied screenshot shows: - a consolidated view of project
schedules; - date-range selection and navigation between periods; -
project stages displayed on a timeline; - project progress and status; -
a list of projects requiring attention; - upcoming milestones; - a
legend explaining stage statuses.

**Business value:** easier identification of potential scheduling
conflicts and delays, and better visibility into upcoming deadlines.

### 4.4. Team --- workload and responsibility

The Team module provides a view of projects from the perspective of the
people involved in delivering them.

The supplied screenshot shows: - the number of team members; - the
number of active projects; - average workload; - the number of people
requiring attention; - a list of team members; - roles; - the number of
active projects assigned to each person; - workload levels and their
statuses; - search, filtering and sorting.

**Business value:** better visibility into employee workload and an
easier way to identify situations where some team members are
overloaded.

### 4.5. Clients --- an organised client directory

The Clients module brings together client information and the projects
associated with each client.

The supplied screenshot shows: - client or project search; - filtering
by status and client type; - sorting; - client name; - client type:
business or individual; - number of active projects; - most recent
activity; - client status.

**Business value:** easier access to client relationship information and
to the projects associated with each client.

### 4.6. Project record and documentation

According to the target process described in the workshop summary, each
project has its own record containing key information, including: -
client details; - contract number; - project schedule; - current project
status; - list of stages; - documents and files related to delivery.

The system is intended to act as a single source of information about
project status, reducing the need to search through emails, spreadsheets
and folders.

### 4.7. Client portal

ArchiFlow is designed to give clients access to a dedicated view of
their project. Clients can independently check: - the current project
stage; - the project schedule; - documents and files shared by the
practice; - the history of completed stages.

The workshop analysis assumes that clients do not need to go through a
traditional registration and account-management process. Access can be
provided through a contract number or a dedicated link that identifies
the project.

Marketing copy may describe the client portal as part of the solution.
However, the supplied screenshots mainly show the internal practice
interface. Do not present them as screenshots of the client portal.

## 5. User roles

The product concept includes three user perspectives:

1.  **Owner / Management Panel** --- an overview of the practice,
    projects, schedules, team workload and clients.
2.  **Business Client Panel** --- access to project information shared
    by the practice.
3.  **Individual Client Panel** --- access to information shared by the
    practice about an individual client's project.

Do not invent detailed permissions or differences between these panels
that are not confirmed by the supplied materials.

## 6. Business benefits

ArchiFlow is intended to help architecture practices achieve the
following benefits:

-   Centralised information about ongoing projects.
-   Greater visibility into project statuses and schedules.
-   Better deadline control and earlier identification of potential
    delays.
-   Fewer emails and phone calls about the current status of work.
-   Smoother communication between the project team and clients.
-   More predictable project delivery.
-   Easier handover of projects between team members.
-   Less dependence on the knowledge of individual employees.
-   Faster onboarding of new employees to ongoing projects.
-   A clearer distinction between delays caused by the practice and time
    spent waiting for client decisions.
-   Better client service through ongoing access to project information.

Do not include specific percentages for time savings, productivity
improvements or other measurable results. The workshop summary does not
contain verified numerical outcomes.

## 7. Proposed landing page structure

The ArchiFlow page should follow the existing Data Wildcat design
system: dark visual style, strong typography, restrained accent colours,
generous spacing and subtle animations. At the same time, the product
presentation can use light application screenshots so that the actual
interface remains clear and readable.

### Section 1 --- Hero

**Eyebrow:** PROJECT MANAGEMENT FOR ARCHITECTURE PRACTICES

**Proposed headline:** \# Every project in your practice. All in one
place.

**Copy:** ArchiFlow helps you organise projects, schedules, your team
and client information. Get a clearer picture of what's happening across
your practice --- without searching through multiple tools and files.

**Primary CTA:** Talk to us about ArchiFlow\
**Secondary CTA:** Explore the features (scrolls to the product features
section)

Use the Dashboard screenshot as the main visual in the hero. Do not
create a fictional interface or replace the real application screen with
a generic illustration.

### Section 2 --- The problem

**Proposed headline:** \## When information is everywhere, keeping track
of everything is hard.

Introductory copy: Project details, deadlines, documents and client
agreements often live in different files, email inboxes and people's
heads. ArchiFlow helps bring the most important information together in
one system.

Problem cards: - **Scattered information** --- checking a project's
status means looking in several places. - **Limited overview** --- it is
difficult to see quickly which projects need attention. - **Uncertain
deadlines** --- potential delays can go unnoticed for too long. - **Team
overload** --- without a shared overview, it is harder to understand
team workload. - **Repeated client questions** --- employees spend time
providing updates about ongoing work.

### Section 3 --- One central place to manage your practice

**Proposed headline:** \## A clearer picture of your practice. Without
gathering information from multiple places.

Copy: ArchiFlow brings together information about projects, deadlines,
the team and clients. Owners and people responsible for delivery can
understand the current situation more quickly and focus on moving
projects forward.

Show the Dashboard in a larger format and briefly highlight: - active
projects and their statuses; - items requiring attention; - upcoming
deadlines; - team workload; - recent activity.

### Section 4 --- Product modules

Present the modules as alternating text-and-screenshot blocks rather
than small, identical cards. This will give the actual interface enough
space to be seen clearly.

**Projects**\
Keep all ongoing work in one view. Search for projects, filter them by
status, client or responsible person, and check progress and deadlines.

**Schedule**\
See the stages of multiple projects on a shared timeline. Track
progress, upcoming milestones and projects that need attention.

**Team**\
Review assigned projects and the workload of individual team members.
Identify overload more easily and organise the team's work.

**Clients**\
Keep client information, relationship types and associated projects
organised.

**Project documentation**\
Keep key information, schedules, stages and project-related documents
together in the project record.

Use the corresponding real screenshots for the first four modules.
Project documentation can be described in text; no separate screenshot
of the project record has been supplied.

### Section 5 --- More transparency for clients

**Proposed headline:** \## Keep clients informed, too.

Copy: Clients do not need to contact the practice every time they want
to know where their project stands. A dedicated client view gives them
access to the information shared about the project.

Information available to clients may include: - the current project
stage; - the schedule; - shared documents and files; - the history of
completed stages.

A simple diagram can illustrate the relationship: practice team ↔
ArchiFlow ↔ client. Do not create a fictional client portal screenshot
or imply that the supplied internal-interface screenshots show the
client view.

### Section 6 --- Business benefits

**Proposed headline:** \## Less time searching for information. More
control over project delivery.

Present the benefits as concise, concrete points: - One view of the most
important project information. - Faster identification of delays and
items requiring action. - Better visibility into team workload. - Easier
handover of projects between employees. - Less repetitive communication
about project status. - Greater transparency for clients.

### Section 7 --- A product that keeps evolving

**Proposed headline:** \## A tool that can grow with your practice.

Copy: ArchiFlow is being developed around the day-to-day needs of
architecture practices. Alongside the capabilities already available,
new improvements will continue to expand the ways teams manage projects
and work with clients.

This section should communicate ongoing product development without
suggesting that the core capabilities presented earlier are unavailable.

### Section 8 --- Closing CTA

**Proposed headline:** \## Ready to bring more structure to your
practice?

**Copy:** Let's talk about how ArchiFlow can help you manage projects,
schedules and your team's day-to-day work.

**CTA:** Book a free consultation

The CTA must link to the existing Contact page. Do not add a contact
form to the ArchiFlow page.

## 8. Visual assets

The supplied screenshots are valuable because they show the actual
product interface. Although they are application screenshots rather than
polished marketing mock-ups, their clean, light interface will create a
useful contrast with the dark Data Wildcat website.

### Recommended screenshot mapping

  -----------------------------------------------------------------------
  Screenshot                          Intended use
  ----------------------------------- -----------------------------------
  Dashboard                           Hero and "One central place to
                                      manage your practice" section

  Projects                            Projects module

  Schedule                            Schedule module

  Team                                Team module

  Clients                             Clients module
  -----------------------------------------------------------------------

Guidelines: - Preserve the original aspect ratio and readability. - Do
not crop out important navigation or contextual elements. - Use a subtle
border, rounded corners and a restrained shadow consistent with the
design system. - On mobile, make screenshots comfortable to inspect, for
example by scaling them or using a controlled horizontal overflow
container. - Do not add fictional labels to screenshots or alter the
interface data. - Do not use a screenshot to imply functionality that it
does not show.

## 9. Language and tone of voice

-   The website must be available in Polish and English.
-   Use clear, direct and practical business language.
-   Explain benefits from the perspective of the practice owner and the
    project team.
-   Avoid unnecessary technical terminology.
-   Avoid empty claims such as "revolutionary platform", "innovative
    solution" or "comprehensive transformation".
-   Do not include unverified statistics, results or customer
    testimonials.
-   Do not invent customer references, client logos or case studies.
-   Do not suggest that ArchiFlow makes decisions automatically on
    behalf of the owner or team.

## 10. Visual direction and implementation guidelines

The ArchiFlow page is part of the Data Wildcat website and must use the
existing design system: - dark background and visual style consistent
with the homepage; - the same typography, spacing scale, buttons,
navigation and footer; - restrained use of Data Wildcat accent
colours; - subtle animations and hover effects, without excessive
motion; - large, readable application screenshots as the primary visual
material; - full responsiveness across desktop, tablet and mobile; -
preserve the existing PL/EN language switcher and routing.

Do not change the homepage, Pricer page or Contact page, or global
website elements, except where existing shared components are reused. Do
not add a CMS or new dependencies without a clear need.

## 11. What not to do

-   Do not position ArchiFlow as an ERP or CRM system; the supplied
    materials do not support that claim.
-   Do not promise automatic work planning, automatic task assignment or
    automated notifications unless confirmed.
-   Do not add invoicing, estimating, accounting, budgeting or
    resource-management features unless they are supported by the
    materials.
-   Do not claim integrations with specific third-party tools.
-   Do not use screenshots of the internal interface as if they showed
    the client portal.
-   Do not invent testimonials, customers, statistics or results.
-   Do not create an interactive demo that pretends to be a working
    application. At this stage, authentic screenshots and a clear
    feature description are sufficient.

## 12. Assets and repository structure

Recommended location for the screenshots:

``` text
public/
└── images/
    └── archiflow/
        ├── dashboard.png
        ├── projects.png
        ├── schedule.png
        ├── team.png
        └── clients.png
```

These filenames are suggestions. They can be changed when copying the
files, but keep the names consistent with the paths used in the
implementation.

Store this specification in:

``` text
docs/ARCHIFLOW_PRODUCT_LANDING_PAGE_SPECIFICATION_v1.0.md
```

## 13. Page acceptance criteria

-   The page presents ArchiFlow as a system for managing the work of an
    architecture practice.
-   The messaging clearly connects business problems with product
    capabilities.
-   The described modules match the supplied materials and screenshots.
-   The real Dashboard, Projects, Schedule, Team and Clients screenshots
    are used.
-   The client portal is described in line with the workshop analysis,
    without attributing unconfirmed features to it.
-   No invented statistics, testimonials or integrations are included.
-   The page is available in Polish and English.
-   The design is consistent with the existing Data Wildcat website.
-   The page is responsive.
-   The CTA links to the existing Contact page.
-   The homepage, Pricer page and Contact page remain unchanged.

------------------------------------------------------------------------

**End of document --- ArchiFlow Product & Landing Page Specification
v1.0**
