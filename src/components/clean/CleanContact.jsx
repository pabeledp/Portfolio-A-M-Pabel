import React, { useState } from 'react';
import { personalProfile } from '../../data/personalData';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, MapPin, Loader2 } from 'lucide-react';

export default function CleanContact({ isRevealed = true }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '3D Motion Graphics', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwuLfogMSSmtUKHcaUMqG5zVy--4CQB--FXVb8ejcEVueDuOay9lPRnf5LCC8xPuGL5/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      setFormSubmitted(true);
      setFormData({ name: '', email: '', service: '3D Motion Graphics', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', service: '3D Motion Graphics', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 transition-all duration-1000 ease-out transform ${
        isRevealed 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
    >
      
      <div className="relative rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 md:p-12 overflow-hidden shadow-[0_0_40px_rgba(0,243,255,0.1)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono font-medium">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-white">
              Let's Discuss Your <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Next Big Project
              </span>
            </h2>

            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Available for freelance projects, commercial video edits, 3D motion graphics, brand identity systems, and vibe-coded web applications.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              
              <a
                href="https://wa.me/8801615288259"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:translate-x-1 group shadow-sm"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct WhatsApp & Mobile</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${personalProfile.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:translate-x-1 group shadow-sm"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-bold text-white">{personalProfile.location}</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-sm">
              
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white">Send Pabel a Direct Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below to get in touch instantly</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Thank You!</h4>
                  <p className="text-sm text-slate-300">
                    Your message has been sent successfully. A M Pabel will get back to you shortly!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-cyan-300 font-mono text-xs hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 text-sm focus:border-cyan-500 focus:outline-none font-mono"
                    >
                      <option value="3D Motion Graphics">3D Motion Graphics & Animation</option>
                      <option value="Commercial Video Editing">Commercial Video Editing & VFX</option>
                      <option value="Graphic Design">Graphic Design & Brand Identity</option>
                      <option value="Vibe Coding Web App">Vibe Coding Web Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-current" />
                        <span>Send Direct Message to Pabel</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
