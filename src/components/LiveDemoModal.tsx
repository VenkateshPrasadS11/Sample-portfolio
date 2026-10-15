import React, { useState } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';

interface LiveDemoModalProps {
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  projectTitle,
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: `Hello! I am ${projectTitle === 'AI Assistant Application' ? 'Buddy AI' : 'Interactive Project Simulation'}. How can I assist you with your exploration today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'What features do you have?',
    'Explain Data Science in 1 sentence',
    'Why choose Python for AI?',
  ];

  const handleSend = (textToSend?: string) => {
    const msg = (textToSend || input).trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { sender: 'user', text: msg }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      if (msg.toLowerCase().includes('feature')) {
        reply = "I'm designed to offer intuitive responses, automate repetitive queries, and help users explore AI and data structures easily.";
      } else if (msg.toLowerCase().includes('data science')) {
        reply = "Data Science is the art of extracting actionable knowledge and insights from raw structured and unstructured data using algorithms and statistics.";
      } else if (msg.toLowerCase().includes('python')) {
        reply = "Python has a clean, readable syntax paired with world-class libraries like NumPy, Pandas, Scikit-learn, and PyTorch, making it the top choice for AI development.";
      } else {
        reply = `That's a great question about "${msg}"! As an AI assistant, I process queries by understanding context, evaluating logic, and providing clear, structured answers.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0a0f1d] border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 overflow-hidden flex flex-col h-[520px]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0e1629] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                {projectTitle}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                  Live Interactive Demo
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">Simulated runtime by Venkatesh Prasad</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 font-sans text-xs sm:text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Buddy AI is generating response...</span>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-4 py-2 bg-[#090d19] border-t border-slate-800/60 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-mono shrink-0">Try:</span>
          {quickPrompts.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700/60 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-[#0d1424] border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a prompt for the interactive assistant..."
            className="flex-1 bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/30 transition-all disabled:opacity-50"
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
