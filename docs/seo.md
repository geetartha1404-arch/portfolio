\# SEO Guidelines (Next.js Portfolio)

\## Goals - Improve visibility on Google - Ensure fast indexing and
ranking - Optimize for Core Web Vitals

\-\--

\## Core SEO Setup

\### Metadata (App Router) Use Next.js Metadata API:

\`\`\`ts export const metadata = { title: \"Your Name -- Portfolio\",
description: \"Frontend Developer Portfolio showcasing projects and
skills\", }

Why:

Controls titles, descriptions, OpenGraph, and social previews Rendering
Strategy Prefer SSG (Static Site Generation) for portfolio pages Use ISR
for content updates Avoid unnecessary SSR

Why:

Pre-rendered HTML improves SEO and performance URL & Structure Clean
URLs → /projects/portfolio-site Avoid query-heavy URLs Use semantic
routes Required Files /sitemap.xml /robots.txt

These help search engines crawl and index your site correctly

Image Optimization

Use Next.js \<Image /\>:

\<Image src=\"/project.png\" alt=\"Project preview\" /\>

Benefits:

Faster load times Better SEO ranking On-Page SEO

Each page must have:

Unique title Meta description Proper heading structure (H1 → H2 → H3)
Alt text for images Core Web Vitals

Focus on:

LCP (load speed) CLS (layout shift) FID (interactivity)

Google ranks faster sites higher

Tools Google Lighthouse Meta SEO Inspector Rules Do not duplicate
content Do not leave pages without metadata Do not ignore mobile
optimization
