import { Link } from 'react-router-dom';

const upcoming = [
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Fix & Flip',
    status: 'Under Contract',
    est: '[Q3 2025 — placeholder]',
    desc: 'Planned full renovation including kitchen, bathrooms, and exterior updates. [Additional details — placeholder]',
  },
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Rental Conversion',
    status: 'In Analysis',
    est: '[Q4 2025 — placeholder]',
    desc: 'Conversion from single-family to multi-unit rental property. [Additional details — placeholder]',
  },
  {
    name: '[Property Address — placeholder]',
    location: '[City, NJ — placeholder]',
    type: 'Fix & Flip',
    status: 'Prospecting',
    est: '[2026 — placeholder]',
    desc: 'High-potential distressed property identified. Currently in feasibility analysis. [Details — placeholder]',
  },
];

const statusColors: Record<string, React.CSSProperties> = {
  'Under Contract': { background: 'rgba(201,145,42,0.2)', color: '#C9912A' },
  'In Analysis': { background: 'rgba(59,130,246,0.2)', color: '#93c5fd' },
  'Prospecting': { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' },
};

export default function UpcomingProjects() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">COMING SOON</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Upcoming Projects</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A look at what's in our pipeline — properties we're actively acquiring and planning.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="rounded-xl p-4 mb-10 text-center text-xs" style={{ background: 'rgba(201,145,42,0.05)', border: '1px solid rgba(201,145,42,0.15)', color: '#C9912A' }}>
            ⚠️ Project details below are placeholders — replace with your actual upcoming acquisitions when ready to publish.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {upcoming.map(({ name, location, type, status, est, desc }) => (
              <div key={name} className="card-dark" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={statusColors[status]}>{status}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{est}</span>
                </div>
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold mb-1 text-white">{name}</h3>
                <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>📍 {location}</div>
                <div className="text-xs font-semibold mb-4" style={{ color: '#C9912A' }}>{type}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(27,43,75,0.3)', border: '1px solid rgba(201,145,42,0.1)' }}>
            <div className="section-label">PIPELINE OVERVIEW</div>
            <h3 className="text-white text-2xl font-bold mb-6">Our Acquisition Strategy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                ['📍', 'Market Focus', 'Essex, Union, Bergen, and Morris counties in NJ'],
                ['🎯', 'Target Properties', 'Distressed single-family and multi-family properties'],
                ['💰', 'Investment Range', '[Investment range — placeholder]'],
              ].map(([icon, title, detail]) => (
                <div key={title as string}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: '#C9912A' }}>{title}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: '#1B2B4B' }}>
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Get Early Access to Deals</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Join our investor network and receive first-look opportunities on upcoming acquisitions before they go to the wider market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/investor" className="btn-gold">Investor Partnerships</Link>
            <Link to="/contact" className="btn-outline">Get Notified</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
