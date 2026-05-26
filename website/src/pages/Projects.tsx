import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

const projects = [
  {
    name: 'Maple St.',
    location: 'Maplewood, NY',
    status: 'Active Renovation',
    type: 'Fix & Flip',
    gold: true,
    details: 'Full interior renovation underway. Kitchen, bathrooms, flooring, and exterior work in progress.',
    budget: '[Budget — placeholder]',
    timeline: '[Timeline — placeholder]',
    photos: [] as string[],
  },
  {
    name: 'Willow Dr.',
    location: 'South Orange, NY',
    status: 'Active',
    type: 'Rental Property',
    gold: true,
    details: 'Active rental property. Tenant occupied. Ongoing maintenance and management.',
    budget: '[Budget — placeholder]',
    timeline: 'Ongoing',
    photos: [] as string[],
  },
  {
    name: 'Riverside Ct.',
    location: 'Bloomfield, NY',
    status: 'Rented',
    type: 'Multi-Family',
    gold: false,
    details: 'Multi-unit property fully tenanted. Managed by Nexus Growth Inc. rental team.',
    budget: '[Budget — placeholder]',
    timeline: 'Ongoing',
    photos: [] as string[],
  },
];

const BASE = import.meta.env.BASE_URL;

const completed = [
  {
    name: '90 Theron St',
    location: 'Johnson City, NY 13790',
    type: 'Fix & Flip',
    status: 'Sold',
    details: 'Full interior renovation — new kitchen with white shaker cabinets, dark granite countertops, and stainless appliances; designer accent wall with marble panel and wood slats; fully renovated bathrooms with floor-to-ceiling marble tile; new hardwood floors throughout; fresh exterior paint and updated fixtures.',
    highlights: ['Full Kitchen Remodel', 'Marble Bathrooms', 'Designer Accent Wall', 'New Flooring Throughout'],
    photos: [
      `${BASE}theron-exterior-front.jpeg`,
      `${BASE}theron-exterior-back.jpeg`,
      `${BASE}theron-living-room-1.jpeg`,
      `${BASE}theron-living-room-2.jpeg`,
      `${BASE}theron-kitchen-1.jpeg`,
      `${BASE}theron-kitchen-2.jpeg`,
      `${BASE}theron-dining.jpeg`,
      `${BASE}theron-deck.jpeg`,
      `${BASE}theron-bath-main-1.jpeg`,
      `${BASE}theron-bath-main-2.jpeg`,
      `${BASE}theron-bath-half.jpeg`,
      `${BASE}theron-bath-half-2.jpeg`,
      `${BASE}theron-bedroom-1.jpeg`,
      `${BASE}theron-bedroom-2.jpeg`,
      `${BASE}theron-bedroom-3.jpeg`,
      `${BASE}theron-bedroom-4.jpeg`,
      `${BASE}theron-bedroom-5.jpeg`,
      `${BASE}theron-stairs.jpeg`,
      `${BASE}theron-hallway.jpeg`,
      `${BASE}theron-backyard.jpeg`,
    ],
  },
];

export default function Projects() {
  const [gallery, setGallery] = useState<{ photos: string[]; title: string; subtitle: string } | null>(null);

  return (
    <div>
      {gallery && (
        <PhotoGallery
          photos={gallery.photos}
          title={gallery.title}
          subtitle={gallery.subtitle}
          onClose={() => setGallery(null)}
        />
      )}

      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR PORTFOLIO</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 md:mb-4">Current Projects</h1>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Active renovations and managed properties across New York.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="section-label mb-2">ACTIVE PROJECTS</div>
          <h2 className="section-title mb-7 md:mb-10">In Progress</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-16">
            {projects.map(({ name, location, status, type, gold, details, budget, timeline, photos }) => (
              <div
                key={name}
                className="rounded-2xl overflow-hidden transition-all group"
                style={{ background: 'rgba(27,43,75,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Thumbnail */}
                <div
                  className="h-40 md:h-44 flex items-center justify-center relative group/img overflow-hidden"
                  style={{ background: 'rgba(201,145,42,0.07)', cursor: photos.length > 0 ? 'pointer' : 'default' }}
                  onClick={() => photos.length > 0 && setGallery({ photos, title: name, subtitle: location })}
                >
                  {photos.length > 0 ? (
                    <>
                      <img src={photos[0]} alt={name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.5)' }}>
                        <span className="text-white font-semibold text-sm">📷 View {photos.length} Photo{photos.length !== 1 ? 's' : ''}</span>
                      </div>
                    </>
                  ) : (
                    <span className="text-5xl md:text-6xl">🏗️</span>
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="font-bold text-sm md:text-base text-white leading-tight">{name}</h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={gold ? { background: 'rgba(201,145,42,0.2)', color: '#C9912A' } : { background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>📍 {location}</div>
                  <div className="text-xs font-semibold mb-3" style={{ color: '#C9912A' }}>{type}</div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{details}</p>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs mb-4">
                    <div className="rounded-lg p-2.5" style={{ background: '#080f18' }}>
                      <div className="mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Budget</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)' }}>{budget}</div>
                    </div>
                    <div className="rounded-lg p-2.5" style={{ background: '#080f18' }}>
                      <div className="mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Timeline</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)' }}>{timeline}</div>
                    </div>
                  </div>
                  {photos.length > 0 && (
                    <button
                      onClick={() => setGallery({ photos, title: name, subtitle: location })}
                      className="w-full text-center text-sm font-semibold py-2.5 rounded-lg transition-all"
                      style={{ background: 'rgba(201,145,42,0.15)', color: '#C9912A', border: '1px solid rgba(201,145,42,0.3)', minHeight: 44 }}
                    >
                      📷 View Photos ({photos.length})
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="section-label mb-2">COMPLETED PROJECTS</div>
          <h2 className="section-title mb-7 md:mb-10">Past Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {completed.map(({ name, location, type, status, details, highlights, photos }) => (
              <div
                key={name}
                className="rounded-2xl overflow-hidden transition-all group"
                style={{ background: 'rgba(27,43,75,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Thumbnail */}
                <div
                  className="h-48 md:h-52 relative group/img overflow-hidden"
                  style={{ cursor: photos.length > 0 ? 'pointer' : 'default' }}
                  onClick={() => photos.length > 0 && setGallery({ photos, title: name, subtitle: location })}
                >
                  {photos.length > 0 ? (
                    <>
                      <img src={photos[0]} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.5)' }}>
                        <span className="text-white font-semibold text-sm px-4 py-2 rounded-full" style={{ background: 'rgba(201,145,42,0.9)' }}>
                          View All {photos.length} Photos
                        </span>
                      </div>
                      {/* Sold badge overlay */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: 'rgba(34,197,94,0.9)', color: '#fff' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {status}
                      </div>
                      {/* Photo count */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold" style={{ background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.8)' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        {photos.length}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(201,145,42,0.07)' }}>
                      <span className="text-5xl">🏠</span>
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-1.5 gap-2">
                    <h3 className="font-bold text-sm md:text-base text-white leading-tight">{name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: 'rgba(201,145,42,0.15)', color: '#C9912A' }}>{type}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {location}
                  </div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{details}</p>

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {highlights.map((h) => (
                      <span key={h} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>{h}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => setGallery({ photos, title: name, subtitle: location })}
                    className="w-full text-center text-sm font-semibold py-2.5 rounded-lg transition-all"
                    style={{ background: 'rgba(201,145,42,0.15)', color: '#C9912A', border: '1px solid rgba(201,145,42,0.3)', minHeight: 44 }}
                  >
                    View Photos ({photos.length})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 text-center" style={{ background: '#1B2B4B' }}>
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4">Interested in a Partnership?</h2>
          <p className="mb-6 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Join our investor network and gain access to high-quality deal flow across New York.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/investor" className="btn-gold w-full sm:w-auto justify-center">Investor Partnerships</Link>
            <Link to="/upcoming-projects" className="btn-outline w-full sm:w-auto justify-center">Upcoming Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
