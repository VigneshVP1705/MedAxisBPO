import { useState, type FormEvent } from 'react';
import { Building2, Send, CheckCircle2, Loader2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

const solutions = [
  'Permanent Staffing',
  'Bulk Hiring',
  'Volume Recruitment',
  'Healthcare Recruitment',
  'BPO Recruitment',
  'IT Recruitment',
  'Non-IT Recruitment',
  'Candidate Screening',
  'Interview Coordination',
  'Joining Support',
];

interface FormState {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  job_role: string;
  number_of_vacancies: string;
  hiring_location: string;
  additional_requirements: string;
}

const initialForm: FormState = {
  company_name: '',
  contact_person: '',
  email: '',
  phone: '',
  job_role: '',
  number_of_vacancies: '',
  hiring_location: '',
  additional_requirements: '',
};

export default function ForEmployers() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const required: (keyof FormState)[] = ['company_name', 'contact_person', 'email', 'phone', 'job_role', 'number_of_vacancies'];
    for (const field of required) {
      if (!form[field].trim()) {
        setStatus('error');
        setErrorMsg('Please fill in all required fields.');
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const { error } = await supabase.from('employer_inquiries').insert(form);
    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
      return;
    }

    setStatus('success');
    setForm(initialForm);
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full px-4 py-3 bg-luxury-black/60 border border-silver/15 rounded-lg text-white text-sm font-body placeholder-silver/40 focus:border-premium-gold/50 focus:outline-none focus:ring-1 focus:ring-premium-gold/30 transition-all duration-200';
  const labelClass = 'block text-silver text-xs font-body font-medium mb-1.5';

  return (
    <section id="employers" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: content */}
          <div>
            <SectionTitle
              eyebrow="For Employers"
              title={<>Hire the Right <span className="text-gold-gradient">Talent</span> for Your Business</>}
              center={false}
            />
            <div className="mt-6 space-y-4 text-silver/70 text-base md:text-lg leading-relaxed font-body">
              <p>
                Finding the right employees can be challenging and time-consuming. MedAxis BPO
                Services simplifies your recruitment process by providing qualified and screened
                candidates based on your business requirements.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Our Employer Solutions
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {solutions.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-lg glass-card text-silver text-xs md:text-sm font-body hover:border-premium-gold/30 transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Reveal>
              <div className="mt-10 p-6 rounded-2xl border border-premium-gold/20 bg-premium-gold/5">
                <Building2 className="w-8 h-8 text-premium-gold mb-3" />
                <p className="text-white font-heading font-medium text-lg">
                  Let's Build Your Team Together.
                </p>
                <p className="text-silver/60 text-sm mt-2 font-body">
                  Share your job requirements and our recruitment team will connect with you to understand your hiring needs.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={150}>
            <div className="p-6 md:p-8 rounded-2xl glass-card">
              <h3 className="font-heading font-bold text-white text-xl mb-1">Submit Your Hiring Requirement</h3>
              <p className="text-silver/50 text-sm mb-6 font-body">All fields marked with * are required.</p>

              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-premium-gold/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-premium-gold" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-lg mb-2">Requirement Submitted!</h4>
                  <p className="text-silver/60 text-sm font-body">
                    Thank you for sharing your hiring needs. Our team will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Company Name *</label>
                      <input
                        type="text"
                        value={form.company_name}
                        onChange={(e) => handleChange('company_name', e.target.value)}
                        className={inputClass}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Contact Person *</label>
                      <input
                        type="text"
                        value={form.contact_person}
                        onChange={(e) => handleChange('contact_person', e.target.value)}
                        className={inputClass}
                        placeholder="Full name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={inputClass}
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={inputClass}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Job Role *</label>
                      <input
                        type="text"
                        value={form.job_role}
                        onChange={(e) => handleChange('job_role', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Medical Coder"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Number of Vacancies *</label>
                      <input
                        type="text"
                        value={form.number_of_vacancies}
                        onChange={(e) => handleChange('number_of_vacancies', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. 5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Hiring Location</label>
                    <input
                      type="text"
                      value={form.hiring_location}
                      onChange={(e) => handleChange('hiring_location', e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Chennai"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Additional Requirements</label>
                    <textarea
                      value={form.additional_requirements}
                      onChange={(e) => handleChange('additional_requirements', e.target.value)}
                      rows={3}
                      className={inputClass}
                      placeholder="Skills, experience, shift timings, or any other details..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm font-body">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-gradient text-luxury-black font-heading font-semibold rounded-lg hover:shadow-xl hover:shadow-premium-gold/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Share Your Hiring Requirement
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
