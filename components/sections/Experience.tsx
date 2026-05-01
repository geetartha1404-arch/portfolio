import { experience, certifications } from "@/lib/data";
import { Briefcase, Award, Calendar, MapPin } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeUp>
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Where I&apos;ve worked
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              From radiology wards to AI automation — a non-linear path that
              connects healthcare, technology, and creative problem-solving.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block"
          />

          <ol className="space-y-10">
            {experience.map((job, index) => (
              <FadeUp
                key={index}
                className="relative sm:pl-14 flex flex-col gap-3"
              >
                {/* Dot */}
                <div
                  aria-hidden
                  className="hidden sm:flex absolute left-0 top-1 h-8 w-8 items-center justify-center rounded-full border border-border bg-card shadow-sm"
                >
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-lg leading-snug">
                        {job.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {job.startDate} – {job.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {job.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          •
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-1.5">
                    {job.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <FadeUp delay={0.2} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card px-5 py-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
