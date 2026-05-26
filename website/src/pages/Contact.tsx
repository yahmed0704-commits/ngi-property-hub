import { useState } from 'react';
import { Link } from 'react-router-dom';

const topics = [
  'General Inquiry',
  'Available Rentals',
  'Investment Partnership',
  'Property Acquisition',
  'Renovation Services',
  'Other',
];

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
const FORM_READY = WEB3FORMS_KEY.length > 0 && WEB3FORMS_KEY !== 'PASTE_ACCESS_KEY_HERE';

const contactItems = [
  { icon: '📍', label: 'Office', val: 'Vestal, New York 13850', sub: 'Serving the greater New York area', href: null },
  { icon: '📧', label: 'Email', val: 'admins@nexusgrowthinc.com', sub: 'We reply within 24 hours', href: 'mailto:admins@nexusgrowthinc.com' },
  { icon: '📞', label: 'Phone', val: '(212) 658-0007', sub: 'Mon–Fri, 9am–5pm ET', href: 'tel:+12126580007' },
  { icon: '💬', label: 'Response Time', val: 'Within 24 hours', sub: 'Typically faster for urgent matters', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORM_READY) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Contact Form Submission — ${form.topic}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', topic: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#080f18',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '12px 14px',
    color: 'white',
    fontSize: 14,
    outline: 'none',
    minHeight: '48px',
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">GET IN TOUCH</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 md:mb-4">Contact Us</h1>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Whether you're a prospective tenant, investor, or partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="section-label">REACH OUT</div>
              <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-5">We're Here to Help</h2>
              <p className="text-sm leading-relaxed mb-6 md:mb-7" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Have a question about our properties, services, or investment opportunities? Fill out the form or reach out directly — we respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactItems.map(({ icon, label, val, sub, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: 'rgba(201,145,42,0.1)' }}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold mb-0.5" style={{ color: '#C9912A' }}>{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-white"
                          style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                        >
                          {val}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-white" style={{ wordBreak: 'break-word' }}>{val}</div>
                      )}
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>QUICK LINKS</div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {[
                    { label: '→ Available Rentals', href: '/rentals' },
                    { label: '→ Investor Partnerships', href: '/investor' },
                    { label: '→ Current Projects', href: '/projects' },
                    { label: '→ FAQs', href: '/faq' },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      to={href}
                      className="text-sm transition-colors py-1"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'sent' ? (
                <div className="card-dark text-center py-12 md:py-14">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-bold text-xl mb-2 text-white">Message Sent!</h3>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-sm">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark space-y-4">
                  <h3 className="font-bold text-base md:text-lg mb-1 text-white">Send Us a Message</h3>

                  {!FORM_READY && (
                    <div
                      className="rounded-lg p-3 text-sm"
                      style={{ background: 'rgba(201,145,42,0.08)', border: '1px solid rgba(201,145,42,0.25)', color: '#C9912A' }}
                    >
                      <strong>Contact form coming soon.</strong>
                      <span> In the meantime, reach us at: </span>
                      <a
                        href="mailto:admins@nexusgrowthinc.com"
                        style={{ textDecoration: 'underline', wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                      >
                        admins@nexusgrowthinc.com
                      </a>
                      <span> or </span>
                      <a href="tel:+12126580007" style={{ textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                        (212) 658-0007
                      </a>.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-lg p-3 text-sm" style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#f87171' }}>
                      Something went wrong. Please try again or email{' '}
                      <a href="mailto:admins@nexusgrowthinc.com" style={{ textDecoration: 'underline', wordBreak: 'break-word' }}>
                        admins@nexusgrowthinc.com
                      </a>.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        style={inputStyle}
                        disabled={!FORM_READY}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        style={inputStyle}
                        disabled={!FORM_READY}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Phone (optional)</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(000) 000-0000"
                        style={inputStyle}
                        disabled={!FORM_READY}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Topic *</label>
                      <select
                        required
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        style={{ ...inputStyle, appearance: 'none' as const }}
                        disabled={!FORM_READY}
                      >
                        <option value="">Select a topic…</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      style={{ ...inputStyle, resize: 'none', minHeight: 'auto' }}
                      disabled={!FORM_READY}
                    />
                  </div>

                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    * Required fields. Your information is kept private and never shared.
                  </div>

                  <button
                    type="submit"
                    disabled={!FORM_READY || status === 'sending'}
                    className="btn-gold w-full justify-center"
                    style={{ opacity: (!FORM_READY || status === 'sending') ? 0.4 : 1, cursor: !FORM_READY ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'sending' ? 'Sending…' : FORM_READY ? 'Send Message →' : 'Form Not Yet Configured'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
