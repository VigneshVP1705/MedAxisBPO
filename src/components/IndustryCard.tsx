import { type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  positions: string[];
  delay?: number;
}

export default function IndustryCard({ icon: Icon, title, positions, delay = 0 }: IndustryCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full p-7 rounded-2xl glass-card hover:border-premium-gold/40 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-premium-gold/10">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-premium-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300 flex-shrink-0">
            <Icon className="w-7 h-7 text-premium-gold group-hover:text-luxury-black transition-colors duration-300" strokeWidth={1.8} />
          </div>
          <h3 className="font-heading font-bold text-white text-lg md:text-xl group-hover:text-premium-gold transition-colors duration-300 leading-tight">
            {title}
          </h3>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
          {positions.map((pos) => (
            <li key={pos} className="flex items-center gap-2 text-sm text-silver/70 font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-premium-gold/50 flex-shrink-0" />
              {pos}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
