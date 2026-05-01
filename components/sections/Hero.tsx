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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.08),transparent)]"
      />

      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <FadeUp delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </span>
        </FadeUp>

        {/* Name */}
        <FadeUp delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none">
            {personalInfo.shortName}
            <span className="text-primary">.</span>
          </h1>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.3}>
          <p className="text-xl sm:text-2xl font-medium text-muted-foreground max-w-xl">
            {personalInfo.title}
          </p>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.4}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </FadeUp>

        {/* Social links */}
        <FadeUp delay={0.6}>
          <div className="flex items-center gap-4 mt-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>
        </FadeUp>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
