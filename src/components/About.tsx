import React from 'react';
import { User, Sparkles, BrainCircuit, Code, Database, Compass, CheckCircle2, Award, Terminal, Zap } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';

const interestDetails: Record<string, { icon: React.ReactNode; color: string; border: string; glow: string }> = {
  'Artificial Intelligence': { 
    icon: <BrainCircuit className="w-4 h-4 text-cyan-400" />, 
    color: 'hover:text-cyan-300 hover:bg-cyan-950/40', 
    border: 'hover:border-cyan-400/60',
    glow: 'hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]'
  },
  'Data Science': { 
    icon: <Database className="w-4 h-4 text-teal-400" />, 
    color: 'hover:text-teal-300 hover:bg-teal-950/40', 
    border: 'hover:border-teal-400/60',
    glow: 'hover:shadow-[0_0_15px_rgba(20,184,166,0.25)]'
  },
  'Programming': { 
    icon: <Code className="w-4 h-4 text-blue-400" />, 
    color: 'hover:text-blue-300 hover:bg-blue-950/40', 
    border: 'hover:border-blue-400/60',
    glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]'
  },
  'Software Development': { 
    icon: <Terminal className="w-4 h-4 text-indigo-400" />, 
    color: 'hover:text-indigo-300 hover:bg-indigo-950/40', 
    border: 'hover:border-indigo-400/60',
    glow: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]'
  },
  'Problem Solving': { 
    icon: <Compass className="w-4 h-4 text-emerald-400" />, 
    color: 'hover:text-emerald-300 hover:bg-emerald-950/40', 
    border: 'hover:border-emerald-400/60',
    glow: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]'
  },
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Glowing Accent */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3.5 shadow-md shadow-cyan-950/50">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>Profile &amp; Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              About <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
          </div>
        </ScrollReveal>

        {/* Content Grid: Bio & Modern Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Text & Interests with 3D Tilt */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-right" delay={200} className="h-full">
              <TiltCard className="h-full" maxTilt={6}>
                <div className="h-full flex flex-col justify-between glass-card rounded-2xl p-7 sm:p-9 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                  {/* Top ambient glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                      <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
                      <span>Passionate Computer Science Student</span>
                    </h3>
                    
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                      {portfolioData.personal.about}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3.5 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        Key Areas of Interest
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {portfolioData.personal.interests.map((interest) => {
                          const details = interestDetails[interest] || {
                            icon: <CheckCircle2 className="w-4 h-4 text-cyan-400" />,
                            color: 'hover:text-cyan-300 hover:bg-cyan-950/40',
                            border: 'hover:border-cyan-400/60',
                            glow: 'hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                          };

                          return (
                            <div
                              key={interest}
                              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/85 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md ${details.color} ${details.border} ${details.glow}`}
                            >
                              {details.icon}
                              <span>{interest}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-9 pt-6 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                      </span>
                      <span className="text-slate-200 font-medium">Status: Available for Internships &amp; Projects</span>
                    </span>
                    <span className="text-cyan-400 font-semibold">Specialization: AI &amp; Data Science</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Modern Tech Profile Card with 3D Tilt & Radar Aura */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left" delay={300} className="h-full">
              <TiltCard className="h-full" maxTilt={7}>
                <div className="h-full glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/60 transition-all duration-300">
                  
                  {/* Top decorative badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold">2nd Year BSc Student</span>
                    </div>
                    <Award className="w-5 h-5 text-cyan-400 animate-bounce" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Profile Graphic with Radar Aura */}
                  <div className="flex flex-col items-center text-center my-3">
                    <div className="relative mb-5">
                      {/* Rotating Outer Radar Ring */}
                      <div className="absolute -inset-2.5 rounded-3xl border border-dashed border-cyan-400/40 animate-radar pointer-events-none" />
                      
                      {/* Glowing Core Box */}
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 p-[2px] shadow-xl shadow-cyan-500/30 group-hover:shadow-cyan-400/60 transition-shadow">
                        <div className="w-full h-full bg-[#070c18] rounded-2xl flex flex-col items-center justify-center p-3 text-cyan-400">
                          <BrainCircuit className="w-11 h-11 text-cyan-400 animate-pulse" style={{ animationDuration: '3s' }} />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-2 border-[#070c18] shadow-[0_0_8px_#10b981]" title="Active Student" />
                    </div>

                    <h4 className="text-2xl font-black text-white tracking-tight">
                      {portfolioData.personal.name}
                    </h4>
                    <p className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                      BSc Computer Science (2nd Year)
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Artificial Intelligence &amp; Data Science
                    </p>
                  </div>

                  {/* Quick Meta List */}
                  <div className="space-y-2.5 bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-xs font-mono shadow-inner">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Current Year</span>
                      <span className="text-emerald-300 font-bold">{portfolioData.personal.year || '2nd Year'}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Specialization</span>
                      <span className="text-cyan-300 font-semibold">AI &amp; Data Science</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Degree</span>
                      <span className="text-slate-100 font-medium">BSc Computer Science</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Location</span>
                      <span className="text-slate-200 font-medium">{portfolioData.personal.locationPlaceholder}</span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
