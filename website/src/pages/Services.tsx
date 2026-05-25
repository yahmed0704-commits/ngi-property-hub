import { Link } from 'react-router-dom';

const services = [
  {
    id: 'fix-flip',
    icon: '🏠',
    title: 'Fix & Flip',
    tagline: 'Strategic acquisitions, quality renovations, profitable resale.',
    desc: 'We identify undervalued properties across New Jersey, execute comprehensive renovations, and resell at maximum value. Our team manages every step — from acquisition analysis to final staging and sale.',
    includes: ['Property sourcing & analysis', 'Acquisition strategy', 'Full renovation management', 'Interior design & staging', 'Market-timed resale', 'ROI tracking & reporting'],
  },
  {
    id: 'rental',
    icon: '🏢',
    title: 'Rental Management',
    tagline: 'Stress-free management for residential and multi-family rentals.',
    desc: 'From tenant screening to maintenance coordination, we handle every aspect of rental property management so you can focus on growing your portfolio without the headaches.',
    includes: ['Tenant screening & placement', 'Lease management', 'Rent collection', 'Maintenance coordination', 'Monthly financial reporting', 'Legal compliance'],
  },
  {
    id: 'construction',
    icon: '🔨',
    title: 'Renovation & Construction',
    tagline: 'Expert coordination. Quality craftsmanship. On time, on budget.',
    desc: 'Our renovation team brings together skilled contractors, project managers, and designers to deliver exceptional results on every project — from kitchen remodels to complete property overhauls.',
    includes: ['Contractor coordination', 'Project management', 'Budget & timeline tracking', 'Permit management', 'Quality inspections', 'Before & after documentation'],
  },
  {
    id: 'investment',
    icon: '📈',
    title: 'Real Estate Investment',
    tagline: 'High-yield opportunities backed by market expertise.',
    desc: 'We create structured investment opportunities that deliver competitive returns. Our data-driven approach to market selection and property analysis ensures every investment decision is backed by research.',
    includes: ['Market analysis & targeting', 'Deal sourcing', 'Financial modeling', 'Risk assessment', 'Investor reporting', 'Portfolio diversification strategy'],
  },
  {
    id: 'development',
    icon: '🏗️',
    title: 'Property Development',
    tagline: 'From concept to community — professional development services.',
    desc: 'We develop properties that create lasting value — designing spaces that communities need and markets want. Our development process is meticulous, disciplined, and always community-conscious.',
    includes: ['Site selection & feasibility', 'Zoning & permitting', 'Architectural coordination', 'Construction oversight', 'Community impact analysis', 'Final asset management'],
  },
  {
    id: 'partnerships',
    icon: '🤝',
    title: 'Investor Partnerships',
    tagline: 'Joint ventures built for mutual long-term growth.',
    desc: 'We partner with investors who share our vision for quality and long-term value creation. Our partnership structures are transparent, fair, and designed to align interests at every stage.',
    includes: ['Joint venture structuring', 'Equity partnerships', 'Deal co-sponsorship', 'Preferred return structures', 'Transparent reporting', 'Exit strategy planning'],
  },
];

export default function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">WHAT WE OFFER</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Full-spectrum real estate services — from acquisition to management to investor partnerships.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-8">
            {services.map(({ id, icon, title, tagline, desc, includes }, i) => (
              <div
                key={id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start rounded-2xl p-8 transition-all"
                style={{ background: i % 2 === 0 ? 'rgba(27,43,75,0.3)' : 'rgba(17,30,44,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div>
                  <div className="text-4xl mb-4">{icon}</div>
                  <div className="section-label">{tagline}</div>
                  <h2 className="text-white text-2xl font-bold mb-3">{title}</h2>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#C9912A' }}>WHAT'S INCLUDED</h4>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: '#C9912A' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {id === 'partnerships' && (
                    <Link to="/investor" className="btn-gold text-sm mt-6 inline-block">Learn About Partnerships →</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: '#1B2B4B' }}>
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Contact us to discuss which services best fit your real estate goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Get In Touch</Link>
            <Link to="/investor" className="btn-outline">Investment Opportunities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
