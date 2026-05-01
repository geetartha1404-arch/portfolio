import { projects } from "@/lib/data";
import { ExternalLink, GitFork } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger-container";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-amber-500/5 blur-[100px] rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              Selected Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Digital Solutions.<br />
              <span className="text-text-secondary opacity-60 font-medium italic">Impactful Results.</span>
            </h2>
          </div>
        </FadeUp>

        {/* Featured projects */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <StaggerItem
              key={project.slug}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500"
            >
              {/* Abstract Gradient Header */}
              <div className={`h-48 relative overflow-hidden flex items-center justify-center`}>
                <div className={`absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700 ${
                  idx % 4 === 0 ? "bg-gradient-to-br from-primary via-blue-400 to-emerald-400" :
                  idx % 4 === 1 ? "bg-gradient-to-br from-amber-400 via-orange-400 to-primary" :
                  idx % 4 === 2 ? "bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400" :
                  "bg-gradient-to-br from-purple-400 via-primary to-blue-400"
                }`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_100%)]" />
                <div className="relative z-10 text-text-primary/10 font-black text-6xl tracking-tighter select-none group-hover:scale-125 transition-transform duration-500 group-hover:text-primary/20">
                  0{idx + 1}
                </div>
              </div>

              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-2xl tracking-tight text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 text-[10px] font-black text-text-muted bg-border/40 rounded-full px-3 py-1 uppercase tracking-widest">
                    {project.year}
                  </span>
                </div>

                <p className="text-text-secondary leading-relaxed flex-1 text-pretty opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border/50 bg-white/40 px-3 py-1 text-[10px] font-bold text-text-secondary uppercase tracking-wider"
                    >
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 4 && (
                    <li className="text-[10px] font-bold text-text-muted px-1 py-1 uppercase tracking-wider">
                      +{project.tags.length - 4} more
                    </li>
                  )}
                </ul>

                {/* Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex items-center gap-6 pt-6 border-t border-border/50 mt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Explore Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-text-primary transition-colors"
                      >
                        <GitFork className="h-4 w-4" />
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other projects */}
        {rest.length > 0 && (
          <FadeUp delay={0.2} className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                Archive & Experiments
              </h3>
              <div className="h-[1px] flex-1 bg-border/50" />
            </div>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project) => (
                <StaggerItem
                  key={project.slug}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-lg leading-tight text-text-primary">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 text-[10px] font-bold text-text-muted">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{project.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="text-[10px] font-bold text-primary uppercase tracking-wider"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

