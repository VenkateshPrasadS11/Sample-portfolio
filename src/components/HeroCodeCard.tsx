import React, { useState } from 'react';
import { Play, Check, Copy, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const HeroCodeCard: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [outputVisible, setOutputVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `class Developer:
    def __init__(self):
        self.name = "${portfolioData.personal.name}"
        self.focus = ["Artificial Intelligence", "Data Science"]
        self.skills = ["Python", "Java", "C", "Machine Learning"]
        self.status = "Open to Innovation & Opportunities"

    def execute_mission(self):
        return "Building intelligent software that solves real-world challenges!"

venkatesh = Developer()
print(venkatesh.execute_mission())`;

  const handleRun = () => {
    setIsRunning(true);
    setOutputVisible(false);
    setTimeout(() => {
      setIsRunning(false);
      setOutputVisible(true);
    }, 650);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-12 text-left group">
      {/* Decorative Glow Halo behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-purple-600/25 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

      {/* Main Terminal Box */}
      <div className="rounded-2xl bg-[#090d19]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-950/70 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              venkatesh_profile.py
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 transition-colors flex items-center gap-1"
              title="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-3 py-1 rounded-md text-xs font-mono font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
            >
              <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          </div>
        </div>

        {/* Code View Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
          <div>
            <span className="text-purple-400">class</span>{' '}
            <span className="text-yellow-300">Developer</span>
            <span className="text-slate-400">:</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">def</span>{' '}
            <span className="text-blue-400">__init__</span>
            <span className="text-slate-400">(</span>
            <span className="text-orange-300">self</span>
            <span className="text-slate-400">):</span>
          </div>
          <div className="pl-8">
            <span className="text-orange-300">self</span>.
            <span className="text-cyan-300">name</span> ={' '}
            <span className="text-emerald-300">"{portfolioData.personal.name}"</span>
          </div>
          <div className="pl-8">
            <span className="text-orange-300">self</span>.
            <span className="text-cyan-300">focus</span> ={' '}
            <span className="text-slate-400">[</span>
            <span className="text-emerald-300">"Artificial Intelligence"</span>,{' '}
            <span className="text-emerald-300">"Data Science"</span>
            <span className="text-slate-400">]</span>
          </div>
          <div className="pl-8">
            <span className="text-orange-300">self</span>.
            <span className="text-cyan-300">skills</span> ={' '}
            <span className="text-slate-400">[</span>
            <span className="text-emerald-300">"Python"</span>,{' '}
            <span className="text-emerald-300">"Java"</span>,{' '}
            <span className="text-emerald-300">"C"</span>
            <span className="text-slate-400">]</span>
          </div>
          <div className="pl-8">
            <span className="text-orange-300">self</span>.
            <span className="text-cyan-300">status</span> ={' '}
            <span className="text-emerald-300">"Open to Opportunities &amp; Projects"</span>
          </div>
          <div className="pt-2 pl-4">
            <span className="text-purple-400">def</span>{' '}
            <span className="text-blue-400">execute_mission</span>
            <span className="text-slate-400">(</span>
            <span className="text-orange-300">self</span>
            <span className="text-slate-400">):</span>
          </div>
          <div className="pl-8">
            <span className="text-purple-400">return</span>{' '}
            <span className="text-emerald-300">
              "Building intelligent solutions with code &amp; AI!"
            </span>
          </div>
        </div>

        {/* Console Execution Output */}
        {outputVisible && (
          <div className="px-4 py-3 bg-[#060a14] border-t border-cyan-500/20 font-mono text-xs animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex items-center gap-1.5 text-cyan-400 mb-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Console Output:</span>
            </div>
            <p className="text-emerald-300 pl-4 border-l-2 border-emerald-400">
              ➜ "Building intelligent solutions with code &amp; AI!"
            </p>
          </div>
        )}
      </div>

      {/* Floating Micro-tech Badges with Subtle Floats */}
      <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/90 border border-purple-500/50 text-purple-300 text-xs font-mono shadow-lg shadow-purple-950/60 animate-bounce" style={{ animationDuration: '4s' }}>
        <Cpu className="w-3 h-3 text-purple-400" />
        <span>AI / ML Engine</span>
      </div>

      <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-950/60 animate-bounce" style={{ animationDuration: '3.2s' }}>
        <Layers className="w-3 h-3 text-cyan-400" />
        <span>Clean Architecture</span>
      </div>
    </div>
  );
};
