import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Yahya Ahmed',
    title: 'CEO & President',
    bio: 'Leads Nexus Growth Inc. with a vision for quality-first real estate development and investment across New York and New Jersey. Drives the company\'s strategic growth, acquisitions, and investor partnerships.',
    initials: 'YA',
    photo: `${import.meta.env.BASE_URL}team-yahya.jpeg`,
  },
  {
    name: 'Stanley Dipu Mazumdar',
    title: 'Vice President',
    bio: 'Assists in strategic planning, monitors performance and policy adherence, and supports major operational decisions across all divisions of Nexus Growth Inc.',
    initials: 'SD',
    photo: `${import.meta.env.BASE_URL}team-stanley.jpeg`,
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Secretary',
    bio: 'Manages corporate governance, board communications, and executive administrative functions. [Additional bio — placeholder]',
    initials: 'SE',
    photo: null,
  },
  {
    name: '[Team Member Name — placeholder]',
    title: 'Admin',
    bio: 'Supports day-to-day office operations, document management, and internal coordination across departments. [Additional bio — placeholder]',
    initials: 'AD',
    photo: null,
  },
  {
    name: 'Tasnim Chowdhury',
    title: 'Operational Lead',
    bio: 'Coordinates overall project execution, manages timelines and workflow across departments, oversees client communications, monitors operational efficiency, and reports performance to the President and Board.',
    initials: 'TC',
    photo: `${import.meta.env.BASE_URL}team-tasnim.jpeg`,
  },
  {
    name: 'Mohammed Khan',
    title: 'Property Acquisition & Tenant Relations',
    bio: 'Identifies property acquisition opportunities, manages tenant relationships, assists in property evaluations, and supports leasing coordination across the portfolio.',
    initials: 'MK',
    photo: `${import.meta.env.BASE_URL}team-mohammed.jpeg`,
  },
  {
    name: 'Abdul Chowdhury',
    title: 'Construction & Renovation Coordinator',
    bio: 'Oversees construction projects, coordinates contractors and vendors, and monitors renovation budgets and timelines to ensure every project is delivered on time and to standard.',
    initials: 'AC',
    photo: `${import.meta.env.BASE_URL}team-abdul.jpeg`,
  },
];

export default function Team() {
  const hasPlaceholders = team.some((m) => m.name.includes('placeholder'));

  return (
    <div>
      <section className="page-hero">
        <div className="container-site text-center">
          <div className="section-label">THE PEOPLE BEHIND NGI</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Team</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Experienced real estate professionals committed to delivering quality on every project.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#080f18' }}>
        <div className="container-site">
          {hasPlaceholders && (
            <div className="rounded-xl p-4 mb-10 text-center" style={{ background: 'rgba(201,145,42,0.1)', border: '1px solid rgba(201,145,42,0.2)' }}>
              <p className="text-sm" style={{ color: '#C9912A' }}>
                ⚠️ Some team member details are still placeholders — provide names, photos, and bios to complete this section.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, title, bio, initials, photo }) => (
              <div key={title} className="card-dark text-center group">
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    className="w-24 h-24 rounded-full mx-auto mb-5 object-cover object-top"
                    style={{ border: '3px solid rgba(201,145,42,0.4)' }}
                  />
                ) : (
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center font-black text-xl"
                    style={{ background: 'linear-gradient(135deg, #C9912A, #e8b84b)', color: '#080f18' }}
                  >
                    {initials}
                  </div>
                )}
                <h3 className="font-bold mb-1 text-white">{name}</h3>
                <div className="text-xs font-semibold tracking-wide mb-3" style={{ color: '#C9912A' }}>{title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#111e2c' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">OUR CULTURE</div>
              <h2 className="section-title">A Team Built on Trust</h2>
              <div className="gold-divider" />
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                At Nexus Growth Inc., we believe that great real estate starts with great people. Our team brings together expertise in acquisitions, project management, rental operations, and investor relations.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                We foster a culture of accountability, transparency, and continuous improvement — because our clients and partners deserve nothing less than our best.
              </p>
              <Link to="/contact" className="btn-gold text-sm">Work With Our Team →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['🎯', 'Results-driven culture'],
                ['🔍', 'Attention to detail'],
                ['📊', 'Data-informed decisions'],
                ['🌟', 'Client-first approach'],
              ].map(([icon, label]) => (
                <div key={label} className="card-dark text-center py-6">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: '#080f18' }}>
        <div className="container-site max-w-xl mx-auto">
          <h2 className="text-white text-3xl font-black mb-4">Join Our Network</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Contractors, investors, or professionals — we're always open to new partnerships.</p>
          <Link to="/contact" className="btn-gold">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
