import React from 'react';
import { ArrowUp, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#040711] py-12 px-4 sm:px-6 lg:px-8">
      {/* Top ambient glowing line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 shadow-[0_0_8px_#00f0ff]" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-[1px] shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070c18] rounded-xl flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs font-mono text-cyan-400">
              BSc Computer Science | AI &amp; Data Science
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-slate-400 font-mono text-center flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 text-slate-200 hover:text-cyan-300 text-xs font-mono font-semibold transition-all duration-300 shadow-md group"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-cyan-400" />
        </button>

      </div>
    </footer>
  );
};
