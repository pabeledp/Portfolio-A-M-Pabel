import React, { useState } from 'react';
import { personalProfile } from '../../data/personalData';
import { Phone, Mail, Send, CheckCircle2, MapPin, Loader2, Sparkles } from 'lucide-react';

export default function CleanContact({ isRevealed = true }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '3D Motion Graphics', message: '' });

  const serviceOptions = [
    { id: '3D Motion Graphics', label: '3D Motion Graphics' },
    { id: 'Commercial Video Editing', label: 'Commercial Video Editing' },
    { id: 'Graphic Design & Branding', label: 'Graphic Design & Branding' },
    { id: 'Vibe Coding Web App', label: 'Vibe Coding Web App' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = `📌 [Requested Service: ${formData.service}]\n\n${formData.message}`;

    const payload = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      Subject: `New Inquiry: ${formData.service} - ${formData.name}`,
      subject: `New Inquiry: ${formData.service} - ${formData.name}`,
      message: formattedMessage
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
      
      <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800 p-6 md:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Information & Live Status Indicator */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for New Projects</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight font-['Creato_Display',sans-serif]">
                Let's Discuss Your <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Next Big Project
                </span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Have a commercial project, motion animation, or web application in mind? Send a direct message or connect through WhatsApp & Email.
            </p>

            {/* Streamlined Interactive Contact Info Blocks */}
            <div className="space-y-3 pt-2">
              
              <a
                href="https://wa.me/8801615288259"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 group shadow-lg"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">WhatsApp & Direct Call</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${personalProfile.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 group shadow-lg"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Inquiry</div>
                  <div className="text-sm font-bold text-white font-mono">{personalProfile.contact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-lg">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Studio Location</div>
                  <div className="text-sm font-bold text-white">{personalProfile.location}</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Eye-Catching Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-6 shadow-xl backdrop-blur-md">
              
              <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 font-light">Get a prompt response within 2-4 hours</p>
                </div>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-4 animate-fade-in shadow-2xl">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you for reaching out. A M Pabel has received your message and will contact you shortly!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-cyan-400 font-mono text-xs font-semibold hover:bg-slate-800 transition-colors border border-slate-800 cursor-pointer shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Interactive Service Selector Pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 block font-medium">Select Service Needed</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.service === srv.id;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: srv.id })}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-500/15 border-cyan-500/60 text-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.15)]'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                            }`}
                          >
                            <span className="truncate">{srv.label}</span>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 ml-1.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5 font-medium">Message / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project goals, scope, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-current" />
                        <span>Send Direct Message</span>
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
