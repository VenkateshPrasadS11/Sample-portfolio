import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Phone,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';
import { triggerConfetti } from './Confetti';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      triggerConfetti();
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const copyPhoneToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading with Glowing Accent */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3.5 shadow-md shadow-cyan-950/50">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Connect &amp; Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Get In <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full mt-4 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mt-5">
              Have a project idea, opportunity, or just want to connect? Feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Multi-color Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card - Cyan Accent */}
            <ScrollReveal animation="fade-right" delay={150}>
              <TiltCard maxTilt={5}>
                <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-950/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Email Address
                        </h3>
                        <a
                          href={`mailto:${portfolioData.socialLinks.email}`}
                          className="text-sm sm:text-base font-bold text-white font-mono mt-0.5 break-all hover:text-cyan-300 transition-colors block"
                        >
                          {portfolioData.socialLinks.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(portfolioData.socialLinks.email)}
                      className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all shrink-0 ml-2 shadow-sm"
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Phone Card - Emerald Accent */}
            {portfolioData.socialLinks.phone && (
              <ScrollReveal animation="fade-right" delay={250}>
                <TiltCard maxTilt={5}>
                  <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-950/50 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                            Phone Number
                          </h3>
                          <a
                            href={`tel:${portfolioData.socialLinks.rawPhone || portfolioData.socialLinks.phone}`}
                            className="text-sm sm:text-base font-bold text-white font-mono mt-0.5 hover:text-emerald-300 transition-colors block"
                          >
                            {portfolioData.socialLinks.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <button
                          onClick={() => copyPhoneToClipboard(portfolioData.socialLinks.rawPhone || portfolioData.socialLinks.phone || '')}
                          className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 transition-all shadow-sm"
                          title="Copy Phone"
                          aria-label="Copy Phone"
                        >
                          {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <a
                          href={`tel:${portfolioData.socialLinks.rawPhone || portfolioData.socialLinks.phone}`}
                          className="p-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 hover:text-white transition-all shadow-sm"
                          title="Call Now"
                          aria-label="Call Now"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            )}

            {/* LinkedIn Card - Electric Blue Accent */}
            <ScrollReveal animation="fade-right" delay={350}>
              <TiltCard maxTilt={5}>
                <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-950/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          LinkedIn Network
                        </h3>
                        <a
                          href={portfolioData.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white font-mono mt-0.5 truncate block hover:text-blue-300 transition-colors"
                        >
                          linkedin.com/in/venkatesh-prasad-s
                        </a>
                      </div>
                    </div>

                    {portfolioData.socialLinks.linkedin.startsWith('http') && (
                      <a
                        href={portfolioData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-blue-300 transition-all shrink-0 ml-2 shadow-sm"
                        title="Open LinkedIn"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* GitHub Card - Purple Accent */}
            <ScrollReveal animation="fade-right" delay={450}>
              <TiltCard maxTilt={5}>
                <div className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-950/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Github className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          GitHub Repositories
                        </h3>
                        <a
                          href={portfolioData.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-white font-mono mt-0.5 truncate block hover:text-purple-300 transition-colors"
                        >
                          github.com/VenkateshPrasadS11
                        </a>
                      </div>
                    </div>

                    {portfolioData.socialLinks.github.startsWith('http') && (
                      <a
                        href={portfolioData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-purple-400 text-slate-300 hover:text-purple-300 transition-all shrink-0 ml-2 shadow-sm"
                        title="Open GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Form with Confetti Celebration */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="glass-card rounded-2xl p-7 sm:p-9 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Direct notification channel
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-12 px-6 text-center animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-[0_0_24px_rgba(16,185,129,0.5)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2 tracking-tight">
                      Message Sent Successfully! 🎉
                    </h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                      Thank you for reaching out! Your message has been received and I'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-900/90 border ${
                          errors.name ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all shadow-inner`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-900/90 border ${
                          errors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all shadow-inner`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your project idea, collaboration, or question here..."
                        className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-900/90 border ${
                          errors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-none shadow-inner`}
                      />
                      {errors.message && (
                        <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full shimmer-btn inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                    >
                      <Send className="w-4.5 h-4.5" />
                      <span>Send Message</span>
                    </button>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
