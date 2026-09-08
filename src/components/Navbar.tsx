import { useEffect, useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'For Employers', href: '#employers' },
  { label: 'For Job Seekers', href: '#job-seekers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-luxury-black/95 backdrop-blur-md border-b border-silver/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shadow-lg shadow-premium-gold/20 group-hover:shadow-premium-gold/40 transition-shadow duration-300">
              <Briefcase className="w-5 h-5 text-luxury-black" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-lg text-white tracking-wide">
              MedAxis
            </span>
            <span className="text-premium-gold text-[10px] font-heading font-medium tracking-[0.15em] uppercase">
              BPO Services
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-body font-medium text-silver hover:text-premium-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-premium-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#employers"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#employers');
          }}
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gold-gradient text-luxury-black font-heading font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-premium-gold/30 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 bg-luxury-black/98 backdrop-blur-md border-t border-silver/10 mt-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 px-4 text-silver hover:text-premium-gold hover:bg-deep-black/50 rounded-lg transition-all duration-200 font-body font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#employers"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#employers');
                }}
                className="block py-3 px-4 bg-gold-gradient text-luxury-black font-heading font-semibold text-center rounded-lg"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
