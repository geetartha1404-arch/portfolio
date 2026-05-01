import { experience, certifications } from "@/lib/data";
import { Briefcase, Award, Calendar, MapPin } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -z-10 w-1/4 h-1/4 bg-primary/5 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              The Record
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Professional Path.<br />
              <span className="text-text-secondary opacity-60 font-medium italic">Versatile Experience.</span>
            </h2>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical path */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/20 via-border to-transparent hidden sm:block"
          />

          <ol className="space-y-12">
            {experience.map((job, index) => (
              <FadeUp
                key={index}
                delay={index * 0.1}
                className="relative sm:pl-16 flex flex-col gap-4"
              >
                {/* Marker */}
                <div
                  aria-hidden
                  className="hidden sm:flex absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white shadow-premium z-10"
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                {/* Job Card */}
                <div className="glass-card rounded-3xl p-8 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-2xl tracking-tight text-text-primary group-hover:text-primary transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-primary font-bold text-base">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted">
                      <span className="flex items-center gap-2 bg-border/40 px-3 py-1 rounded-full">
                        <Calendar className="h-3 w-3" />
                        {job.startDate} – {job.endDate}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {job.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm leading-relaxed flex gap-3 text-pretty"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border/50 bg-white/40 px-3 py-1 text-[10px] font-bold text-text-secondary uppercase tracking-wider"
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
        <FadeUp delay={0.3} className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Accredited Excellence</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="text-xs font-black">0{i + 1}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold leading-tight text-text-primary group-hover:text-primary transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
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

