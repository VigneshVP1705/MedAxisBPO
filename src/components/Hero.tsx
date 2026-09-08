import { Users, Link2, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';

const floatingIcons = [
  { Icon: Users, className: 'top-[20%] left-[8%]', delay: '0s' },
  { Icon: Link2, className: 'top-[60%] left-[15%]', delay: '1.5s' },
  { Icon: TrendingUp, className: 'top-[30%] right-[10%]', delay: '0.8s' },
  { Icon: UserCheck, className: 'top-[65%] right-[12%]', delay: '2s' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Radial gold glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-premium-gold/10 rounded-full blur-[120px]" />
        {/* Radial gold glow bottom right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rich-gold/8 rounded-full blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(192,192,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-black to-transparent" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`absolute z-0 hidden md:block ${className}`}
          style={{ animation: `float 6s ease-in-out infinite`, animationDelay: delay }}
        >
          <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
            <Icon className="w-6 h-6 text-premium-gold/40" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-down"
        >
          <span className="w-2 h-2 rounded-full bg-premium-gold animate-pulse" />
          <span className="text-silver text-xs md:text-sm font-body font-medium tracking-wide">
            Recruitment · Staffing · Workforce Solutions
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Your Trusted Partner in
          <br />
          <span className="text-gold-gradient">Recruitment & Workforce</span>
          <br />
          Solutions
        </h1>

        {/* Subheading */}
        <p
          className="text-silver text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-body animate-fade-in-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
        >
          At MedAxis BPO Services, we connect talented professionals with the right
          organizations through reliable, efficient, and end-to-end recruitment solutions.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <button
            onClick={() => scrollTo('#employers')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-luxury-black font-heading font-semibold rounded-lg hover:shadow-xl hover:shadow-premium-gold/30 transition-all duration-300 hover:scale-105"
          >
            For Employers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#job-seekers')}
            className="inline-flex items-center gap-2 px-8 py-4 border border-premium-gold/50 text-white font-heading font-semibold rounded-lg hover:bg-premium-gold/10 hover:border-premium-gold transition-all duration-300"
          >
            For Job Seekers
          </button>
        </div>

        {/* Tagline */}
        <p
          className="text-premium-gold/80 text-sm md:text-base font-heading font-medium tracking-[0.15em] uppercase animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          Right Talent. Right Opportunity. Right Time.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-silver/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-premium-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
