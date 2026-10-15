import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Bot, 
  Database, 
  Code, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData, ProjectItem } from '../portfolioData';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';
import { LiveDemoModal } from './LiveDemoModal';

interface ProjectStyle {
  icon: React.ReactNode;
  borderGlow: string;
  badgeBg: string;
  accentGradient: string;
  topLine: string;
}

const projectCardStyles: ProjectStyle[] = [
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    borderGlow: 'group-hover:border-cyan-400/60',
    badgeBg: 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300',
    accentGradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
    topLine: 'from-cyan-400 via-blue-500 to-teal-400'
  },
  {
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    borderGlow: 'group-hover:border-indigo-400/60',
    badgeBg: 'bg-indigo-950/70 border-indigo-500/40 text-indigo-300',
    accentGradient: 'from-indigo-500/15 via-purple-500/10 to-transparent',
    topLine: 'from-indigo-400 via-purple-500 to-pink-400'
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    borderGlow: 'group-hover:border-emerald-400/60',
    badgeBg: 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300',
    accentGradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
    topLine: 'from-emerald-400 via-teal-500 to-cyan-400'
  }
];

export const Projects: React.FC = () => {
  const [activeDemoProject, setActiveDemoProject] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDemoClick = (e: React.MouseEvent, project: ProjectItem) => {
    e.preventDefault();
    setActiveDemoProject(project.title);
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, projectTitle: string) => {
    if (url === '#' || !url.startsWith('http')) {
      e.preventDefault();
      setToastMessage(`GitHub link for "${projectTitle}" is ready to be configured in src/portfolioData.ts!`);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with Glowing Accent */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3.5 shadow-md shadow-cyan-950/50">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Showcase &amp; Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              My <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full mt-4 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
          </div>
        </ScrollReveal>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900/95 border border-cyan-400/80 text-slate-100 px-4 py-3 rounded-2xl shadow-2xl shadow-cyan-950/80 backdrop-blur-2xl flex items-start gap-3 animate-bounce">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-cyan-300">Notice</p>
              <p className="text-slate-300 mt-0.5 leading-relaxed">{toastMessage}</p>
            </div>
          </div>
        )}

        {/* Interactive Live Demo Simulation Modal */}
        <LiveDemoModal
          projectTitle={activeDemoProject || 'Project Demo'}
          isOpen={!!activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />

        {/* Projects Responsive Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioData.projects.map((project: ProjectItem, index: number) => {
            const cardStyle = projectCardStyles[index % projectCardStyles.length];

            return (
              <ScrollReveal key={project.id} animation="fade-up" delay={index * 150} className="h-full">
                <TiltCard maxTilt={6} className="h-full">
                  <div
                    className={`h-full glass-card rounded-2xl flex flex-col justify-between p-7 sm:p-8 relative overflow-hidden group transition-all duration-300 shadow-xl ${cardStyle.borderGlow} ${
                      project.featured ? 'ring-1 ring-cyan-500/40 shadow-cyan-950/50' : ''
                    }`}
                  >
                    {/* Top Animated Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cardStyle.topLine} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Background Ambient Glow */}
                    <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${cardStyle.accentGradient} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                    <div className="relative z-10">
                      {/* Header with Icon & Pill */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                          {cardStyle.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          {project.featured && (
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 text-[10px] font-mono font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                              <Sparkles className="w-3 h-3 text-cyan-400" />
                              Featured
                            </span>
                          )}
                          {project.subtitle && (
                            <span className={`px-3 py-1 rounded-xl border text-xs font-mono font-semibold shadow-sm ${cardStyle.badgeBg}`}>
                              {project.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10">
                      {/* Tech Stack Chips */}
                      <div className="mb-6">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs font-mono font-medium text-cyan-300 shadow-sm hover:border-cyan-400 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Buttons (GitHub & Live Demo Simulator) */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          onClick={(e) => handleGithubClick(e, project.githubUrl, project.title)}
                          target={project.githubUrl.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-400/60 text-xs font-bold text-slate-200 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-950/40 active:scale-95"
                        >
                          <Github className="w-4 h-4 text-purple-400" />
                          <span>GitHub</span>
                        </a>

                        <button
                          onClick={(e) => handleDemoClick(e, project)}
                          className="flex-1 shimmer-btn inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-bold text-white transition-all duration-200 shadow-lg shadow-cyan-950/60 hover:shadow-cyan-500/30 active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
