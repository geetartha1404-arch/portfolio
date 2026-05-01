import { personalInfo } from "@/lib/data";
import { MapPin, Mail, ArrowDown } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

export default function About() {
  const stats = [
    { value: "4+", label: "Internships completed", color: "var(--color-primary)" },
    { value: "4", label: "Projects shipped", color: "var(--color-emerald)" },
    { value: "6", label: "Certifications earned", color: "var(--color-amber)" },
    { value: "1K+", label: "Blog posts migrated", color: "var(--color-primary)" },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              The Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Healthcare background.<br />
              <span className="text-text-secondary opacity-60 font-medium italic">AI-first mindset.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="bento-grid">
          {/* Main Bio Card */}
          <FadeUp delay={0.1} className="bento-col-8">
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between">
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                {personalInfo.bio.map((paragraph, i) => (
                  <p key={i} className="text-pretty">{paragraph}</p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{personalInfo.location}</span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{personalInfo.email}</span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Stats Bento Items */}
          <div className="bento-col-4 grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={0.2 + i * 0.1}>
                <div className="glass-card rounded-3xl p-6 flex items-center justify-between group">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-text-secondary uppercase tracking-wider">{stat.label}</span>
                    <span className="text-3xl font-bold tracking-tighter" style={{ color: stat.color }}>
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                    <ArrowDown className="h-4 w-4 -rotate-135" />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

