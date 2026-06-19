import { projects } from "@/lib/data";
import { ExternalLink, GitFork } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { ImageSlider } from "@/components/ui/ImageSlider";

export default function CaseStudies() {
  const caseStudies = projects.filter((p) => !p.featured);

  if (caseStudies.length === 0) return null;

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-background/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -z-10 w-1/4 h-1/4 bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              In-Depth Analyses
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Case Studies.<br />
              <span className="text-text-secondary opacity-60 font-medium italic">Practical Implementations.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {caseStudies.map((project, idx) => (
            <FadeUp key={project.slug} delay={idx * 0.1} className="w-full md:w-[340px] flex">
              <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col w-full hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden bg-black/5 border-b border-border/40">
                  {project.imageUrls && project.imageUrls.length > 0 ? (
                    <ImageSlider images={project.imageUrls} />
                  ) : (
                    <div className={`w-full h-full relative flex items-center justify-center bg-gradient-to-br ${
                      idx % 3 === 0 ? "from-primary/80 to-blue-500/80" :
                      idx % 3 === 1 ? "from-emerald-500/80 to-teal-600/80" :
                      "from-purple-500/80 to-indigo-600/80"
                    }`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
                      <div className="relative z-10 text-white/20 font-black text-6xl tracking-tighter select-none">
                        CS{idx + 1}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col gap-5 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-bold text-xl leading-tight text-text-primary transition-colors mb-0">
                        {project.title}
                      </h3>
                      <span className="flex-shrink-0 text-[10px] font-black text-text-muted bg-border/40 rounded-full px-2 py-0.5 uppercase tracking-widest mt-1">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed opacity-95">
                      {project.summary || project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Tags */}
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border/40 bg-white/30 px-2.5 py-0.5 text-[9px] font-bold text-text-secondary uppercase tracking-wider"
                        >
                          {tag}
                        </li>
                      ))}
                      {project.tags.length > 3 && (
                        <li className="text-[9px] font-bold text-text-muted px-1 py-0.5 uppercase tracking-wider">
                          +{project.tags.length - 3} more
                        </li>
                      )}
                    </ul>

                    {/* Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2 transition-all"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Explore Live
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-text-primary transition-colors"
                          >
                            <GitFork className="h-3.5 w-3.5" />
                            View Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
