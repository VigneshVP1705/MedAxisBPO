import { ShieldCheck, Eye, Award, UserCog, Lock, Smile, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const values = [
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Eye, label: 'Transparency' },
  { icon: Award, label: 'Quality' },
  { icon: UserCog, label: 'Professionalism' },
  { icon: Lock, label: 'Confidentiality' },
  { icon: Smile, label: 'Client Satisfaction' },
  { icon: TrendingUp, label: 'Candidate Success' },
];

export default function Commitment() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Our Values"
          title={<>Our <span className="text-gold-gradient">Commitment</span></>}
          subtitle="At MedAxis BPO Services, we are committed to providing professional recruitment solutions built on:"
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <Reveal key={value.label} delay={(i % 4) * 80}>
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-premium-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold-gradient transition-all duration-300">
                  <value.icon className="w-6 h-6 text-premium-gold group-hover:text-luxury-black transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <span className="font-heading font-semibold text-white text-sm md:text-base group-hover:text-premium-gold transition-colors duration-300">
                  {value.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-heading font-medium text-white italic leading-relaxed">
              "We believe that the right people can transform a business, and the right
              opportunity can transform a career."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-premium-gold/40" />
              <span className="text-premium-gold text-sm font-heading tracking-wider uppercase">MedAxis BPO Services</span>
              <span className="h-px w-12 bg-premium-gold/40" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
