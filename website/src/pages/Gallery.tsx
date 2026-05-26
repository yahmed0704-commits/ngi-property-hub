const categories = ['All', 'Kitchen', 'Bathroom', 'Exterior', 'Living Areas', 'Full Renovation'];

const placeholders = [
  { cat: 'Kitchen', label: 'Kitchen Renovation', sub: 'Before & After' },
  { cat: 'Bathroom', label: 'Bathroom Remodel', sub: 'Before & After' },
  { cat: 'Exterior', label: 'Exterior Refresh', sub: 'Before & After' },
  { cat: 'Living Areas', label: 'Living Room Update', sub: 'After' },
  { cat: 'Kitchen', label: 'Modern Kitchen', sub: 'After' },
  { cat: 'Full Renovation', label: 'Full Property Transformation', sub: 'Before & After' },
  { cat: 'Exterior', label: 'Curb Appeal Makeover', sub: 'Before & After' },
  { cat: 'Bathroom', label: 'Master Bath Renovation', sub: 'After' },
  { cat: 'Full Renovation', label: 'Maple St. — Full Reno', sub: 'In Progress' },
];

const catIcon: Record<string, string> = {
  Kitchen: '🍳',
  Bathroom: '🚿',
  Exterior: '🏠',
  'Living Areas': '🛋️',
  'Full Renovation': '✨',
};

export default function Gallery() {
  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">OUR WORK</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Before & After Gallery</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            See the transformations — from distressed properties to beautiful, quality homes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          <div className="rounded-xl p-4 mb-8 text-center text-xs" style={{ background: 'rgba(201,145,42,0.05)', border: '1px solid rgba(201,145,42,0.15)', color: '#C9912A' }}>
            ⚠️ Photo gallery is ready for your real before/after photos — please provide images to complete this section.
          </div>

          {/* Category filter — horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
                style={i === 0
                  ? { background: '#C9912A', color: '#080f18' }
                  : { border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholders.map(({ cat, label, sub }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: 200,
                    background: `linear-gradient(135deg, rgba(27,43,75,${0.4 + (i % 3) * 0.2}), rgba(36,61,96,${0.6 + (i % 2) * 0.2}))`,
                  }}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">{catIcon[cat] || '✨'}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>[ Photo placeholder ]</div>
                  </div>
                  <div className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(8,15,24,0.8)', color: '#C9912A' }}>{cat}</div>
                </div>
                <div className="p-4" style={{ background: 'rgba(27,43,75,0.3)' }}>
                  <div className="font-semibold text-sm text-white">{label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center rounded-2xl p-6 md:p-10" style={{ border: '1px solid rgba(201,145,42,0.15)', background: 'rgba(201,145,42,0.05)' }}>
            <div className="text-4xl mb-4">📸</div>
            <h3 className="font-bold text-lg md:text-xl mb-3 text-white">Your Transformation Photos Go Here</h3>
            <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Send us your before/after photos and we'll showcase your renovation stories in this gallery. Each project tells a powerful story of transformation.
            </p>
            <a href="/contact" className="btn-gold text-sm">Submit Your Photos</a>
          </div>
        </div>
      </section>
    </div>
  );
}
