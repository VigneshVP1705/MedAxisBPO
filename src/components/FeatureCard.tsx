import { type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group flex flex-col items-center text-center p-6 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400 hover:-translate-y-1">
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-premium-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-16 h-16 rounded-full bg-premium-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
            <Icon className="w-8 h-8 text-premium-gold group-hover:text-luxury-black transition-colors duration-300" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="font-heading font-semibold text-white text-base md:text-lg mb-3 group-hover:text-premium-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-silver/60 text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
