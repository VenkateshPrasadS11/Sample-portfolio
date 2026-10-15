import React from 'react';
import { InteractiveCanvas } from './InteractiveCanvas';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-dots-pattern opacity-25" />

      {/* Radiant Multi-color Aurora Clouds */}
      <div className="absolute -top-32 left-1/4 w-[650px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-[130px] rounded-full animate-aurora-1" />
      
      <div className="absolute top-1/4 -right-28 w-[550px] h-[550px] bg-gradient-to-bl from-purple-600/20 via-indigo-600/15 to-transparent blur-[140px] rounded-full animate-aurora-2" />
      
      <div className="absolute top-2/3 -left-36 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-teal-600/10 to-transparent blur-[130px] rounded-full animate-aurora-3" />
      
      <div className="absolute bottom-10 right-1/4 w-[700px] h-[400px] bg-gradient-to-t from-cyan-600/15 via-blue-500/10 to-transparent blur-[150px] rounded-full animate-aurora-1" />

      {/* Interactive Constellation & Particle Canvas */}
      <InteractiveCanvas />

      {/* Floating Constellation Stars / Tech Nodes */}
      <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-[35%] right-[15%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[65%] left-[18%] w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-ping" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[80%] right-[12%] w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8] animate-pulse" style={{ animationDuration: '3.5s' }} />
      <div className="absolute top-[48%] left-[82%] w-1.5 h-1.5 rounded-full bg-violet-300 shadow-[0_0_8px_#c084fc] animate-ping" style={{ animationDuration: '4.2s' }} />
    </div>
  );
};
