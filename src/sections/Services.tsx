import {
  ClipboardList,
  UserCheck,
  Clock,
  Users,
  HeartPulse,
  Code2,
  Headphones,
  FileSearch,
  CalendarCheck,
  BriefcaseBusiness,
  Search,
} from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    icon: ClipboardList,
    title: 'End-to-End Recruitment',
    description: 'Complete recruitment lifecycle management from requirement analysis to candidate placement.',
  },
  {
    icon: UserCheck,
    title: 'Permanent Staffing',
    description: 'Reliable permanent placement services matching qualified candidates with long-term roles.',
  },
  {
    icon: Clock,
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions for short-term, seasonal, and project-based hiring needs.',
  },
  {
    icon: Users,
    title: 'Bulk Hiring',
    description: 'Volume recruitment solutions for rapid scaling across multiple roles and locations.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical Billing Recruitment',
    description: 'Specialized recruitment for medical billing, coding, and healthcare support roles.',
  },
  {
    icon: FileSearch,
    title: 'Medical Coding Recruitment',
    description: 'Certified medical coders and billing specialists sourced and screened for accuracy.',
  },
  {
    icon: Headphones,
    title: 'BPO & Customer Support Recruitment',
    description: 'Voice, non-voice, and back-office professionals for BPO and customer service teams.',
  },
  {
    icon: Code2,
    title: 'IT & Non-IT Recruitment',
    description: 'Technical and non-technical talent across software, operations, finance, and more.',
  },
  {
    icon: Search,
    title: 'Candidate Screening & Shortlisting',
    description: 'Thorough resume evaluation, skills assessment, and shortlisting before client review.',
  },
  {
    icon: CalendarCheck,
    title: 'Interview Coordination',
    description: 'Seamless scheduling, reminders, and communication between candidates and employers.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Workforce Consulting',
    description: 'Strategic workforce planning and recruitment consulting tailored to your business.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="What We Offer"
          title={<>Our Key <span className="text-gold-gradient">Services</span></>}
          subtitle="Comprehensive recruitment and staffing solutions designed to meet the diverse hiring needs of modern businesses."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={(i % 4) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
