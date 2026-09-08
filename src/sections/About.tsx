import { Target, Eye, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const highlights = [
  'Reliable, efficient, end-to-end recruitment',
  'Experienced screening and interview coordination',
  'From entry-level to experienced specialists',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <SectionTitle
              eyebrow="About Us"
              title={<>Who <span className="text-gold-gradient">We Are</span></>}
              center={false}
            />
            <div className="mt-6 space-y-4 text-silver/70 text-base md:text-lg leading-relaxed font-body">
              <p>
                MedAxis BPO Services is a professional recruitment and workforce solutions
                company dedicated to connecting talented professionals with the right
                organizations.
              </p>
              <p>
                We provide customized recruitment solutions based on our clients' hiring
                requirements. Our goal is to simplify the recruitment process and help
                companies save valuable time, effort, and resources.
              </p>
              <p>
                We believe recruitment is more than simply filling a vacancy. It is about
                understanding the client's business, identifying the right talent, and
                creating successful long-term professional relationships.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 100} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-premium-gold flex-shrink-0" />
                  <span className="text-silver text-sm md:text-base font-body">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right: mission & vision cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full p-7 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400">
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-luxury-black" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Our Mission</h3>
                <p className="text-silver/70 text-sm leading-relaxed font-body">
                  To provide reliable, efficient, and high-quality recruitment solutions that
                  help organizations build successful teams and help candidates achieve
                  meaningful career opportunities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="mt-0 lg:mt-12">
              <div className="h-full p-7 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400">
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-luxury-black" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Our Vision</h3>
                <p className="text-silver/70 text-sm leading-relaxed font-body">
                  To become a trusted recruitment and workforce solutions partner recognized
                  for quality, professionalism, integrity, and successful talent placements.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
