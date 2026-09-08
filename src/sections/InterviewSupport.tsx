import { CalendarClock, FileSignature } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const interviewItems = [
  'Interview scheduling',
  'Candidate confirmation',
  'Interview reminders',
  'Online interview coordination',
  'Client interview coordination',
  'Follow-up communication',
];

const offerItems = [
  'Offer coordination',
  'Salary discussion support',
  'Candidate documentation',
  'Joining date confirmation',
  'Pre-joining follow-up',
  'Candidate engagement until joining',
];

export default function InterviewSupport() {
  return (
    <section className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-premium-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Seamless Hiring"
          title={<>Interview & <span className="text-gold-gradient">Joining Support</span></>}
          subtitle="We ensure a smooth and efficient hiring experience by managing every detail between candidate selection and joining day."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Interview Coordination */}
          <Reveal>
            <div className="h-full p-8 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-premium-gold/10 flex items-center justify-center">
                  <CalendarClock className="w-7 h-7 text-premium-gold" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl">Interview Coordination</h3>
              </div>
              <ul className="space-y-3">
                {interviewItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-silver/70 text-sm md:text-base font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-premium-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Offer & Joining Support */}
          <Reveal delay={150}>
            <div className="h-full p-8 rounded-2xl glass-card hover:border-premium-gold/30 transition-all duration-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-premium-gold/10 flex items-center justify-center">
                  <FileSignature className="w-7 h-7 text-premium-gold" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl">Offer & Joining Support</h3>
              </div>
              <ul className="space-y-3">
                {offerItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-silver/70 text-sm md:text-base font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-premium-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
