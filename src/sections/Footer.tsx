import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  'Recruitment',
  'Staffing Solutions',
  'Healthcare Recruitment',
  'BPO Recruitment',
  'IT Recruitment',
  'Non-IT Recruitment',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'For Employers', href: '#employers' },
  { label: 'For Job Seekers', href: '#job-seekers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-luxury-black border-t border-silver/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-premium-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-luxury-black" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg text-white tracking-wide">MedAxis</span>
                <span className="text-premium-gold text-[10px] font-heading font-medium tracking-[0.15em] uppercase">BPO Services</span>
              </div>
            </div>
            <p className="text-silver/60 text-sm font-body leading-relaxed mb-5">
              Connecting Talent with Opportunity.
            </p>
            <p className="text-silver/40 text-xs font-body leading-relaxed">
              Your trusted partner in recruitment, staffing, and workforce solutions across multiple industries.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-silver/60 text-sm font-body hover:text-premium-gold transition-colors duration-200 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-silver/60 text-sm font-body hover:text-premium-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-premium-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:medaxisbpo@gmail.com" className="text-silver/60 text-sm font-body hover:text-premium-gold transition-colors duration-200">
                  medaxisbpo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-premium-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+917397004824" className="text-silver/60 text-sm font-body hover:text-premium-gold transition-colors duration-200">
                  +91 7397004824
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-premium-gold mt-0.5 flex-shrink-0" />
                <span className="text-silver/60 text-sm font-body leading-snug">
                  Chennai, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-silver/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/40 text-xs md:text-sm font-body text-center sm:text-left">
            © 2026 MedAxis BPO Services. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-premium-gold/30" />
            <span className="text-premium-gold/60 text-[10px] font-heading tracking-[0.15em] uppercase">
              Recruitment · Staffing · Workforce
            </span>
            <span className="h-px w-6 bg-premium-gold/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
