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

const completed = [
  { name: '[Property Name]', location: '[Location, NY]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
  { name: '[Property Name]', location: '[Location, NY]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
  { name: '[Property Name]', location: '[Location, NY]', type: 'Rental Setup', year: '[Year]', result: '[Active rental — placeholder]' },
  { name: '[Property Name]', location: '[Location, NY]', type: 'Fix & Flip', year: '[Year]', result: '[Sold — placeholder]' },
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
          <h2 className="section-title mb-4 md:mb-5">Past Portfolio</h2>
          <div
            className="rounded-xl p-3 md:p-4 mb-4 md:mb-5 text-xs"
            style={{ background: 'rgba(201,145,42,0.05)', border: '1px solid rgba(201,145,42,0.1)', color: '#C9912A' }}
          >
            ⚠️ Property names and details are placeholders — update with your actual completed projects.
          </div>

          {/* Scrollable table wrapper prevents horizontal overflow */}
          <div className="overflow-x-auto rounded-xl -mx-1 px-1" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <table className="w-full text-sm" style={{ minWidth: '500px' }}>
              <thead>
                <tr style={{ background: 'rgba(27,43,75,0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {['Property', 'Location', 'Type', 'Year', 'Outcome'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-semibold text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {completed.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="px-4 py-3 font-medium text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.8)' }}>{p.name}</td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.location}</td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: '#C9912A' }}>{p.type}</td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.year}</td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: '#4ade80' }}>{p.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
