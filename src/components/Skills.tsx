import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Globe2, 
  Wrench, 
  Terminal, 
  Cpu, 
  FileCode2, 
  GitBranch, 
  Layers,
  Sparkles,
  Blocks
} from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';

// Category theme styling
const categoryStyles: Record<string, { icon: React.ReactNode; border: string; bgGlow: string; badgeColor: string; barColor: string }> = {
  Programming: {
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    border: 'group-hover:border-amber-500/50',
    bgGlow: 'from-amber-500/10 via-orange-500/5 to-transparent',
    badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
    barColor: 'from-amber-400 to-orange-500',
  },
  'AI & Data Science': {
    icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
    border: 'group-hover:border-cyan-500/50',
    bgGlow: 'from-cyan-500/10 via-teal-500/5 to-transparent',
    badgeColor: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
    barColor: 'from-cyan-400 to-teal-400',
  },
  'Web Development': {
    icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
    border: 'group-hover:border-indigo-500/50',
    bgGlow: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    badgeColor: 'text-indigo-300 bg-indigo-950/40 border-indigo-500/30',
    barColor: 'from-indigo-400 to-purple-500',
  },
  Tools: {
    icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    border: 'group-hover:border-emerald-500/50',
    bgGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    badgeColor: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
    barColor: 'from-emerald-400 to-teal-400',
  }
};

const skillLevels: Record<string, number> = {
  'Python': 90,
  'Java': 82,
  'C': 80,
  'Artificial Intelligence': 88,
  'Data Science': 85,
  'Machine Learning': 84,
  'HTML': 92,
  'CSS': 88,
  'JavaScript': 85,
  'Git': 86,
  'GitHub': 88,
  'VS Code': 92,
};

// Skill badge specific styles
const skillBadgeDetails: Record<string, { icon: React.ReactNode; bg: string; border: string; text: string; shadow: string }> = {
  'Python': { 
    icon: <Terminal className="w-4 h-4 text-yellow-400" />, 
    bg: 'hover:bg-yellow-950/30', 
    border: 'hover:border-yellow-400/60', 
    text: 'group-hover:text-yellow-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]'
  },
  'Java': { 
    icon: <FileCode2 className="w-4 h-4 text-orange-400" />, 
    bg: 'hover:bg-orange-950/30', 
    border: 'hover:border-orange-400/60', 
    text: 'group-hover:text-orange-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'
  },
  'C': { 
    icon: <Code2 className="w-4 h-4 text-blue-400" />, 
    bg: 'hover:bg-blue-950/30', 
    border: 'hover:border-blue-400/60', 
    text: 'group-hover:text-blue-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
  },
  
  'Artificial Intelligence': { 
    icon: <BrainCircuit className="w-4 h-4 text-cyan-400" />, 
    bg: 'hover:bg-cyan-950/30', 
    border: 'hover:border-cyan-400/60', 
    text: 'group-hover:text-cyan-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
  },
  'Data Science': { 
    icon: <Cpu className="w-4 h-4 text-teal-400" />, 
    bg: 'hover:bg-teal-950/30', 
    border: 'hover:border-teal-400/60', 
    text: 'group-hover:text-teal-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]'
  },
  'Machine Learning': { 
    icon: <Layers className="w-4 h-4 text-sky-400" />, 
    bg: 'hover:bg-sky-950/30', 
    border: 'hover:border-sky-400/60', 
    text: 'group-hover:text-sky-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
  },
  
  'HTML': { 
    icon: <Globe2 className="w-4 h-4 text-indigo-400" />, 
    bg: 'hover:bg-indigo-950/30', 
    border: 'hover:border-indigo-400/60', 
    text: 'group-hover:text-indigo-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
  },
  'CSS': { 
    icon: <Layers className="w-4 h-4 text-blue-400" />, 
    bg: 'hover:bg-blue-950/30', 
    border: 'hover:border-blue-400/60', 
    text: 'group-hover:text-blue-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
  },
  'JavaScript': { 
    icon: <FileCode2 className="w-4 h-4 text-yellow-300" />, 
    bg: 'hover:bg-yellow-950/30', 
    border: 'hover:border-yellow-400/60', 
    text: 'group-hover:text-yellow-200',
    shadow: 'hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]'
  },

  'Git': { 
    icon: <GitBranch className="w-4 h-4 text-emerald-400" />, 
    bg: 'hover:bg-emerald-950/30', 
    border: 'hover:border-emerald-400/60', 
    text: 'group-hover:text-emerald-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]'
  },
  'GitHub': { 
    icon: <GitBranch className="w-4 h-4 text-purple-400" />, 
    bg: 'hover:bg-purple-950/30', 
    border: 'hover:border-purple-400/60', 
    text: 'group-hover:text-purple-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
  },
  'VS Code': { 
    icon: <Terminal className="w-4 h-4 text-blue-400" />, 
    bg: 'hover:bg-blue-950/30', 
    border: 'hover:border-blue-400/60', 
    text: 'group-hover:text-blue-300',
    shadow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
  },
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skills.map((s) => s.category)];

  const filteredCategories = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with Glowing Gradient */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3.5 shadow-md shadow-cyan-950/50">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              My <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
          </div>
        </ScrollReveal>

        {/* Interactive Category Filter Pills */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Categories Grid with 3D Tilt and Animated Progress Meters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredCategories.map((category, idx) => {
            const style = categoryStyles[category.category] || categoryStyles['Programming'];

            return (
              <ScrollReveal key={category.category} animation="fade-up" delay={idx * 150}>
                <TiltCard maxTilt={5} className="h-full">
                  <div
                    className={`h-full glass-card rounded-2xl p-7 sm:p-8 relative overflow-hidden group transition-all duration-300 shadow-xl ${style.border}`}
                  >
                    {/* Dynamic background gradient glow on hover */}
                    <div className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${style.bgGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-7 relative z-10">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-slate-900/95 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                          {style.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {category.category}
                          </h3>
                          <span className="text-xs text-slate-400 font-mono">
                            {category.skills.length} core competencies
                          </span>
                        </div>
                      </div>

                      <div className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-medium ${style.badgeColor}`}>
                        Verified
                      </div>
                    </div>

                    {/* Skills Item Cards Grid with Proficiency Progress */}
                    <div className="space-y-3.5 relative z-10">
                      {category.skills.map((skill) => {
                        const details = skillBadgeDetails[skill] || {
                          icon: <Blocks className="w-4 h-4 text-cyan-400" />,
                          bg: 'hover:bg-cyan-950/30',
                          border: 'hover:border-cyan-400/60',
                          text: 'group-hover:text-cyan-300',
                          shadow: 'hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                        };

                        const level = skillLevels[skill] || 85;

                        return (
                          <div
                            key={skill}
                            className={`p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 transition-all duration-200 ${details.bg} ${details.border} ${details.shadow} hover:translate-x-1 shadow-sm`}
                          >
                            <div className="flex items-center justify-between text-xs font-semibold mb-2">
                              <div className="flex items-center gap-2">
                                <span className="shrink-0">{details.icon}</span>
                                <span className={`tracking-tight ${details.text} transition-colors`}>
                                  {skill}
                                </span>
                              </div>
                              <span className="font-mono text-cyan-400">{level}%</span>
                            </div>

                            {/* Animated Neon Progress Bar */}
                            <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${style.barColor} transition-all duration-1000 ease-out`}
                                style={{ width: `${level}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
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
