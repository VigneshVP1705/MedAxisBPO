import { type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full p-6 rounded-2xl glass-card hover:border-premium-gold/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-premium-gold/10">
        <div className="w-12 h-12 rounded-xl bg-premium-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold-gradient transition-all duration-300">
          <Icon className="w-6 h-6 text-premium-gold group-hover:text-luxury-black transition-colors duration-300" strokeWidth={1.8} />
        </div>
        <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-premium-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-silver/70 text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
