import {
  FileText,
  Search,
  Users,
  FileSearch,
  Filter,
  ClipboardCheck,
  CalendarClock,
  UserCheck,
  FileSignature,
  LogIn,
  LifeBuoy,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const steps = [
  { icon: FileText, label: 'Client Shares Hiring Requirement' },
  { icon: Search, label: 'Requirement Analysis' },
  { icon: Users, label: 'Candidate Sourcing' },
  { icon: FileSearch, label: 'Resume Screening' },
  { icon: Filter, label: 'Candidate Shortlisting' },
  { icon: ClipboardCheck, label: 'Initial Interview & Assessment' },
  { icon: CalendarClock, label: 'Client Interview Coordination' },
  { icon: UserCheck, label: 'Candidate Selection' },
  { icon: FileSignature, label: 'Offer & Documentation' },
  { icon: LogIn, label: 'Joining Coordination' },
  { icon: LifeBuoy, label: 'Post-Placement Support' },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-premium-gold/5 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Our Process"
          title={<>Complete <span className="text-gold-gradient">Recruitment Process</span></>}
          subtitle="Simple. Professional. Effective. — A clear 11-step process from requirement to post-placement support."
        />

        {/* Desktop horizontal flow with wrap */}
        <div className="mt-16 hidden md:block">
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={(i % 6) * 80} className="flex items-center">
                <div className="group w-44 p-5 rounded-2xl glass-card hover:border-premium-gold/40 transition-all duration-400 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-premium-gold font-heading font-bold text-lg">{i + 1}</span>
                    <step.icon className="w-5 h-5 text-premium-gold/70 group-hover:text-premium-gold transition-colors" strokeWidth={1.8} />
                  </div>
                  <p className="text-silver/70 text-xs font-body leading-snug">{step.label}</p>
                </div>
                {i < steps.length - 1 && i % 6 !== 5 && (
                  <span className="mx-1 text-premium-gold/30 text-xl">→</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="mt-12 md:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-premium-gold/40 via-premium-gold/15 to-transparent" />
            <div className="space-y-4">
              {steps.map((step, i) => (
                <Reveal key={step.label} delay={i * 50}>
                  <div className="relative flex items-center gap-3">
                    <div className="absolute -left-8 w-7 h-7 rounded-full bg-deep-black border border-premium-gold/30 flex items-center justify-center">
                      <span className="text-premium-gold text-[10px] font-bold font-heading">{i + 1}</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-xl glass-card flex-1">
                      <step.icon className="w-4 h-4 text-premium-gold/70 flex-shrink-0" strokeWidth={1.8} />
                      <p className="text-silver/70 text-xs font-body">{step.label}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
