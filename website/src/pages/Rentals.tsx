import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

const units = [
  {
    address: '156 Willow Dr.',
    city: 'Montclair, NY',
    status: 'Active',
    statusStyle: { background: 'rgba(34,197,94,0.2)', color: '#4ade80' },
    rent: '$2,650 / mo',
    beds: '3',
    baths: '1.5',
    type: 'Single Family',
    available: 'Currently Leased',
    features: ['In-unit laundry', 'Private parking', 'Updated kitchen', 'Backyard'],
    cta: false,
    photos: [] as string[],
  },
  {
    address: '310 Riverside Ct., Unit 1',
    city: 'Bloomfield, NY',
    status: 'Ending Soon',
    statusStyle: { background: 'rgba(234,179,8,0.2)', color: '#facc15' },
    rent: '$1,850 / mo',
    beds: '2',
    baths: '1',
    type: 'Multi-Family Unit',
    available: 'Available Soon',
    features: ['On-site parking', 'Updated bathroom', 'Natural light', 'Quiet neighborhood'],
    cta: true,
    photos: [] as string[],
  },
  {
    address: '310 Riverside Ct., Unit 2',
    city: 'Bloomfield, NY',
    status: 'Vacant',
    statusStyle: { background: 'rgba(201,145,42,0.2)', color: '#C9912A' },
    rent: '[Price — placeholder]',
    beds: '2',
    baths: '1',
    type: 'Multi-Family Unit',
    available: 'Available Now',
    features: ['On-site parking', 'Renovated unit', 'New appliances', 'Quiet neighborhood'],
    cta: true,
    photos: [] as string[],
  },
];

export default function Rentals() {
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

      {/* Header */}
      <section className="pt-20 md:pt-32 pb-6 md:pb-8" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 md:mb-10">
            <div>
              <div className="section-label mb-2">FIND YOUR HOME</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Available Rentals</h1>
              <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Managed directly by Nexus Growth Inc. — no middlemen, just great homes.
              </p>
            </div>
            <Link to="/contact" className="btn-gold flex-shrink-0 w-full sm:w-auto justify-center text-sm">
              Inquire About a Unit
            </Link>
          </div>

          {/* Rental cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-16">
            {units.map(({ address, city, status, statusStyle, rent, beds, baths, type, available, features, cta, photos }) => (
              <div
                key={address}
                className="rounded-2xl overflow-hidden transition-all"
                style={{ background: 'rgba(27,43,75,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Photo thumbnail */}
                <div
                  className="h-40 md:h-44 flex items-center justify-center relative group overflow-hidden"
                  style={{ background: 'rgba(201,145,42,0.07)', cursor: photos.length > 0 ? 'pointer' : 'default' }}
                  onClick={() => photos.length > 0 && setGallery({ photos, title: address, subtitle: city })}
                >
                  {photos.length > 0 ? (
                    <>
                      <img src={photos[0]} alt={address} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'rgba(0,0,0,0.5)' }}>
                        <span className="text-white font-semibold text-sm">📷 View {photos.length} Photo{photos.length !== 1 ? 's' : ''}</span>
                      </div>
                    </>
                  ) : (
                    <span className="text-5xl md:text-6xl">🏡</span>
                  )}
                  <div className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={statusStyle}>{status}</div>
                </div>

                {/* Card content */}
                <div className="p-4 md:p-5">
                  <h3 className="font-bold mb-1 text-white text-sm md:text-base leading-snug">{address}</h3>
                  <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>📍 {city}</div>
                  <div className="font-black text-xl mb-0.5" style={{ color: '#C9912A' }}>{rent}</div>
                  <div className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>{available}</div>

                  <div className="flex flex-wrap gap-3 text-xs mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span>🛏 {beds} bed</span>
                    <span>🚿 {baths} bath</span>
                    <span>🏠 {type}</span>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {features.map((f) => (
                      <li key={f} className="text-xs flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        <span className="flex-shrink-0" style={{ color: '#C9912A' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => photos.length > 0 ? setGallery({ photos, title: address, subtitle: city }) : undefined}
                      className="block text-center text-sm font-semibold py-2.5 rounded-lg transition-all"
                      style={photos.length > 0
                        ? { background: 'rgba(201,145,42,0.15)', color: '#C9912A', border: '1px solid rgba(201,145,42,0.3)', cursor: 'pointer', minHeight: 44 }
                        : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.08)', cursor: 'default', minHeight: 44 }
                      }
                    >
                      {photos.length > 0 ? `📷 View Photos (${photos.length})` : '📷 Photos Coming Soon'}
                    </button>
                    <Link
                      to="/contact"
                      className="block text-center text-sm font-semibold py-2.5 rounded-lg transition-all"
                      style={cta
                        ? { background: '#C9912A', color: '#080f18', minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }
                        : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' as const, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }
                      }
                    >
                      {status === 'Active' ? 'Currently Occupied' : 'Inquire About This Unit'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div className="card-dark">
              <h3 className="font-bold mb-4 text-white text-sm md:text-base">Why Rent With NGI?</h3>
              <ul className="space-y-3">
                {[
                  'Professionally managed properties',
                  'Responsive maintenance team',
                  'Fair and transparent lease terms',
                  'Direct communication — no third-party management',
                  'Well-maintained, quality homes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#C9912A' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark">
              <h3 className="font-bold mb-4 text-white text-sm md:text-base">Application Process</h3>
              {['Inquire via contact form or phone', 'Schedule a viewing', 'Submit rental application', 'Background & credit check', 'Lease signing & move-in'].map((step, i) => (
                <div key={step} className="flex items-start gap-3 mb-3 last:mb-0">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: 'rgba(201,145,42,0.2)', color: '#C9912A' }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.6)' }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 text-center" style={{ background: '#1B2B4B' }}>
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4">Interested in a Unit?</h2>
          <p className="mb-6 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Reach out and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn-gold w-full sm:w-auto justify-center">Contact Us About Rentals</Link>
        </div>
      </section>
    </div>
  );
}
