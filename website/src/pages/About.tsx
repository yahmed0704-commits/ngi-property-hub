import { Link } from 'react-router-dom';

const values = [
  { icon: '⭐', title: 'Quality', desc: 'We never cut corners. Every project is completed to the highest standard, from foundation to finish.' },
  { icon: '🛡️', title: 'Integrity', desc: 'Transparent communication and honest partnerships are the cornerstone of everything we do.' },
  { icon: '💡', title: 'Innovation', desc: 'We leverage modern tools, data, and strategies to stay ahead in the evolving real estate market.' },
  { icon: '🌱', title: 'Community', desc: 'We invest in neighborhoods — turning neglected properties into assets that uplift entire communities.' },
  { icon: '⚡', title: 'Excellence', desc: 'From acquisition to sale, we hold ourselves to the highest standard at every stage.' },
  { icon: '🤝', title: 'Partnership', desc: 'We grow by growing with our partners — investors, tenants, contractors, and neighbors.' },
];

const milestones = [
  { year: 'Founded', detail: 'Nexus Growth Inc. established with a mission to transform New York real estate.' },
  { year: 'Early Growth', detail: 'First successful fix & flip projects completed across Essex and Union counties.' },
  { year: 'Expansion', detail: 'Expanded into rental property management and multi-family investments.' },
  { year: 'Today', detail: '12+ properties transformed, $5M+ portfolio, and growing investor partnerships.' },
];

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR STORY</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">About Nexus Growth Inc.</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A New York real estate company built on the belief that quality work transforms not just properties — but communities.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="section-label">WHO WE ARE</div>
              <h2 className="section-title">Transforming Properties,<br />Building Legacies</h2>
              <div className="gold-divider" />
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Nexus Growth Inc. is a full-service real estate investment and development company based in New York. We specialize in fix-and-flip renovations, rental property management, and strategic real estate partnerships.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Founded with a simple but powerful belief — that quality work creates lasting value — we've grown from our first renovation project into a recognized force in the New York real estate market.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Today, we manage a diverse portfolio spanning active renovations, rental units, and investment partnerships — with a team dedicated to delivering results for every stakeholder.
              </p>
              <Link to="/contact" className="btn-gold text-sm">Get In Touch →</Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', height: 360, border: '1px solid rgba(201,145,42,0.2)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 45%, rgba(201,145,42,0.12) 0%, transparent 70%)' }} />
                <div className="h-full flex flex-col items-center justify-center gap-6 p-8 relative">
                  <img src={`${import.meta.env.BASE_URL}nexus-logo.png`} alt="NGI" className="w-4/5 max-w-xs h-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
                  <div className="w-16 h-px" style={{ background: 'rgba(201,145,42,0.4)' }} />
                  <p className="text-sm font-semibold tracking-widest text-center" style={{ color: '#C9912A' }}>WE BELIEVE IN QUALITY.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl px-5 py-4" style={{ background: '#C9912A' }}>
                <div className="font-black text-2xl" style={{ color: '#080f18' }}>NY</div>
                <div className="font-semibold text-xs" style={{ color: '#080f18' }}>Based & Operating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: '#111e2c' }}>
        <div className="container-site">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-label">OUR PRINCIPLES</div>
            <h2 className="section-title">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-label">OUR JOURNEY</div>
            <h2 className="section-title">Company Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map(({ year, detail }, i) => (
              <div key={year} className="flex gap-5 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#C9912A' }}>
                    <span className="text-xs font-bold" style={{ color: '#080f18' }}>{i + 1}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: 'rgba(201,145,42,0.2)' }} />}
                </div>
                <div className="pb-8 last:pb-0">
                  <div className="font-semibold text-sm mb-1" style={{ color: '#C9912A' }}>{year}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16" style={{ background: '#1B2B4B', borderTop: '1px solid rgba(201,145,42,0.1)', borderBottom: '1px solid rgba(201,145,42,0.1)' }}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['12+', 'Properties Transformed'], ['$5M+', 'Portfolio Value'], ['100%', 'Quality Rate'], ['NY', 'Based & Serving']].map(([n, l]) => (
              <div key={l}>
                <div className="font-black text-3xl md:text-4xl" style={{ color: '#C9912A' }}>{n}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 text-center" style={{ background: '#080f18' }}>
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-black mb-4">Ready to Work Together?</h2>
          <p className="mb-7" style={{ color: 'rgba(255,255,255,0.5)' }}>Let's discuss how Nexus Growth Inc. can help with your real estate goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-gold">Contact Us</Link>
            <Link to="/investor" className="btn-outline">Investment Opportunities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
