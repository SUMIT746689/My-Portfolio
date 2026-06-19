# Resume Benchmark — Emran Mahmud vs My Portfolio

**Compared:** Emran Mahmud's resume slide (image) vs Mehedi Hasan's portfolio
**Date:** 2026-06-19
**Goal:** Benchmark + gap analysis with concrete actions to level up my portfolio.

---

## TL;DR

Two senior engineers, different specialties. **Emran** = deep frontend specialist (15+ yrs FE),
strong on testing, accessibility, regulated domains, and quantified architecture wins. **Mehedi
(me)** = senior full-stack engineer (10+ yrs) with broader stack (frontend + backend + DB
internals + DevOps + deployment), async/event-driven systems (BullMQ, AWS SQS), CI/CD (Jenkins),
stronger *live, verifiable* product evidence, and a self-built portfolio platform. The gap isn't
tenure or substance — it's **how the work is framed**: metrics, testing story, accessibility, and
explicit methodology. Those are cheap to add and close most of the gap.

---

## Side-by-Side

| Dimension | Emran Mahmud (image) | Mehedi Hasan (me) |
|---|---|---|
| **Title / seniority** | Senior Software Engineer (Frontend) II | Software Engineer / Team Lead |
| **Experience** | 15+ yrs FE · 7 React · 5 TS · 3 Next | 10+ yrs full-stack |
| **Focus** | Frontend specialist | Full-stack (FE + BE + DB + DevOps) |
| **Core stack** | React 18, Redux Toolkit, TanStack Query | React/Next, Redux/RTK Query, Node/Express/NestJS/Go, MySQL/Postgres/Prisma/Drizzle |
| **Testing** | Jest/RTL, Cypress (explicit) | ❌ not surfaced |
| **Architecture** | "Re-architected multi-tenant portal" (framed) | Multi-tenant Edu360 (done, **under-framed**) |
| **Accessibility** | WCAG 2.1 dashboards (explicit) | ❌ not mentioned |
| **Domain / compliance** | HIPAA, financial services, audit/consent | Telecom (GrameenPhone ECRM), EdTech |
| **Methodology** | TDD (stated) | CI/CD via Jenkins ✅ · TDD ❌ not stated |
| **CI/CD** | GitHub Actions | ✅ Jenkins |
| **Async / queues** | ❌ none (FE-only) | ✅ BullMQ, AWS SQS |
| **Design system** | Storybook | ❌ not shown |
| **Live proof** | Project names only, no links | ✅ Real product URLs + 30+ institutions using Edu360 |
| **Format** | Static Google Slides table | ✅ Live animated site, i18n, Resume Builder, tech article |

---

## Where I'm Already Stronger

- **Full-stack breadth.** Emran is FE-only. I ship backend (Node/Express/NestJS/Go), design DB
  schemas, and understand DB internals (the PostgreSQL architecture article proves depth Emran
  doesn't show).
- **Microservices architecture.** Designed/operated a 13-container Neodesk platform (7 APIs, 3
  background workers, 2 frontends, Redis) and split the GrameenPhone ECRM into independent auth +
  campaign services. Emran (FE-only) shows no service-level architecture.
- **Async / event-driven systems.** BullMQ + AWS SQS job queues, async image-resize workers, and
  scheduled jobs for background processing and decoupled services. Emran (FE-only) shows none.
- **Full-lifecycle ownership.** Frontend + backend + DevOps + deployment end-to-end: CI/CD
  (Jenkins), Docker/Podman, NGINX. Emran is FE + GitHub Actions only.
- **Live, verifiable evidence.** My projects link to real products
  (`cockpit-stg.ppl.how`, `stage.neodesk.io`, `admin.edu360.com.bd`) with **real users — 30+
  institutions**. Emran lists project names with no links.
- **The portfolio IS a product.** Self-built Next.js site with EN/BN i18n, a working Resume
  Builder (5 templates + PDF export), dark mode, and a technical article. That demonstrates
  initiative + product sense beyond any resume slide.
- **Measurable backend wins.** Next.js 13→14 upgrade = **3–4x build/runtime perf**; API query
  + caching optimization. Concrete, already quantified.

---

## Gaps vs Emran (what to add to level up)

Each gap → concrete action.

1. **Quantify every bullet.** Emran leads with `bundle −42%`, `TTI +30%`. My bullets are mostly
   qualitative ("optimized API response times"). → Add numbers: response-time ms, % perf gain,
   user/tenant counts, request volume.
2. **Add a testing story.** Emran names Jest/RTL + Cypress; mine is silent. → Add a "Testing"
   skills row and a bullet citing what I actually test (Jest/RTL/Vitest/Playwright/Cypress).
   If thin, write tests for the portfolio itself, then claim it.
3. **Accessibility.** WCAG never appears in my copy. → Add an a11y line, and audit the portfolio
   (Lighthouse a11y score, keyboard nav, ARIA) so the claim is backed.
4. **State methodology (TDD).** CI/CD is already covered (Jenkins ✅) — the remaining gap is
   process framing. Emran explicitly says TDD. → Add a short "How I work" blurb: TDD/test
   coverage, code review, Jenkins CI/CD, Docker-based deploys.
5. **Reframe architecture wins.** Mostly done now — Neodesk (13-container microservices) and the
   GrameenPhone auth/campaign service split are headlined. Still promote Edu360's multi-tenant +
   custom-domains + RBAC the same way so all three read as deliberate architecture stories.
6. **Surface leadership / seniority.** I'm a **Team Lead** at V2 — barely visible in the hero. →
   Lead with it; mention team size / mentoring / ownership.
7. **Design-system / Storybook.** Not shown. → Add if I have any component-library / design-token
   experience; otherwise skip rather than fake it.
8. **Mobile / React Native.** Emran ships RN apps (Weather, Discover Japan / Tokyo 2020). My
   portfolio has none. → Add any RN/mobile work, or state web focus deliberately so it reads as a
   choice, not a gap.
9. **Data-fetching layer.** Emran names TanStack/React Query (server-state caching). I show
   Redux/RTK Query only. → Surface server-state strategy: caching, invalidation, optimistic
   updates.
10. **Core Web Vitals.** Make perf concrete with LCP / CLS / INP numbers, not just "3–4x build."
    → Cite real Lighthouse/field metrics for the live products and this portfolio.
11. **Security & compliance framing.** Partly banked now — RBAC, JWT/bcrypt auth, device-binding,
    audit trails, and compliance-certificate tracking (Buying House) appear in projects. → Pull
    them into a dedicated security/compliance line so it reads as a strength, not scattered bullets.
12. **Open-source / GitHub presence.** → Pin repos, show contribution graph, link OSS work so the
    GitHub profile backs the resume.
13. **Community / thought leadership.** Emran "leads UI workshops." → Surface writing/talks/
    mentoring; promote the PostgreSQL architecture article as proof of thought leadership.

---

## What NOT to Copy

- **Don't ape the static slide format.** Emran's slide is weaker than a live, interactive site —
  my biggest edge. Keep the portfolio interactive; the slide is the thing to *beat*, not imitate.
- **Back the 10+ yr claim with depth.** The seniority number only reads credible if the bullets
  carry senior-level signals — metrics, architecture ownership, leadership, async systems. Lead
  with depth so tenure is the conclusion, not the claim.
- **Don't drop full-stack to look like a FE specialist.** Breadth + live proof is the
  differentiator — lean into it.

---

## Action Checklist (prioritized)

- [ ] **Metrics pass** — add numbers to every bullet in `components/index/Experience.js` and
      `components/index/MyWork.js` (perf %, ms, tenant/user counts, volume).
- [ ] **Reframe Edu360** as a multi-tenant *architecture* win in `MyWork.js` (lead with
      multi-tenant + RBAC + custom domains, not generic "features").
- [ ] **Add Testing + Accessibility** rows to `skills` in `locales/en/common.json` (and
      `locales/bn/common.json`), backed by real evidence.
- [ ] **Promote Team Lead** + add a "How I work" (TDD / CI-CD / code review) blurb in the hero —
      `components/index/Main.js` / `main` block in `common.json`.
- [ ] **Audit the portfolio itself** — run Lighthouse, record a11y + Core Web Vitals (LCP/CLS/INP),
      then cite them.
- [ ] **Surface async/queues** — feature BullMQ + AWS SQS background-job work in a project bullet.
- [ ] **Add a security/compliance line** — RBAC, auth, data isolation, device-binding (already built).
- [ ] **Add mobile / React Native** work, or state web-focus deliberately.
- [ ] **Surface data-fetching strategy** — TanStack/RTK Query caching, invalidation, optimistic updates.
- [ ] **GitHub presence** — pin repos, link OSS, show contribution activity.
- [ ] **Thought leadership** — promote the PostgreSQL article; add talks/writing/mentoring.
- [ ] **Optional:** add Storybook / design-system line only if genuinely applicable.

> Net: substance and tenure are there — the win is *framing* what I've shipped the way Emran
> frames his (metrics, testing, a11y, architecture, methodology), while leaning on my edge:
> live products, full-stack + DevOps lifecycle, and async/event-driven systems.
