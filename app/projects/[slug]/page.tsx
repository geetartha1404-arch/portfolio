import { projects } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, GitFork, ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Geetartha Borpatra Gohain`,
      description: project.summary,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <article className="py-24 max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {project.year}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.summary}</p>
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                <GitFork className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        )}

        {/* Image Placeholder if no image */}
        {!project.imageUrl && (
          <div className="w-full h-64 sm:h-96 bg-gradient-to-br from-primary/10 via-secondary to-primary/5 rounded-xl flex items-center justify-center text-6xl mb-12 select-none">
            {project.slug === "healthtech-ai-workflow" && "🤖"}
            {project.slug === "blog-migration-automation" && "📋"}
            {project.slug === "python-web-scraper" && "🐍"}
            {project.slug === "ai-rectal-cancer-review" && "🔬"}
          </div>
        )}

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
          <h2>Overview</h2>
          <p className="whitespace-pre-wrap leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="border-t border-border pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Technologies & Tools
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </PageWrapper>
  );
}
