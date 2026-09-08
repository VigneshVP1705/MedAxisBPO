import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function FinalCTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-premium-gold/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(192,192,192,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-premium-gold/50" />
            <span className="text-premium-gold text-sm font-heading font-semibold tracking-[0.2em] uppercase">
              MedAxis BPO Services
            </span>
            <span className="h-px w-10 bg-premium-gold/50" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Connecting Talent with Opportunity.
            <br />
            <span className="text-gold-gradient">Building Success Together.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-silver text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-body">
            Whether you are building a team or building your career, MedAxis BPO Services is
            ready to support your journey.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('#employers')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-luxury-black font-heading font-semibold rounded-lg hover:shadow-xl hover:shadow-premium-gold/30 transition-all duration-300 hover:scale-105"
            >
              Find Talent
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#job-seekers')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-premium-gold/50 text-white font-heading font-semibold rounded-lg hover:bg-premium-gold/10 hover:border-premium-gold transition-all duration-300"
            >
              Find Opportunities
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
