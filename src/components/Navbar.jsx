import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ENextLogo.png';
import churchLogo from '../assets/ChurchLogo.png';

const NAV_LINKS = [
  { label: 'HOME', to: '/', match: (path) => path === '/' },
  { label: 'ABOUT', to: '/#about', match: () => false },
  { label: 'EVENTS', to: '/events', match: (path) => path.startsWith('/events') },
  { label: 'CONNECT', to: '#footer', match: () => false, samePage: true },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Support `/#about`-style links: if we're already on the target page,
  // just smooth-scroll instead of forcing a route change.
  const handleClick = (link, e) => {
    setMenuOpen(false);
    if (link.samePage) return;
    if (link.to === '/#about' && location.pathname === '/') {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={churchLogo} alt="Church Logo" style={{ height: '40px' }} />
            <img src={logo} alt="EmpowerNext Logo" style={{ height: '40px' }} />
          </div>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) =>
            link.samePage ? (
              <a
                key={link.label}
                href={link.to}
                className="navbar__link"
                onClick={(e) => handleClick(link, e)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`navbar__link ${link.match(location.pathname) ? 'navbar__link--active' : ''}`}
                onClick={(e) => handleClick(link, e)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;