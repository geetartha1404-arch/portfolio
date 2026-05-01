import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowDown, Download, Link2, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

const iconMap: Record<string, React.ElementType> = {
  Linkedin: Link2,
  Mail,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.15]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)_0%,transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.05]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 w-full">
        {/* Eyebrow */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-primary mb-2 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
        </FadeUp>

        {/* Content Group */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-text-primary">
              Welcome to my Portfolio
              <span className="text-primary">.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-2xl sm:text-3xl font-medium text-text-secondary tracking-tight">
              {personalInfo.title}
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-lg sm:text-xl text-text-secondary/80 max-w-2xl mx-auto leading-relaxed text-pretty">
              {personalInfo.tagline}
            </p>
          </FadeUp>
        </div>

        {/* CTAs */}
        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-premium transition-all hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-8 py-4 text-sm font-bold text-text-primary backdrop-blur-md transition-all hover:bg-white hover:border-primary/20 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
            >
              <Download className="h-4 w-4" />
              Get Resume
            </a>
          </div>
        </FadeUp>

        {/* Social Dock */}
        <FadeUp delay={0.6}>
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/30 backdrop-blur-xl border border-border/50 shadow-premium mt-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>
        </FadeUp>

        {/* Scroll cue */}
        <FadeUp delay={0.8}>
          <a
            href="#about"
            aria-label="Scroll to About"
            className="group flex flex-col items-center gap-2 mt-12 text-text-muted hover:text-primary transition-colors"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
              <ArrowDown className="h-4 w-4 mt-2 animate-bounce" />
            </div>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

