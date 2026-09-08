import { type ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-premium-gold/60" />
          <span className="text-premium-gold text-sm font-semibold uppercase tracking-[0.2em] font-heading">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-premium-gold/60" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-silver text-base md:text-lg leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
