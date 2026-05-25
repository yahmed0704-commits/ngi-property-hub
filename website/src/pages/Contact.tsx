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

// Set your Web3Forms access key here: https://web3forms.com
// Leave empty to disable form submission until configured.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const FORM_READY = WEB3FORMS_KEY.length > 0 && WEB3FORMS_KEY !== 'PASTE_ACCESS_KEY_HERE';

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
    padding: '12px 16px',
    color: 'white',
    fontSize: 14,
    outline: 'none',
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Whether you're a prospective tenant, investor, or partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="section-label">REACH OUT</div>
              <h2 className="text-white text-2xl font-bold mb-6">We're Here to Help</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Have a question about our properties, services, or investment opportunities? Fill out the form or reach out directly — we respond within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'Office', val: 'Vestal, New York 13850', sub: 'Serving the greater NY/NJ area' },
                  { icon: '📧', label: 'Email', val: 'admins@nexusgrowthinc.com', sub: 'We reply within 24 hours' },
                  { icon: '📞', label: 'Phone', val: '(212) 658-0007', sub: 'Mon–Fri, 9am–5pm ET' },
                  { icon: '💬', label: 'Response Time', val: 'Within 24 hours', sub: 'Typically faster for urgent matters' },
                ].map(({ icon, label, val, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg" style={{ background: 'rgba(201,145,42,0.1)' }}>{icon}</div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: '#C9912A' }}>{label}</div>
                      <div className="text-sm font-medium text-white">{val}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>QUICK LINKS</div>
                <div className="flex flex-col gap-2">
                  <Link to="/rentals" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>→ Available Rentals</Link>
                  <Link to="/investor" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>→ Investor Partnerships</Link>
                  <Link to="/projects" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>→ Current Projects</Link>
                  <Link to="/faq" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>→ FAQs</Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {status === 'sent' ? (
                <div className="card-dark text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-bold text-xl mb-2 text-white">Message Sent!</h3>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-sm">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark space-y-5">
                  <h3 className="font-bold text-lg mb-2 text-white">Send Us a Message</h3>

                  {!FORM_READY && (
                    <div className="rounded-lg p-3 text-sm" style={{ background: 'rgba(201,145,42,0.08)', border: '1px solid rgba(201,145,42,0.25)', color: '#C9912A' }}>
                      <strong>Contact form coming soon.</strong> In the meantime, email us directly at{' '}
                      <a href="mailto:admins@nexusgrowthinc.com" style={{ textDecoration: 'underline' }}>admins@nexusgrowthinc.com</a>{' '}
                      or call <a href="tel:+12126580007" style={{ textDecoration: 'underline' }}>(212) 658-0007</a>.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-lg p-3 text-sm" style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#f87171' }}>
                      Something went wrong. Please try again or email us directly at admins@nexusgrowthinc.com.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Full Name *</label>
                      <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" style={inputStyle} disabled={!FORM_READY} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Email Address *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle} disabled={!FORM_READY} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Phone (optional)</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(000) 000-0000" style={inputStyle} disabled={!FORM_READY} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Topic *</label>
                      <select required value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} style={{ ...inputStyle, appearance: 'none' as const }} disabled={!FORM_READY}>
                        <option value="">Select a topic…</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help…" style={{ ...inputStyle, resize: 'none' }} disabled={!FORM_READY} />
                  </div>

                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    * Required fields. Your information is kept private and never shared.
                  </div>

                  <button
                    type="submit"
                    disabled={!FORM_READY || status === 'sending'}
                    className="btn-gold w-full text-center"
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
