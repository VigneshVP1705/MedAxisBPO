import { Stethoscope, Headset, Laptop, Building2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import IndustryCard from '@/components/IndustryCard';

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Medical Billing',
    positions: [
      'Medical Coders',
      'Medical Billing Executives',
      'AR Callers',
      'Payment Posting Specialists',
      'Charge Entry Executives',
      'Denial Management Specialists',
      'Accounts Receivable Specialists',
      'Healthcare Customer Support',
      'Medical Billing Team Leaders',
      'Quality Analysts',
    ],
  },
  {
    icon: Headset,
    title: 'BPO & Customer Support',
    positions: [
      'Voice Process',
      'Non-Voice Process',
      'Customer Support',
      'Email Support',
      'Chat Support',
      'Data Entry',
      'Back Office Operations',
      'Technical Support',
      'Team Leaders',
      'Quality Analysts',
    ],
  },
  {
    icon: Laptop,
    title: 'IT Recruitment',
    positions: [
      'Software Developers',
      'Web Developers',
      'IT Support',
      'Software Testing',
      'Technical Support',
      'System Administrators',
      'Data Analysts',
      'Other IT Professionals',
    ],
  },
  {
    icon: Building2,
    title: 'Non-IT Recruitment',
    positions: [
      'Administration',
      'Human Resources',
      'Finance & Accounts',
      'Sales & Marketing',
      'Operations',
      'Data Entry',
      'Customer Service',
      'Management Roles',
    ],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Sectors We Serve"
          title={<>Industries <span className="text-gold-gradient">We Serve</span></>}
          subtitle="We specialize in recruitment across multiple sectors, connecting the right talent with the right industry."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              positions={industry.positions}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
