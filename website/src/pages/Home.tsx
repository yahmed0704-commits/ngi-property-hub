import { Link } from 'react-router-dom';

const stats = [
  { num: '12+', label: 'Properties Transformed' },
  { num: '$5M+', label: 'Portfolio Value' },
  { num: '3', label: 'Active Projects' },
  { num: '100%', label: 'Quality Commitment' },
];

const services = [
  { icon: '🏠', title: 'Fix & Flip', desc: 'Strategic property acquisitions, full renovations, and profitable resale across New Jersey markets.' },
  { icon: '🏢', title: 'Rental Management', desc: 'End-to-end rental management for residential and multi-family properties.' },
  { icon: '🔨', title: 'Renovation & Construction', desc: 'Expert renovation coordination delivering quality craftsmanship on time and on budget.' },
  { icon: '📈', title: 'Real Estate Investment', desc: 'Creating high-yield investment opportunities for partners and stakeholders.' },
  { icon: '🏗️', title: 'Property Development', desc: 'Strategic development from land to livable — adding lasting value to communities.' },
  { icon: '🤝', title: 'Investor Partnerships', desc: 'Joint ventures and partnership structures built for mutual long-term growth.' },
];

const projects = [
  { name: 'Maple St.', location: 'Maplewood, NJ', status: 'Active Renovation', type: 'Fix & Flip', gold: true },
  { name: 'Willow Dr.', location: 'South Orange, NJ', status: 'Active', type: 'Rental Property', gold: true },
  { name: 'Riverside Ct.', location: 'Bloomfield, NJ', status: 'Rented', type: 'Multi-Family', gold: false },
];

const why = [
  { icon: '⭐', title: 'Quality First', desc: 'Every project is executed with meticulous attention to detail and craftsmanship.' },
  { icon: '🛡️', title: 'Trusted & Reliable', desc: 'Years of experience and a proven track record across New Jersey real estate.' },
  { icon: '💡', title: 'Smart Investment', desc: 'Data-driven decisions that maximize ROI for all stakeholders and partners.' },
  { icon: '🌱', title: 'Community Focused', desc: 'We build neighborhoods, not just properties — committed to local growth.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#080f18' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,145,42,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.8) 0%, transparent 70%)' }} />
        </div>

        <div className="container-site relative w-full pt-24 pb-16 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ border: '1px solid rgba(201,145,42,0.3)', background: 'rgba(201,145,42,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9912A' }} />
                <span className="text-xs font-semibold tracking-widest" style={{ color: '#C9912A' }}>NEW YORK'S PREMIER REAL ESTATE FIRM</span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
                We Believe In
              </h1>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6 text-gradient">
                Quality.
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Nexus Growth Inc. is a premier real estate investment and development company — transforming properties, building communities, and delivering results across New York and New Jersey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-gold text-sm">View Our Projects →</Link>
                <Link to="/rentals" className="btn-outline text-sm">Available Rentals</Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', height: 420, border: '1px solid rgba(201,145,42,0.2)' }}>
                <div className="h-full flex items-center justify-center flex-col gap-4">
                  <img src={`${import.meta.env.BASE_URL}nexus-logo.png`} alt="Nexus Growth Inc." className="h-32 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                  <div className="text-center mt-2">
                    <div className="text-sm font-semibold" style={{ color: '#C9912A' }}>Active Renovation</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Maple St. · Maplewood, NJ</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4" style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)', boxShadow: '0 20px 40px rgba(201,145,42,0.3)' }}>
                <div className="font-black text-2xl" style={{ color: '#080f18' }}>12+</div>
                <div className="font-semibold text-xs" style={{ color: '#080f18' }}>Properties Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#111e2c', borderTop: '1px solid rgba(201,145,42,0.1)', borderBottom: '1px solid rgba(201,145,42,0.1)' }}>
        <div className="container-site py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-black text-3xl md:text-4xl" style={{ color: '#C9912A' }}>{num}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-label">WHAT WE DO</div>
            <h2 className="section-title">Our Services</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>From strategic acquisitions to full-service property management — we deliver end-to-end real estate excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark group cursor-pointer">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white transition-colors group-hover:text-[#C9912A]">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" style={{ background: '#1B2B4B' }}>
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-label">PORTFOLIO</div>
              <h2 className="section-title mb-0">Current Projects</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold transition-colors" style={{ color: '#C9912A' }}>View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(({ name, location, status, type, gold }) => (
              <div key={name} className="rounded-2xl overflow-hidden transition-all group" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                <div className="h-44 flex items-center justify-center" style={{ background: 'rgba(201,145,42,0.08)' }}>
                  <span className="text-5xl">🏠</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-white">{name}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={gold ? { background: 'rgba(201,145,42,0.1)', color: '#C9912A' } : { background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>{status}</span>
                  </div>
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{location}</div>
                  <div className="text-xs font-semibold mt-2" style={{ color: '#C9912A' }}>{type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">WHY NGI</div>
              <h2 className="section-title">Built on Trust,<br />Driven by Quality</h2>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>We bring decades of combined expertise to every project. Our commitment to quality and integrity is not just a promise — it's our track record.</p>
              <Link to="/about" className="btn-gold text-sm">Learn Our Story →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {why.map(({ icon, title, desc }) => (
                <div key={title} className="card-dark">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h4 className="font-semibold mb-1 text-sm text-white">{title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#1B2B4B', borderTop: '1px solid rgba(201,145,42,0.1)' }}>
        <div className="container-site text-center">
          <div className="max-w-2xl mx-auto">
            <div className="section-label">GET STARTED</div>
            <h2 className="text-white text-3xl md:text-4xl font-black mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Whether you're an investor, property owner, or future tenant — Nexus Growth Inc. is ready to build with you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">Contact Us Today</Link>
              <Link to="/investor" className="btn-outline">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
