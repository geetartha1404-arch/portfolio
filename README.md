# Portfolio Project Review

## Project Overview

This repository contains a personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. The site is structured as a single-page homepage with dedicated dynamic pages for individual projects, plus a contact API route for sending emails.

From reviewing the codebase, the app currently includes:

- A homepage composed of `Hero`, `About`, `Skills`, `Projects`, `Experience`, and `Contact` sections
- Dynamic project detail pages at `/projects/[slug]`
- Shared portfolio content stored in `lib/data.ts`
- SEO support through metadata, JSON-LD, `sitemap.ts`, and `robots.ts`
- A contact form backed by Nodemailer in `app/api/contact/route.ts`

## Tools Installed

Based on `package.json`, the project is configured to use these tools and libraries:

### Core framework

- `next@16.2.4`
- `react@19.2.4`
- `react-dom@19.2.4`
- `typescript@^5`

### Styling and UI

- `tailwindcss@^4`
- `@tailwindcss/postcss@^4`
- `lucide-react@^1.14.0`
- `clsx@^2.1.1`

### Animation and interaction

- `framer-motion@^12.38.0`

### Backend / utility

- `nodemailer@^8.0.7`
- `@types/nodemailer@^8.0.0`

### Code quality

- `eslint@^9`
- `eslint-config-next@16.2.4`
- `@types/node@^20`
- `@types/react@^19`
- `@types/react-dom@^19`

## Steps Completed

During the review and analysis of the full codebase, these steps were completed:

1. Reviewed the project structure, including `app`, `components`, `lib`, `styles`, `public`, and `docs`.
2. Checked the main application flow in `app/page.tsx` and `app/layout.tsx`.
3. Analyzed all major homepage sections to understand the UI composition and content strategy.
4. Reviewed the shared data model in `lib/data.ts` and interfaces in `lib/types.ts`.
5. Reviewed dynamic routing for project pages in `app/projects/[slug]/page.tsx`.
6. Checked the contact form flow and email handling in `app/api/contact/route.ts` and `lib/mail.ts`.
7. Verified the SEO implementation through metadata, JSON-LD, sitemap generation, and robots configuration.
8. Reviewed the global styling approach in `styles/globals.css`, including theme tokens, glassmorphism, and responsive grid utilities.
9. Replaced the default starter README with this project-specific documentation.

## Issues I Ran Into and How I Solved Them

### 1. `node_modules` was not present locally

Issue:
The repository does not currently include an installed `node_modules` directory, so I could not read the bundled Next.js 16 docs referenced in `AGENTS.md`, and I also could not run the app or linting locally from installed packages.

How I handled it:
I relied on the checked-in source code, `package.json`, and `package-lock.json` to document the actual stack and architecture without inventing behavior that was not confirmed in the repo.

### 2. PowerShell path handling for dynamic route folders

Issue:
Reading `app/projects/[slug]/page.tsx` directly with a normal path failed because square brackets are treated specially in PowerShell paths.

How I handled it:
I switched to `Get-Content -LiteralPath`, which correctly reads files inside bracketed route folders.

### 3. Text encoding problems in multiple source files

Issue:
Several files contain mojibake characters such as `â€”`, `âœ“`, and `Â©`, which suggests an encoding mismatch in the source files.

How I handled it:
I did not change application code because the task was specifically to update the README, but I documented this as a real follow-up issue found during review. These files should be normalized to UTF-8 to avoid broken copy in the UI and metadata.

### 4. Runtime configuration depends on environment variables

Issue:
The contact route and site metadata depend on environment variables such as `NEXT_PUBLIC_SITE_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM`, but no environment example file is present in the repository.

How I handled it:
I inferred the required configuration from the code and included the dependency here so future setup is clearer.

## Recommended Next Fixes

- Add an `.env.example` file for site URL and SMTP configuration
- Install dependencies and run `npm run lint`
- Fix encoding issues across the source files
- Add deployment/setup instructions once the runtime environment is confirmed
