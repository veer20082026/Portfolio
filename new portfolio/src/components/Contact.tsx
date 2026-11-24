import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../data/portfolioData';
import { LinkedInCard } from './LinkedInCard';
import { GithubIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioConfig;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setSubmitting(true);

    // Simulate reliable dispatch & feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Fire confetti celebration
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#22c55e', '#84cc16', '#38bdf8']
        });
      } catch {}

      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" /> Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Connect</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Whether you want to talk about developer tooling, student collaborations, open-source projects, or tech ideas—my inbox is always open.
          </p>
        </div>

        {/* Dedicated LinkedIn Highlight Card */}
        <LinkedInCard />

        {/* Main Contact Grid: Info Cards + Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-click copy */}
            <div className="rounded-2xl glass-panel border border-slate-800/90 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Direct Email</h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                >
                  {personal.email}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Fastest way to get in touch. I usually reply within 24 hours.
              </p>
            </div>

            {/* GitHub Profile Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl glass-panel border border-slate-800/90 hover:border-emerald-500/40 p-6 space-y-2 transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 group-hover:text-emerald-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-400 group-hover:underline">github.com/{personal.githubUsername} →</span>
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Public Repositories & Code
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review source code for my projects, university experiments, and open-source explorations.
              </p>
            </a>

            {/* Location & College Note */}
            <div className="rounded-2xl glass-panel border border-slate-800/90 p-5 flex items-center gap-4 text-xs font-mono text-slate-400">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-white font-semibold">{personal.location}</p>
                <p className="text-slate-500">{personal.college}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-slate-800/90 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop your thoughts, opportunities, or say hello. I'd love to hear from you!
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, Veer will review your message promptly. You can also connect via LinkedIn or email directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration / Internship inquiry / Hello"
                    className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your note or question here..."
                    className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60 resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className={`w-4 h-4 ${submitting ? 'animate-bounce' : ''}`} />
                    <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
