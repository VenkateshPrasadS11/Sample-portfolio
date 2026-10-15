import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FolderGit2, Cpu, Phone, Sparkles, Code2, Database } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { TypewriterRole } from './TypewriterRole';
import { HeroCodeCard } from './HeroCodeCard';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Glowing Futuristic Status Badge */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-950/80 via-indigo-950/60 to-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-xl shadow-lg shadow-cyan-950/60 animate-float hover:border-cyan-400 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"></span>
            </span>
            <span className="flex items-center gap-1.5 font-semibold tracking-wide">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              Artificial Intelligence &amp; Data Science Specialization
            </span>
          </div>
        </ScrollReveal>

        {/* Main Greeting - Single Line with Animated Fluid Gradient Glow */}
        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="flex items-center justify-center w-full max-w-full overflow-hidden px-1 mb-4">
            <h1 className="hero-single-line font-black tracking-tight text-white flex items-center justify-center gap-2 sm:gap-3.5 select-none name-glow-aura">
              <span className="text-slate-100 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Hi, I'm
              </span>
              <span className="animate-gradient-flow font-black">
                {portfolioData.personal.name}
              </span>
              <span className="animate-wave text-xl sm:text-3xl md:text-4xl inline-block" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Subtitle / Focus with Typewriter Animated Roles */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm sm:text-lg md:text-xl font-medium text-slate-200 mb-6 font-mono tracking-tight shadow-lg shadow-black/40">
            <span className="text-cyan-400">&lt;</span>
            <TypewriterRole
              roles={[
                "BSc Computer Science Student",
                "AI & Machine Learning Explorer",
                "Data Science Enthusiast",
                "Python & Java Developer",
                "Innovative Problem Solver"
              ]}
            />
            <span className="text-cyan-400">/&gt;</span>
          </div>
        </ScrollReveal>

        {/* Short Introduction */}
        <ScrollReveal animation="fade-up" delay={400}>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            {portfolioData.personal.tagline}
          </p>
        </ScrollReveal>

        {/* Quick Tech Highlights Pills with Gentle Float Animation */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-sm hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI &amp; Machine Learning</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-950/40 border border-teal-500/30 text-teal-300 shadow-sm hover:scale-105 transition-transform">
              <Database className="w-3.5 h-3.5 text-teal-400" />
              <span>Data Science</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 shadow-sm hover:scale-105 transition-transform">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Python &amp; Java</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Two Call-to-Action Buttons with Shimmer & Glow */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto shimmer-btn inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-slate-900/90 hover:bg-slate-800/90 text-slate-100 hover:text-white border border-slate-700/80 hover:border-cyan-400/60 shadow-lg shadow-black/40 hover:shadow-cyan-500/20 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Social Icons & Quick Connect */}
        <ScrollReveal animation="fade-up" delay={700}>
          <div className="flex items-center justify-center gap-3.5 sm:gap-4 mb-4">
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-purple-300 hover:border-purple-500/50 hover:bg-purple-950/30 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-blue-300 hover:border-blue-500/50 hover:bg-blue-950/30 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${portfolioData.socialLinks.email}`}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Email Me"
              title="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>

            {portfolioData.socialLinks.phone && (
              <a
                href={`tel:${portfolioData.socialLinks.rawPhone || portfolioData.socialLinks.phone}`}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 hover:bg-emerald-950/30 hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Call Me"
                title={`Call: ${portfolioData.socialLinks.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Interactive Futuristic Live Code Terminal */}
        <ScrollReveal animation="fade-up" delay={800}>
          <HeroCodeCard />
        </ScrollReveal>

        {/* Scroll down indicator with bounce */}
        <div className="mt-14 hidden sm:flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1.5"
            aria-label="Scroll to About Me section"
          >
            <span className="text-xs uppercase tracking-widest font-mono">Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
