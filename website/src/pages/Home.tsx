import { Link } from 'react-router-dom';

const stats = [
  { num: '12+', label: 'Properties Transformed' },
  { num: '$5M+', label: 'Portfolio Value' },
  { num: '3', label: 'Active Projects' },
  { num: '100%', label: 'Quality Commitment' },
];

const services = [
  { icon: '🏠', title: 'Fix & Flip', desc: 'Strategic property acquisitions, full renovations, and profitable resale across New York markets.' },
  { icon: '🏢', title: 'Rental Management', desc: 'End-to-end rental management for residential and multi-family properties.' },
  { icon: '🔨', title: 'Renovation & Construction', desc: 'Expert renovation coordination delivering quality craftsmanship on time and on budget.' },
  { icon: '📈', title: 'Real Estate Investment', desc: 'Creating high-yield investment opportunities for partners and stakeholders.' },
  { icon: '🏗️', title: 'Property Development', desc: 'Strategic development from land to livable — adding lasting value to communities.' },
  { icon: '🤝', title: 'Investor Partnerships', desc: 'Joint ventures and partnership structures built for mutual long-term growth.' },
];

const projects = [
  { name: 'Maple St.', location: 'Maplewood, NY', status: 'Active Renovation', type: 'Fix & Flip', gold: true },
  { name: 'Willow Dr.', location: 'South Orange, NY', status: 'Active', type: 'Rental Property', gold: true },
  { name: 'Riverside Ct.', location: 'Bloomfield, NY', status: 'Rented', type: 'Multi-Family', gold: false },
];

const why = [
  { icon: '⭐', title: 'Quality First', desc: 'Every project is executed with meticulous attention to detail and craftsmanship.' },
  { icon: '🛡️', title: 'Trusted & Reliable', desc: 'Years of experience and a proven track record across New York real estate.' },
  { icon: '💡', title: 'Smart Investment', desc: 'Data-driven decisions that maximize ROI for all stakeholders and partners.' },
  { icon: '🌱', title: 'Community Focused', desc: 'We build neighborhoods, not just properties — committed to local growth.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero — top-aligned on mobile, centered on desktop */}
      <section
        className="relative flex items-start lg:items-center overflow-hidden lg:min-h-screen"
        style={{ background: '#080f18' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,145,42,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-0 w-56 md:w-72 h-56 md:h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.8) 0%, transparent 70%)' }} />
        </div>

        <div className="container-site relative w-full pt-20 pb-10 md:pt-24 lg:pt-28 xl:pt-32 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5" style={{ border: '1px solid rgba(201,145,42,0.3)', background: 'rgba(201,145,42,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9912A' }} />
                <span className="text-xs font-semibold tracking-wider leading-none" style={{ color: '#C9912A' }}>NEW YORK'S PREMIER REAL ESTATE FIRM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-2">
                We Believe In
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-5 text-gradient">
                Quality.
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Nexus Growth Inc. is a premier real estate investment and development company — transforming properties, building communities, and delivering results across New York.
              </p>

              {/* Mobile brand card — visible below sm, hidden on desktop */}
              <div className="block lg:hidden mb-6">
                <div
                  className="rounded-2xl flex items-center gap-4 px-4 py-4"
                  style={{
                    background: 'linear-gradient(135deg, #1B2B4B, #243d60)',
                    border: '1px solid rgba(201,145,42,0.25)',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}nexus-logo.png`}
                    alt="Nexus Growth Inc."
                    className="h-12 w-auto flex-shrink-0"
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold mb-0.5" style={{ color: '#C9912A' }}>Active Renovation</div>
                    <div className="text-white font-bold text-sm leading-tight">Maple St. · Maplewood, NY</div>
                    <div className="text-xs mt-1 font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>12+ Properties Transformed</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/projects" className="btn-gold text-sm w-full sm:w-auto justify-center">View Our Projects →</Link>
                <Link to="/rentals" className="btn-outline text-sm w-full sm:w-auto justify-center">Available Rentals</Link>
              </div>
            </div>

            {/* Desktop visual */}
            <div className="relative hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', height: 420, border: '1px solid rgba(201,145,42,0.2)' }}
              >
                <div className="h-full flex items-center justify-center flex-col gap-4">
                  <img
                    src={`${import.meta.env.BASE_URL}nexus-logo.png`}
                    alt="Nexus Growth Inc."
                    className="h-32 w-auto"
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                  />
                  <div className="text-center mt-2">
                    <div className="text-sm font-semibold" style={{ color: '#C9912A' }}>Active Renovation</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Maple St. · Maplewood, NY</div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4"
                style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)', boxShadow: '0 20px 40px rgba(201,145,42,0.3)' }}
              >
                <div className="font-black text-2xl" style={{ color: '#080f18' }}>12+</div>
                <div className="font-semibold text-xs" style={{ color: '#080f18' }}>Properties Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#111e2c', borderTop: '1px solid rgba(201,145,42,0.1)', borderBottom: '1px solid rgba(201,145,42,0.1)' }}>
        <div className="container-site py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-black text-2xl md:text-3xl lg:text-4xl" style={{ color: '#C9912A' }}>{num}</div>
                <div className="text-xs mt-1 leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="text-center mb-8 md:mb-14">
            <div className="section-label">WHAT WE DO</div>
            <h2 className="section-title">Our Services</h2>
            <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
              From strategic acquisitions to full-service property management — we deliver end-to-end real estate excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="card-dark group cursor-pointer">
                <div className="text-2xl md:text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-sm md:text-base mb-2 text-white transition-colors group-hover:text-[#C9912A]">{title}</h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-7 md:mt-8">
            <Link to="/services" className="btn-outline text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-10 md:py-20" style={{ background: '#1B2B4B' }}>
        <div className="container-site">
          <div className="flex flex-row items-baseline justify-between mb-8 md:mb-14 gap-3">
            <div>
              <div className="section-label">PORTFOLIO</div>
              <h2 className="section-title mb-0">Current Projects</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold transition-colors flex-shrink-0" style={{ color: '#C9912A' }}>View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {projects.map(({ name, location, status, type, gold }) => (
              <div key={name} className="rounded-2xl overflow-hidden transition-all group" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                <div className="h-36 md:h-40 flex items-center justify-center" style={{ background: 'rgba(201,145,42,0.08)' }}>
                  <span className="text-5xl">🏠</span>
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="font-bold text-sm md:text-base text-white">{name}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0" style={gold ? { background: 'rgba(201,145,42,0.1)', color: '#C9912A' } : { background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>{status}</span>
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
      <section className="py-10 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="section-label">WHY NGI</div>
              <h2 className="section-title">Built on Trust,<br />Driven by Quality</h2>
              <p className="leading-relaxed mb-6 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
                We bring decades of combined expertise to every project. Our commitment to quality and integrity is not just a promise — it's our track record.
              </p>
              <Link to="/about" className="btn-gold text-sm w-full sm:w-auto justify-center">Learn Our Story →</Link>
            </div>
            <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-3 md:gap-4 mt-6 lg:mt-0">
              {why.map(({ icon, title, desc }) => (
                <div key={title} className="card-dark">
                  <div className="text-2xl mb-2 md:mb-3">{icon}</div>
                  <h4 className="font-semibold mb-1 text-xs md:text-sm text-white">{title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20" style={{ background: '#1B2B4B', borderTop: '1px solid rgba(201,145,42,0.1)' }}>
        <div className="container-site text-center">
          <div className="max-w-2xl mx-auto">
            <div className="section-label">GET STARTED</div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-4">Ready to Partner With Us?</h2>
            <p className="text-sm md:text-base lg:text-lg mb-7" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Whether you're an investor, property owner, or future tenant — Nexus Growth Inc. is ready to build with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-gold w-full sm:w-auto justify-center">Contact Us Today</Link>
              <Link to="/investor" className="btn-outline w-full sm:w-auto justify-center">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
