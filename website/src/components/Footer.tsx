import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Current Projects', href: '/projects' },
  { label: 'Upcoming Projects', href: '/upcoming-projects' },
  { label: 'Available Rentals', href: '/rentals' },
  { label: 'Before & After Gallery', href: '/gallery' },
  { label: 'Investor & Partnerships', href: '/investor' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#080f18', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container-site py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}nexus-logo.png`}
              alt="Nexus Growth Inc."
              className="h-10 md:h-12 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Nexus Growth Inc. is a premier real estate investment and development company transforming properties and building communities across New York.
            </p>
            <p className="text-xs font-semibold tracking-widest" style={{ color: '#C9912A' }}>WE BELIEVE IN QUALITY.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide text-white">Navigation</h4>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link to={p.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9912A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#C9912A' }} className="mt-0.5">📍</span>
                <span>Vestal, New York 13850</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#C9912A' }} className="mt-0.5">📧</span>
                <a href="mailto:admins@nexusgrowthinc.com" className="break-all" style={{ color: 'rgba(255,255,255,0.5)' }}>admins@nexusgrowthinc.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#C9912A' }} className="mt-0.5">📞</span>
                <a href="tel:+12126580007" style={{ color: 'rgba(255,255,255,0.5)' }}>(212) 658-0007</a>
              </li>
            </ul>
            <div className="mt-5">
              <Link to="/contact" className="btn-gold text-sm py-2 px-5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Nexus Growth Inc. All rights reserved.</p>
          <p className="text-xs text-center sm:text-right" style={{ color: 'rgba(255,255,255,0.2)' }}>nexusgrowthinc.com · New York Real Estate</p>
        </div>
      </div>
    </footer>
  );
}
