import { personalInfo } from "@/lib/data";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    jobTitle: personalInfo.title,
    sameAs: [personalInfo.linkedin, personalInfo.github].filter(Boolean),
    knowsAbout: [
      "AI Automation",
      "No-Code",
      "Python",
      "Digital Marketing",
      "Healthcare",
      "Radiography",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
