import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  Award, 
  Sparkles
} from 'lucide-react';
import { portfolioData, EducationItem } from '../portfolioData';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading with Glowing Accent */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3.5 shadow-md shadow-cyan-950/50">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
          </div>
        </ScrollReveal>

        {/* Timeline Container with Glowing Laser Beam */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {/* Animated Laser Pulse traveling down the timeline line */}
          <div
            className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
            style={{
              animation: 'laser-pulse 4s ease-in-out infinite',
              boxShadow: '0 0 12px #00f0ff',
            }}
          />

          {portfolioData.education.map((item: EducationItem, idx: number) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 200}>
              <div className="relative group">
                
                {/* Glowing Timeline Marker Node with Double Halo */}
                <div className="absolute -left-[33px] sm:-left-[49px] top-4 w-7 h-7 rounded-full bg-[#040711] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_16px_#00f0ff] group-hover:scale-125 transition-transform duration-300 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_8px_#00f0ff]" />
                </div>

                {/* Education Glass Card with 3D Tilt */}
                <TiltCard maxTilt={5}>
                  <div className="glass-card rounded-2xl p-7 sm:p-9 relative overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/60 shadow-xl">
                    {/* Multi-color ambient glow on hover */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 relative z-10">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                            {item.degree}
                          </h3>
                          {item.currentYear && (
                            <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse" style={{ animationDuration: '3s' }}>
                              {item.currentYear}
                            </span>
                          )}
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-cyan-400 font-mono mt-1.5">
                          <Sparkles className="w-4 h-4" />
                          <span>{item.field}</span>
                        </div>
                      </div>

                      {/* Year / Period Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-200 shrink-0 self-start shadow-md">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period.start} – {item.period.end}</span>
                      </div>
                    </div>

                    {/* Institution & Location details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-4 border-y border-slate-800/90 my-5 text-xs font-mono relative z-10">
                      <div className="flex items-center gap-2.5 text-slate-200">
                        <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Institution</span>
                          <span className="font-bold text-white text-xs sm:text-sm">{item.institution}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-200">
                        <div className="w-8 h-8 rounded-lg bg-teal-950/60 border border-teal-500/30 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                          <MapPin className="w-4 h-4 text-teal-400" />
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Location</span>
                          <span className="font-semibold text-slate-200 text-xs sm:text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Score / CGPA Placeholder with Accent */}
                    {item.score && (
                      <div className="flex items-center gap-2.5 text-xs font-mono bg-gradient-to-r from-cyan-950/50 via-teal-950/30 to-transparent border border-cyan-500/30 rounded-xl px-4 py-3 mb-4 text-cyan-200 shadow-sm relative z-10">
                        <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-slate-400">Academic Evaluation:</span>
                        <span className="font-bold text-cyan-300">{item.score}</span>
                      </div>
                    )}

                    {/* Description */}
                    {item.description && (
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10">
                        {item.description}
                      </p>
                    )}

                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
};
