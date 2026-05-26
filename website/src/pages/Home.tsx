import { Link } from 'react-router-dom';

/* ── SVG icon components ── */
const IconHouse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);
const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="2" width="18" height="20" rx="2"/>
    <path d="M3 9h18M9 21V9M3 14h6M15 14h6M15 9v12"/>
  </svg>
);
const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconTrendUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M11 20A7 7 0 014.64 7.64a5 5 0 001.83 5.06A3 3 0 0011 15v5zM19.07 4.93A10 10 0 0011 20V11"/>
  </svg>
);

/* ── Data ── */
const services = [
  { Icon: IconHouse,    title: 'Fix & Flip',               desc: 'Strategic property acquisitions, full renovations, and profitable resale across New York markets.' },
  { Icon: IconBuilding, title: 'Rental Management',        desc: 'End-to-end rental management for residential and multi-family properties.' },
  { Icon: IconWrench,   title: 'Renovation & Construction', desc: 'Expert renovation coordination delivering quality craftsmanship on time and on budget.' },
  { Icon: IconChart,    title: 'Real Estate Investment',   desc: 'Creating high-yield investment opportunities for partners and stakeholders.' },
  { Icon: IconLayers,   title: 'Property Development',     desc: 'Strategic development from land to livable — adding lasting value to communities.' },
  { Icon: IconUsers,    title: 'Investor Partnerships',    desc: 'Joint ventures and partnership structures built for mutual long-term growth.' },
];

const stats = [
  { num: '12+',    label: 'Properties Transformed' },
  { num: '$5M+',   label: 'Active Deal Flow' },
  { num: '3',      label: 'Projects In Progress' },
  { num: 'NJ & NY', label: 'Markets Served' },
];

const projects = [
  { name: 'Maple St.',    location: 'Maplewood, NJ',   status: 'Active Renovation', type: 'Fix & Flip',    gold: true,  progress: 60 },
  { name: 'Willow Dr.',   location: 'South Orange, NJ', status: 'Active',            type: 'Rental',         gold: true,  progress: null },
  { name: 'Riverside Ct.', location: 'Bloomfield, NJ', status: 'Rented',            type: 'Multi-Family',   gold: false, progress: null },
];

const why = [
  { Icon: IconStar,    title: 'Quality First',        desc: 'Every project is executed with meticulous attention to detail and craftsmanship.' },
  { Icon: IconShield,  title: 'Trusted & Reliable',   desc: 'Years of experience and a proven track record across New York real estate.' },
  { Icon: IconTrendUp, title: 'Smart Investment',      desc: 'Data-driven decisions that maximize ROI for all stakeholders and partners.' },
  { Icon: IconLeaf,    title: 'Community Focused',     desc: 'We build neighborhoods, not just properties — committed to local growth.' },
];

/* Property icon SVG for project cards */
const BuildingIllustration = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-24 h-16 opacity-30">
    <rect x="10" y="20" width="30" height="55" rx="2" stroke="#C9912A" strokeWidth="1.5"/>
    <rect x="15" y="26" width="8" height="8" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="27" y="26" width="8" height="8" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="15" y="40" width="8" height="8" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="27" y="40" width="8" height="8" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="18" y="55" width="12" height="20" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="45" y="10" width="50" height="65" rx="2" stroke="#C9912A" strokeWidth="1.5"/>
    <rect x="52" y="18" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="68" y="18" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="52" y="34" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="68" y="34" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="52" y="50" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="68" y="50" width="10" height="10" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <rect x="58" y="62" width="14" height="13" rx="1" stroke="#C9912A" strokeWidth="1"/>
    <line x1="0" y1="75" x2="120" y2="75" stroke="#C9912A" strokeWidth="1"/>
  </svg>
);

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative flex items-start lg:items-center overflow-hidden"
        style={{
          background: '#080f18',
          minHeight: undefined,
        }}
      >
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle architectural grid */}
          <div className="absolute inset-0 hidden lg:block" style={{
            backgroundImage: 'linear-gradient(rgba(201,145,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,42,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          {/* Radial glows */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,145,42,0.06) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.9) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.5) 0%, transparent 70%)' }} />
          {/* Gold diagonal accent — desktop only */}
          <div className="absolute top-0 left-1/2 w-px h-full hidden lg:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,145,42,0.08), transparent)' }} />
        </div>

        <div className="container-site relative w-full pt-20 pb-10 md:pt-24 lg:pt-28 xl:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: Copy */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6" style={{ border: '1px solid rgba(201,145,42,0.3)', background: 'rgba(201,145,42,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9912A' }} />
                <span className="text-xs font-semibold tracking-wider leading-none" style={{ color: '#C9912A' }}>NEW YORK'S PREMIER REAL ESTATE FIRM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-2">
                We Believe In
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-5 text-gradient">
                Quality.
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-7 max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Nexus Growth Inc. transforms properties and builds communities across New York — delivering quality renovations, expert management, and high-yield investment opportunities.
              </p>

              {/* Mobile brand card */}
              <div className="block lg:hidden mb-6">
                <div className="rounded-2xl flex items-center gap-4 px-4 py-4" style={{ background: 'linear-gradient(135deg, #1B2B4B, #243d60)', border: '1px solid rgba(201,145,42,0.25)' }}>
                  <img src={`${import.meta.env.BASE_URL}nexus-logo.png`} alt="Nexus Growth Inc." className="h-12 w-auto flex-shrink-0" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold mb-0.5" style={{ color: '#C9912A' }}>Active Renovation</div>
                    <div className="text-white font-bold text-sm leading-tight">Maple St. · Maplewood, NJ</div>
                    <div className="text-xs mt-1 font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>12+ Properties Transformed</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link to="/projects" className="btn-gold text-sm w-full sm:w-auto justify-center">View Our Projects →</Link>
                <Link to="/rentals" className="btn-outline text-sm w-full sm:w-auto justify-center">Available Rentals</Link>
              </div>

              {/* Trust chips — desktop */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {[
                  { Icon: IconShield, text: 'Licensed & Insured' },
                  { Icon: IconMapPin, text: 'New York Market' },
                  { Icon: IconCheck,  text: 'Quality-First Approach' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ color: '#C9912A' }}><Icon /></span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Project preview card — desktop only */}
            <div className="relative hidden lg:block">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden" style={{ background: '#0d1825', border: '1px solid rgba(201,145,42,0.2)', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,145,42,0.05)' }}>

                {/* Card header */}
                <div className="flex items-center justify-between px-5 py-3.5" style={{ background: 'rgba(27,43,75,0.7)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-2.5">
                    <img src={`${import.meta.env.BASE_URL}nexus-logo.png`} alt="NGI" className="h-5 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
                    <span className="text-xs font-semibold tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>ACTIVE PROJECT</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.7)' }} />
                    <span className="text-xs font-medium" style={{ color: '#4ade80' }}>In Progress</span>
                  </div>
                </div>

                {/* Visual area */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden" style={{
                  background: 'linear-gradient(160deg, #1B2B4B 0%, #0d1825 100%)',
                  backgroundImage: 'linear-gradient(rgba(201,145,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,42,0.05) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}>
                  {/* Glow */}
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,145,42,0.08) 0%, transparent 70%)' }} />
                  {/* Building illustration */}
                  <BuildingIllustration />
                  {/* Status badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: 'rgba(201,145,42,0.9)', color: '#080f18', backdropFilter: 'blur(8px)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#080f18]" />
                    Active Renovation
                  </div>
                  {/* Location chip */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs" style={{ background: 'rgba(8,15,24,0.8)', color: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 flex-shrink-0" style={{ color: '#C9912A' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Maplewood, NJ
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="mb-4">
                    <h3 className="font-black text-lg text-white mb-0.5">Maple Street Renovation</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,145,42,0.15)', color: '#C9912A' }}>Fix & Flip</span>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Full interior renovation</span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Renovation Progress</span>
                      <span className="text-xs font-bold" style={{ color: '#C9912A' }}>In Progress</span>
                    </div>
                    <div className="rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, #C9912A, #e8b84b)', boxShadow: '0 0 8px rgba(201,145,42,0.5)' }} />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Kitchen · Bathrooms · Flooring</span>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>Ongoing</span>
                    </div>
                  </div>

                  {/* Mini stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Type', val: 'Fix & Flip' },
                      { label: 'Market', val: 'New Jersey' },
                      { label: 'Status', val: 'Active' },
                    ].map(({ label, val }) => (
                      <div key={label} className="rounded-lg p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                        <div className="text-xs font-semibold text-white">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 rounded-xl px-5 py-3.5 shadow-2xl" style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)', boxShadow: '0 16px 40px rgba(201,145,42,0.4)' }}>
                <div className="font-black text-2xl leading-none" style={{ color: '#080f18' }}>12+</div>
                <div className="font-semibold text-xs mt-0.5" style={{ color: 'rgba(8,15,24,0.7)' }}>Properties Transformed</div>
              </div>

              {/* Floating top-left market chip */}
              <div className="absolute -top-3 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: '#111e2c', border: '1px solid rgba(201,145,42,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: '#C9912A' }} />
                <span className="text-xs font-semibold text-white">New York Market</span>
              </div>
            </div>
          </div>

          {/* Scroll hint — desktop */}
          <div className="hidden lg:flex justify-center mt-12 lg:mt-16">
            <a href="#stats" className="flex flex-col items-center gap-1.5 group" style={{ color: 'rgba(255,255,255,0.2)' }}>
              <span className="text-xs font-medium tracking-widest">SCROLL</span>
              <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }} />
              <div className="group-hover:translate-y-1 transition-transform" style={{ color: 'rgba(201,145,42,0.6)' }}>
                <IconArrowDown />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div id="stats" />
      <section style={{ background: '#111e2c', borderTop: '1px solid rgba(201,145,42,0.12)', borderBottom: '1px solid rgba(201,145,42,0.12)' }}>
        <div className="container-site py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ num, label }, i) => (
              <div key={label} className="text-center py-2" style={i < 3 ? { borderRight: '1px solid rgba(255,255,255,0.05)' } : {}}>
                <div className="font-black text-2xl md:text-3xl lg:text-4xl" style={{ color: '#C9912A' }}>{num}</div>
                <div className="text-xs mt-1 leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-label">WHAT WE DO</div>
            <h2 className="section-title text-2xl md:text-3xl">Our Services</h2>
            <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
              From strategic acquisitions to full-service property management — we deliver end-to-end real estate excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map(({ Icon, title, desc }) => (
              <div key={title} className="card-dark group cursor-pointer relative overflow-hidden">
                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl transition-all duration-200 group-hover:opacity-100 opacity-0" style={{ background: 'linear-gradient(to bottom, #C9912A, #e8b84b)' }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200" style={{ background: 'rgba(201,145,42,0.1)', color: '#C9912A' }}>
                  <Icon />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-2 text-white transition-colors group-hover:text-[#C9912A]">{title}</h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-outline text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-12 md:py-20" style={{ background: 'linear-gradient(180deg, #0d1825 0%, #1B2B4B 100%)' }}>
        <div className="container-site">
          <div className="flex flex-row items-baseline justify-between mb-8 md:mb-12 gap-3">
            <div>
              <div className="section-label">PORTFOLIO</div>
              <h2 className="section-title text-2xl md:text-3xl mb-0">Current Projects</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold transition-colors flex-shrink-0" style={{ color: '#C9912A' }}>View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {projects.map(({ name, location, status, type, gold, progress }) => (
              <div key={name} className="rounded-2xl overflow-hidden transition-all duration-200 group hover:border-[rgba(201,145,42,0.3)]" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(8,15,24,0.5)', backdropFilter: 'blur(8px)' }}>
                {/* Card visual */}
                <div className="h-36 md:h-40 flex items-center justify-center relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, #111e2c, #0d1825)',
                  backgroundImage: 'linear-gradient(rgba(201,145,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,42,0.04) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(201,145,42,0.06) 0%, transparent 70%)' }} />
                  <BuildingIllustration />
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <span className="font-bold text-sm md:text-base text-white leading-tight">{name}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap" style={gold ? { background: 'rgba(201,145,42,0.15)', color: '#C9912A' } : { background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>{status}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {location}
                  </div>
                  <div className="text-xs font-semibold mb-3" style={{ color: '#C9912A' }}>{type}</div>

                  {/* Progress bar for active renovations */}
                  {progress !== null && (
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Progress</span>
                        <span className="text-xs font-semibold" style={{ color: '#C9912A' }}>In Progress</span>
                      </div>
                      <div className="rounded-full h-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div className="h-full rounded-full" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #C9912A, #e8b84b)' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NGI ── */}
      <section className="py-12 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <div className="section-label">WHY NGI</div>
              <h2 className="section-title text-2xl md:text-3xl">Built on Trust,<br />Driven by Quality</h2>
              <div className="gold-divider" />
              <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We bring combined expertise to every project — from acquisition to renovation to rental management. Our commitment to quality and integrity is not just a promise.
              </p>
              <p className="leading-relaxed mb-7 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
                It's our track record across dozens of properties and satisfied tenants, partners, and investors throughout New York.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn-gold text-sm">Learn Our Story →</Link>
                <Link to="/investor" className="btn-outline text-sm">Partner With Us</Link>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-3 md:gap-4 mt-6 lg:mt-0">
              {why.map(({ Icon, title, desc }) => (
                <div key={title} className="card-dark group hover:border-[rgba(201,145,42,0.2)]">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(201,145,42,0.1)', color: '#C9912A' }}>
                    <Icon />
                  </div>
                  <h4 className="font-semibold mb-1.5 text-sm text-white">{title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-14 md:py-24 overflow-hidden" style={{ background: '#1B2B4B', borderTop: '1px solid rgba(201,145,42,0.1)' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{
          backgroundImage: 'linear-gradient(rgba(201,145,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,145,42,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,145,42,0.08) 0%, transparent 60%)' }} />

        <div className="container-site text-center relative">
          <div className="max-w-2xl mx-auto">
            <div className="section-label">GET STARTED</div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-4">Ready to Partner With Us?</h2>
            <p className="text-sm md:text-base lg:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Whether you're an investor, property owner, or future tenant — Nexus Growth Inc. is ready to build with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-gold w-full sm:w-auto justify-center">Contact Us Today</Link>
              <Link to="/investor" className="btn-outline w-full sm:w-auto justify-center">Partner With Us</Link>
            </div>
            {/* Trust line */}
            <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Licensed &amp; Insured · New York Real Estate · Quality-First Renovations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
