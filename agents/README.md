# 🤖 Portfolio Multi-Agent System

A specialized team of AI agents, each with a focused role in building your portfolio. Use these in your **Agent Manager** to delegate tasks by domain.

---

## Agent Roster

| Agent | Role | Key Focus |
|---|---|---|
| `@architect` | System Architect | Project structure, Next.js setup, routing |
| `@designer` | UI/UX Designer | Visual design, Tailwind, design system |
| `@frontend-pro` | Creative Designer | High-end aesthetics, Pro Max UI/UX |
| `@content` | Content Strategist | Copy, bio, project descriptions |
| `@seo` | SEO Engineer | Metadata, performance, Core Web Vitals |
| `@animator` | Motion Designer | Framer Motion, transitions, interactions |
| `@dev` | Frontend Developer | Component code, TypeScript, React |
| `@reviewer-pro` | QA Specialist | Vercel design guidelines, accessibility |
| `@marketing-pro` | Growth Strategist | CRO, marketing copy, launch strategy |
| `@mobile-pro` | Mobile Developer | React Native, platform optimization |


---

## How to Use

Each agent lives in `agents/<agent-name>.md`. Load the relevant agent when you need to work on that domain.

### Example Workflow

```
1. @architect  → Set up the project structure and routes
2. @designer   → Define the visual design system
3. @content    → Write all portfolio copy from your resume
4. @dev        → Build all components
5. @animator   → Add Framer Motion animations
6. @seo        → Add metadata and optimize performance
7. @reviewer   → Final audit and accessibility check
```

---

## Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript (strict)
- **Animations**: Framer Motion
- **Deployment**: Vercel

---

## Portfolio Sections

Each agent is aware of the following sections to build:

1. **Hero** — Name, title, short tagline, CTA
2. **About** — Bio, background, personality
3. **Skills** — Tech stack, tools, proficiencies
4. **Projects** — Case studies with problem/solution/outcome
5. **Experience** — Work history from resume
6. **Contact** — Email, LinkedIn, GitHub

---

## Source Files

- `claude.md` — Core project conventions
- `docs/design.md` — Design system reference
- `docs/seo.md` — SEO rules
- `docs/animation.md` — Animation guidelines
- `docs/performance.md` — Performance standards
