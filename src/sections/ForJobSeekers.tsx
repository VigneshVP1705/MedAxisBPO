import { useState, type FormEvent } from 'react';
import { Briefcase, Send, CheckCircle2, Loader2, Upload } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';

const categories = [
  'Fresher',
  'Experienced Professional',
  'Healthcare Professional',
  'Medical Coder',
  'AR Caller',
  'BPO Professional',
  'IT Professional',
];

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  current_location: string;
  experience: string;
  preferred_industry: string;
  preferred_job_role: string;
  resume_file_name: string;
}

const initialForm: FormState = {
  full_name: '',
  email: '',
  phone: '',
  current_location: '',
  experience: '',
  preferred_industry: '',
  preferred_job_role: '',
  resume_file_name: '',
};

export default function ForJobSeekers() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChange('resume_file_name', file.name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
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
    <section id="job-seekers" className="relative py-24 md:py-32 bg-luxury-black overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: form */}
          <Reveal className="order-2 lg:order-1">
            <div className="p-6 md:p-8 rounded-2xl glass-card">
              <h3 className="font-heading font-bold text-white text-xl mb-1">Submit Your Resume</h3>
              <p className="text-silver/50 text-sm mb-6 font-body">Fields marked with * are required.</p>

              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-premium-gold/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-premium-gold" />
                  </div>
                  <h4 className="font-heading font-semibold text-white text-lg mb-2">Resume Submitted!</h4>
                  <p className="text-silver/60 text-sm font-body">
                    Thank you for sharing your profile. We'll connect with you for suitable job opportunities.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => handleChange('full_name', e.target.value)}
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={inputClass}
                        placeholder="email@example.com"
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
                      <label className={labelClass}>Current Location</label>
                      <input
                        type="text"
                        value={form.current_location}
                        onChange={(e) => handleChange('current_location', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Chennai"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Experience</label>
                      <select
                        value={form.experience}
                        onChange={(e) => handleChange('experience', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Preferred Industry</label>
                      <select
                        value={form.preferred_industry}
                        onChange={(e) => handleChange('preferred_industry', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select industry</option>
                        <option value="Healthcare & Medical Billing">Healthcare & Medical Billing</option>
                        <option value="BPO & Customer Support">BPO & Customer Support</option>
                        <option value="IT">IT</option>
                        <option value="Non-IT">Non-IT</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Job Role</label>
                      <input
                        type="text"
                        value={form.preferred_job_role}
                        onChange={(e) => handleChange('preferred_job_role', e.target.value)}
                        className={inputClass}
                        placeholder="e.g. Medical Coder"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Resume Upload</label>
                    <label className="flex items-center gap-3 px-4 py-3 bg-luxury-black/60 border border-silver/15 border-dashed rounded-lg cursor-pointer hover:border-premium-gold/40 transition-colors duration-200">
                      <Upload className="w-5 h-5 text-premium-gold/60 flex-shrink-0" />
                      <span className="text-silver/50 text-sm font-body truncate">
                        {form.resume_file_name || 'Click to upload your resume'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
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
                        Submit Your Resume
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="For Job Seekers"
              title={<>Find the Right <span className="text-gold-gradient">Opportunity</span></>}
              center={false}
            />
            <p className="mt-6 text-silver/70 text-base md:text-lg leading-relaxed font-body">
              At MedAxis BPO Services, we help job seekers connect with organizations offering
              suitable career opportunities. Whether you are just starting out or an experienced
              professional, we can help you find opportunities that match your skills and career goals.
            </p>

            <div className="mt-8">
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Who We Help
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 rounded-lg glass-card text-silver text-xs md:text-sm font-body hover:border-premium-gold/30 transition-colors duration-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <Reveal>
              <div className="mt-10 p-6 rounded-2xl border border-premium-gold/20 bg-premium-gold/5">
                <Briefcase className="w-8 h-8 text-premium-gold mb-3" />
                <p className="text-white font-heading font-medium text-lg">
                  Your Next Career Opportunity Starts Here.
                </p>
                <p className="text-silver/60 text-sm mt-2 font-body">
                  Share your profile with us and stay connected for suitable job opportunities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
