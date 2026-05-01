\-\--

\# 📄 \`/docs/animations.md\`

\`\`\`md \# Animation Guidelines

\## Philosophy Animations should: - Enhance UX - Guide attention - Never
distract

\-\--

\## Tools

\- Framer Motion (preferred) - CSS transitions (for simple effects)

\-\--

\## Principles

\### 1. Keep it subtle - Duration: 150ms -- 400ms - Avoid flashy or
excessive motion

\### 2. Use motion for meaning - Hover → feedback - Scroll → reveal
content - Page transitions → continuity

\-\--

\## Recommended Patterns

\### Fade In - For sections and components

\### Slide Up - For cards and project items

\### Scale Hover - For buttons and clickable elements

\-\--

\## Performance Rules

\- Avoid heavy animation libraries - Use \`transform\` and \`opacity\`
only - Avoid layout-triggering properties

Why: - Prevents jank and improves performance

\-\--

\## Accessibility

\- Respect \`prefers-reduced-motion\` - Avoid motion that causes
discomfort

\`\`\`css \@media (prefers-reduced-motion: reduce) { \* { animation:
none !important; } }

Do NOT Do not animate everything Do not use long delays Do not block
user interaction
