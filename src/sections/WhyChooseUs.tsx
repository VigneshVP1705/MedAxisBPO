import {
  Layers,
  BadgeCheck,
  Zap,
  Settings2,
  Users2,
  Database,
  LifeBuoy,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';

const reasons = [
  {
    icon: Layers,
    title: 'End-to-End Recruitment Support',
    description: 'We manage the complete hiring process from sourcing to successful candidate placement.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Candidates',
    description: 'Our screening process helps ensure that clients receive suitable and qualified candidates.',
  },
  {
    icon: Zap,
    title: 'Faster Hiring Process',
    description: 'We focus on reducing hiring time and helping companies fill vacancies efficiently.',
  },
  {
    icon: Settings2,
    title: 'Customized Recruitment Solutions',
    description: 'Every company has different hiring needs. We provide recruitment strategies based on your specific requirements.',
  },
  {
    icon: Users2,
    title: 'Dedicated Recruitment Team',
    description: 'Our recruitment professionals work closely with clients throughout the hiring process.',
  },
  {
    icon: Database,
    title: 'Candidate Database',
    description: 'We continuously build and maintain a network of potential candidates across multiple industries.',
  },
  {
    icon: LifeBuoy,
    title: 'Post-Placement Support',
    description: 'We provide continued support even after the candidate joins the organization.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title={<>Why Choose <span className="text-gold-gradient">MedAxis BPO Services?</span></>}
          subtitle="We combine experience, dedication, and a proven recruitment process to deliver results that matter."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <FeatureCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              delay={(i % 4) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
