import Image from "next/image";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowDown, Link2, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

const iconMap: Record<string, React.ElementType> = {
  Linkedin: Link2,
  Mail,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.15]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)_0%,transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 md:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start pt-10 md:pt-0">
          <FadeUp delay={0.1}>
            <div className="flex gap-8 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-text-primary">+50</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider">Workflows automated</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-text-primary">+10</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider">Projects delivered</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none text-text-primary mb-6">
              Hello<span className="text-primary">.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-[2px] bg-primary"></div>
              <p className="text-xl sm:text-2xl font-medium text-text-secondary tracking-tight">
                - It&apos;s {personalInfo.name.split(' ')[0]}, {personalInfo.title.toLowerCase()}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <a
              href="#about"
              className="group flex items-center gap-3 text-text-primary font-medium hover:text-primary transition-colors"
            >
              <span className="text-sm uppercase tracking-widest">Scroll down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </FadeUp>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 w-full max-w-lg md:max-w-none relative flex justify-center items-center">
          <FadeUp delay={0.3} className="w-full h-full flex justify-center items-center">
            <div 
              className="relative aspect-square md:aspect-[4/5] w-full max-w-[600px] mix-blend-multiply"
              style={{
                maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)'
              }}
            >
              <Image 
                src="/images/profile-bw.jpg" 
                alt={personalInfo.name}
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover scale-[1.15] md:scale-[1.25] origin-center"
              />
            </div>
          </FadeUp>
          
          {/* Social Dock Floating on Image */}
          <FadeUp delay={0.6} className="absolute bottom-6 right-6 z-10">
            <div className="flex flex-row items-center gap-2 p-2 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-premium">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-text-secondary hover:text-primary hover:bg-white transition-all shadow-sm"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
