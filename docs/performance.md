\-\--

\# 📄 \`/docs/performance.md\`

\`\`\`md \# Performance Guidelines

\## Goal Build a fast, lightweight portfolio with excellent Core Web
Vitals.

\-\--

\## Key Metrics

\- LCP (Largest Contentful Paint) - CLS (Cumulative Layout Shift) - FID
(First Input Delay)

\-\--

\## Next.js Optimizations

\### Image Optimization Use \`next/image\` for automatic compression

\### Code Splitting Use dynamic imports:

\`\`\`ts const Component = dynamic(() =\> import(\'./Component\'))

Lazy Loading Load components only when needed Static Generation Prefer
SSG for faster performance

Why:

Next.js supports automatic optimization like lazy loading and code
splitting Reduce JavaScript Avoid large libraries Remove unused code
Prefer server components Fonts Use optimized fonts Avoid loading too
many font weights Caching Use browser caching Use CDN (Vercel handles
this well) Bundle Control Analyze bundle size Keep initial load small UX
Performance Show skeleton loaders Avoid blocking UI Keep interactions
instant Rules Do not ship unnecessary JS Do not ignore Lighthouse
warnings Do not sacrifice performance for visuals
