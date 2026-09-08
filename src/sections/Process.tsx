import {
  FileText,
  Search,
  Users,
  CheckSquare,
  Filter,
  CalendarClock,
  Handshake,
  FileSignature,
  LifeBuoy,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const steps = [
  {
    icon: FileText,
    title: 'Understanding Client Requirements',
    description: 'We begin by understanding job role, skills, qualifications, experience, salary, location, shift timings, vacancies, and company culture.',
  },
  {
    icon: Search,
    title: 'Job Requirement Analysis',
    description: 'Our specialists analyze every position to identify the ideal candidate profile — technical skills, communication, industry experience, and career stability.',
  },
  {
    icon: Users,
    title: 'Candidate Sourcing',
    description: 'We source through professional networks, job portals, internal databases, employee referrals, social media, direct sourcing, and recruitment campaigns.',
  },
  {
    icon: CheckSquare,
    title: 'Candidate Screening',
    description: 'Every candidate goes through resume evaluation, experience verification, skills assessment, and communication assessment before shortlisting.',
  },
  {
    icon: Filter,
    title: 'Candidate Shortlisting',
    description: 'Based on client requirements, we carefully shortlist the most suitable candidates and forward their profiles for further consideration.',
  },
  {
    icon: CalendarClock,
    title: 'Interview Coordination',
    description: 'We manage scheduling, candidate confirmation, reminders, online interview coordination, and follow-up communication for a smooth experience.',
  },
  {
    icon: Handshake,
    title: 'Client Selection Process',
    description: 'Once the interview is completed, we coordinate with both client and candidate regarding the selection status, maintaining clear communication.',
  },
  {
    icon: FileSignature,
    title: 'Offer & Joining Coordination',
    description: 'We support offer coordination, salary discussion, documentation, joining date confirmation, pre-joining follow-up, and candidate engagement.',
  },
  {
    icon: LifeBuoy,
    title: 'Post-Placement Support',
    description: 'Our relationship does not end after placement. We provide continued support to ensure a smooth transition and successful recruitment outcome.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Our Process"
          title={<>End-to-End <span className="text-gold-gradient">Recruitment Solutions</span></>}
          subtitle="We manage the complete recruitment lifecycle — from understanding your requirements to successfully placing the right candidate."
        />

        {/* Vertical timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-premium-gold/40 via-premium-gold/15 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <div className="group relative flex gap-5 md:gap-7 items-start">
                  {/* Number / icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-deep-black border border-premium-gold/20 flex items-center justify-center group-hover:border-premium-gold/50 transition-all duration-300 group-hover:bg-premium-gold/5">
                      <step.icon className="w-5 h-5 md:w-7 md:h-7 text-premium-gold" strokeWidth={1.8} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-gradient text-luxury-black text-xs font-bold flex items-center justify-center font-heading">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2 pt-1">
                    <h3 className="font-heading font-semibold text-white text-base md:text-lg mb-2 group-hover:text-premium-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-silver/60 text-sm md:text-base leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
