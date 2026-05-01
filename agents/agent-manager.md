# 🎛️ Agent Manager
**Orchestrates the Portfolio Multi-Agent System**

---

## Overview

The Agent Manager is the **control center** for your portfolio build. It decides which agent to call, when to call them, and in what order. Use this as your primary reference for managing the build workflow.

---

## Agent Directory

| ID | File | Specialty |
|---|---|---|
| `@architect` | `agents/architect.md` | Project setup, Next.js config, folder structure |
| `@designer` | `agents/designer.md` | Tailwind design system, colors, typography |
| `@content` | `agents/content.md` | Copy, bio, `lib/data.ts`, resume parsing |
| `@dev` | `agents/dev.md` | React components, TypeScript, page assembly |
| `@animator` | `agents/animator.md` | Framer Motion, scroll reveals, hover effects |
| `@seo` | `agents/seo.md` | Metadata, sitemap, structured data, performance |
| `@reviewer` | `agents/reviewer.md` | Code quality, accessibility, final audit |

---

## Build Pipeline

The portfolio is built in **4 phases**. Each phase has a responsible agent and clear deliverables.

---

### Phase 1: Foundation
> ⏱️ Do this first. Nothing else can start without it.

**Active Agents**: `@architect`, `@content`  
**Can run**: Parallel

| Task | Agent | Deliverable |
|---|---|---|
| Init Next.js project | `@architect` | Working `npm run dev` |
| Configure TypeScript | `@architect` | `tsconfig.json` with strict + path aliases |
| Set up folder structure | `@architect` | All folders created |
| Define TypeScript types | `@architect` | `lib/types.ts` |
| Parse resume + LinkedIn | `@content` | Raw extracted data |
| Write all copy | `@content` | Hero, About, bio text |
| Populate `lib/data.ts` | `@content` | All portfolio data ready |

---

### Phase 2: Design System
> ⏱️ Must complete before `@dev` starts building.

**Active Agents**: `@designer`

| Task | Agent | Deliverable |
|---|---|---|
| Extend Tailwind config | `@designer` | All color/spacing tokens |
| Write `globals.css` | `@designer` | Base styles + CSS vars |
| Document component patterns | `@designer` | Card, button, badge specs |

---

### Phase 3: Build
> ⏱️ Main development phase. Run in order below.

**Active Agents**: `@dev`, `@animator`, `@seo`

#### Step 1 — Layout Components
```
@dev → Navbar (static, no animations yet)
@dev → Footer
@dev → PageWrapper
```

#### Step 2 — UI Primitives
```
@dev → Button, Card, Badge, Tag, SectionHeader
```

#### Step 3 — Section Components
```
@dev → HeroSection
@dev → AboutSection
@dev → SkillsSection
@dev → ProjectsSection + ProjectCard
@dev → ExperienceSection
@dev → ContactSection
```

#### Step 4 — Page Assembly
```
@dev → app/page.tsx (assemble all sections)
@dev → app/projects/[slug]/page.tsx
@dev → app/api/contact/route.ts
```

#### Step 5 — Animations (layer on top of built components)
```
@animator → FadeUp component
@animator → StaggerContainer + StaggerItem
@animator → Hero entrance sequence
@animator → Navbar scroll blur
@animator → Card hover effects
@animator → Apply animations to all sections
```

#### Step 6 — SEO (add after content is live)
```
@seo → Root layout metadata
@seo → Project page metadata (generateMetadata)
@seo → app/sitemap.ts
@seo → app/robots.ts
@seo → JSON-LD structured data
@seo → Font optimization (next/font)
@seo → Image audit (next/image, priority, alt)
```

---

### Phase 4: Ship
> ⏱️ Final checks before deploying.

**Active Agents**: `@reviewer`

| Task | Agent | Deliverable |
|---|---|---|
| Code quality audit | `@reviewer` | TypeScript + ESLint clean |
| Accessibility audit | `@reviewer` | axe DevTools pass |
| Performance audit | `@reviewer` | Lighthouse ≥ 90 all categories |
| Content audit | `@reviewer` | No placeholder text, all links work |
| Responsive audit | `@reviewer` | 375px, 768px, 1440px pass |
| Sign-off report | `@reviewer` | Final checklist |

---

## Task Routing Guide

Use this to decide which agent to call for any task:

```
"The project won't start / build fails"      → @architect
"The layout looks broken"                    → @dev or @designer
"Colors/fonts look wrong"                    → @designer
"I need to update my bio or project info"    → @content → then @dev
"Add a new project to the portfolio"         → @content (data.ts) → @dev (component) → @seo (metadata)
"Animations are janky or missing"            → @animator
"Page loads slowly"                          → @seo + @reviewer
"Google can't find my site"                  → @seo
"There's a TypeScript error"                 → @dev or @architect
"Accessibility issue (keyboard, contrast)"   → @reviewer
"Final checks before deploying"              → @reviewer
```

---

## Context Passing Rules

When switching agents, always provide:

1. **What phase you're in** (1–4)
2. **What's already done** (reference completed tasks)
3. **The specific file(s) to touch**
4. **Any relevant output from the previous agent**

Example handoff:
```
"@dev — Phase 3, Step 2. @designer has completed the Tailwind config.
@content has populated lib/data.ts with all skills and projects.
Now build the SkillsSection component at components/sections/skills-section.tsx.
Use the skills object from lib/data.ts and the Tag component.
Apply @designer's color tokens for the category labels."
```

---

## Source Files Reference

Always provide agents with the relevant reference documents:

| Topic | Document |
|---|---|
| Project conventions | `claude.md` |
| Design system | `docs/design.md` |
| SEO rules | `docs/seo.md` |
| Animation rules | `docs/animation.md` |
| Performance rules | `docs/performance.md` |
| Portfolio data | `lib/data.ts` (after Phase 1) |
| TypeScript types | `lib/types.ts` (after Phase 1) |

---

## Build Status Tracker

Copy this into your notes and check off as you go:

```
PHASE 1 — FOUNDATION
[ ] Next.js initialized
[ ] TypeScript configured
[ ] Folder structure created
[ ] lib/types.ts created
[ ] Resume parsed
[ ] lib/data.ts populated

PHASE 2 — DESIGN SYSTEM
[x] tailwind.config.ts extended (implemented via globals.css @theme for v4)
[x] globals.css written
[x] Component patterns documented (implemented in components/ui)

PHASE 3 — BUILD
[x] Navbar
[x] Footer
[x] PageWrapper
[x] Button, Card, Badge, Tag, SectionHeader
[x] HeroSection
[x] AboutSection
[x] SkillsSection
[x] ProjectsSection + ProjectCard
[x] ExperienceSection
[x] ContactSection
[x] app/page.tsx assembled
[x] app/projects/[slug]/page.tsx
[x] app/api/contact/route.ts
[x] Animations applied
[x] SEO metadata added
[x] Sitemap + robots

PHASE 4 — SHIP
[x] TypeScript + ESLint clean
[x] Accessibility audit passed
[x] Lighthouse ≥ 90
[x] Content complete
[x] Responsive verified
[x] Reviewer signed off
[ ] Deployed to Vercel
```
