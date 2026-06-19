import { projects } from "@/lib/data";
import { ExternalLink, GitFork } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { ImageSlider } from "@/components/ui/ImageSlider";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-amber-500/5 blur-[100px] rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              Selected Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Digital Solutions.<br />
              <span className="text-text-secondary opacity-60 font-medium italic">Impactful Results.</span>
            </h2>
          </div>
        </FadeUp>

        {/* Project List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeUp key={project.slug} delay={idx * 0.1}>
                <div>
                  {/* Project Label e.g. Project 1 / Project 2 */}
                  <div className={`text-xs font-bold tracking-[0.2em] text-text-muted mb-4 uppercase ${isEven ? 'text-left' : 'text-right'}`}>
                    Project {idx + 1}
                  </div>

                  {/* Card Container */}
                  <div className="glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 hover:-translate-y-1 transition-all duration-500">
                    {/* Image Column */}
                    <div className={`w-full md:w-1/2 flex justify-center items-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      {/* Shadow wrapper to cast shadow for the clipped shape */}
                      <div 
                        className="relative w-full aspect-[16/10] max-w-[380px] p-2"
                        style={{ 
                          filter: 'drop-shadow(0 15px 25px rgba(30, 58, 138, 0.15))' 
                        }}
                      >
                        {/* Clipped container */}
                        <div 
                          className="w-full h-full bg-slate-200/50 dark:bg-slate-800/50 overflow-hidden"
                          style={{ 
                            clipPath: 'url(#project-clip-path)',
                          }}
                        >
                          {project.imageUrls && project.imageUrls.length > 0 ? (
                            <ImageSlider images={project.imageUrls} />
                          ) : (
                            <div className={`w-full h-full relative flex items-center justify-center bg-gradient-to-br ${
                              idx % 4 === 0 ? "from-primary via-blue-400 to-emerald-400" :
                              idx % 4 === 1 ? "from-amber-400 via-orange-400 to-primary" :
                              idx % 4 === 2 ? "from-emerald-400 via-teal-400 to-blue-400" :
                              "from-purple-400 via-primary to-blue-400"
                            } opacity-90`}>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_100%)]" />
                              <div className="relative z-10 text-white/20 font-black text-7xl tracking-tighter select-none">
                                0{idx + 1}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className={`w-full md:w-1/2 flex flex-col gap-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-bold text-2xl sm:text-3xl tracking-tight text-text-primary hover:text-primary transition-colors mb-0">
                            {project.title}
                          </h3>
                          <span className="flex-shrink-0 text-[10px] font-black text-text-muted bg-border/40 rounded-full px-3 py-1 uppercase tracking-widest mt-1">
                            {project.year}
                          </span>
                        </div>
                        {project.summary && (
                          <p className="text-sm font-semibold text-primary/85 italic tracking-wide">
                            {project.summary}
                          </p>
                        )}
                      </div>

                      <p className="text-text-secondary leading-relaxed text-pretty opacity-90 hover:opacity-100 transition-opacity">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border/50 bg-white/40 px-3 py-1 text-[10px] font-bold text-text-secondary uppercase tracking-wider"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {/* Links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="flex items-center gap-6 pt-4 border-t border-border/50">
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
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* SVG Clip Path Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="project-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.15 Q 0.5,-0.05 1,0.15 L 1,0.85 Q 0.5,1.05 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}

