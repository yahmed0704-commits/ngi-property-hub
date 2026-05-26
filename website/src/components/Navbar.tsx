import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Current Projects', href: '/projects' },
      { label: 'Upcoming Projects', href: '/upcoming-projects' },
    ],
  },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Our Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Investors', href: '/investor' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
    document.body.classList.remove('nav-open');
  }, [location.pathname]);

  const toggleMobile = () => {
    setOpen((v) => {
      const next = !v;
      document.body.classList.toggle('nav-open', next);
      return next;
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-xl' : 'backdrop-blur-sm'
      }`}
      style={{
        background: scrolled ? 'rgba(8,15,24,0.95)' : 'rgba(8,15,24,0.80)',
        borderBottom: scrolled ? '1px solid rgba(201,145,42,0.15)' : '1px solid rgba(201,145,42,0.08)',
      }}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img src={`${import.meta.env.BASE_URL}nexus-logo.png`} alt="Nexus Growth Inc." className="h-8 sm:h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-xs font-semibold tracking-widest hidden sm:block" style={{ color: '#C9912A' }}>NEXUSGROWTHINC.COM</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="text-sm font-medium transition-colors flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-2xl overflow-hidden" style={{ background: '#111e2c', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-3 text-sm transition-colors"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(27,43,75,1)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = ''; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: location.pathname === link.href ? '#C9912A' : 'rgba(255,255,255,0.7)' }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="btn-gold text-sm py-2 px-5">
            Contact Us
          </Link>
        </nav>

        {/* Mobile burger — large tap target */}
        <button
          onClick={toggleMobile}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-colors"
          style={{ color: 'rgba(255,255,255,0.8)', background: open ? 'rgba(201,145,42,0.1)' : 'transparent' }}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — scrollable so it never clips on short screens */}
      {open && (
        <div
          className="lg:hidden px-4 py-5 flex flex-col gap-1"
          style={{
            background: '#080f18',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            maxHeight: 'calc(100vh - 4rem)',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="flex items-center px-4 rounded-xl text-sm font-medium transition-colors"
                style={{
                  color: location.pathname === link.href ? '#C9912A' : 'rgba(255,255,255,0.8)',
                  background: location.pathname === link.href ? 'rgba(27,43,75,1)' : '',
                  minHeight: '48px',
                }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mb-1 flex flex-col gap-0.5">
                  {link.children.slice(1).map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="flex items-center px-4 rounded-xl text-xs transition-colors"
                      style={{ color: 'rgba(255,255,255,0.45)', minHeight: '40px' }}
                    >
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 pb-1">
            <Link to="/contact" className="btn-gold text-sm text-center w-full">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
