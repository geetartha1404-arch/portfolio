import { personalInfo } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeUp className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                About me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Healthcare background.
                <br />
                <span className="text-muted-foreground font-normal">
                  AI-first mindset.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                {personalInfo.email}
              </a>
            </div>
          </FadeUp>

          {/* Stat cards */}
          <FadeUp delay={0.2} className="grid grid-cols-2 gap-4">
            {[
              { value: "4+", label: "Internships completed" },
              { value: "4", label: "Projects shipped" },
              { value: "6", label: "Certifications earned" },
              { value: "1K+", label: "Blog posts migrated" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
