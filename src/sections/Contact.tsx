import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'medaxisbpo@gmail.com', href: 'mailto:medaxisbpo@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7397004824', href: 'tel:+917397004824' },
  { icon: MapPin, label: 'Location', value: '15/6 A, Kabilar Street, Ekkattuthangal, Chennai - 600032', href: null },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest_type: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  interest_type: '',
  message: '',
};

export default function Contact() {
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

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const { error } = await supabase.from('contact_messages').insert(form);
    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
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
    <section id="contact" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-premium-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Get In Touch"
          title={<>Let's <span className="text-gold-gradient">Connect</span></>}
          subtitle="Whether you are an organization looking for talented professionals or a candidate searching for the right career opportunity, MedAxis BPO Services is here to assist you."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-5">
            <Reveal>
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                    <Mail className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <p className="text-silver/50 text-xs font-body uppercase tracking-wider">Email Us</p>
                    <p className="text-white font-heading font-medium text-sm">medaxisbpo@gmail.com</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                    <Phone className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <p className="text-silver/50 text-xs font-body uppercase tracking-wider">Call Us</p>
                    <p className="text-white font-heading font-medium text-sm">+91 7397004824</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <p className="text-silver/50 text-xs font-body uppercase tracking-wider">Visit Us</p>
                    <p className="text-white font-heading font-medium text-sm leading-snug">
                      15/6 A, Kabilar Street,<br />Ekkattuthangal, Chennai - 600032
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="p-6 rounded-2xl border border-premium-gold/20 bg-premium-gold/5">
                <p className="text-premium-gold font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                  Recruitment | Staffing | Workforce Solutions
                </p>
                <p className="text-silver/60 text-sm font-body">
                  Connect with us today to discuss your hiring needs or career goals.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <div className="p-6 md:p-8 rounded-2xl glass-card">
                {status === 'success' ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-premium-gold/15 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-premium-gold" />
                    </div>
                    <h4 className="font-heading font-semibold text-white text-lg mb-2">Message Sent!</h4>
                    <p className="text-silver/60 text-sm font-body">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={inputClass}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={inputClass}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={inputClass}
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>I am interested in</label>
                        <select
                          value={form.interest_type}
                          onChange={(e) => handleChange('interest_type', e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Select option</option>
                          <option value="Employer">Employer</option>
                          <option value="Job Seeker">Job Seeker</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className={inputClass}
                        placeholder="Tell us about your hiring needs or career goals..."
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map placeholder */}
        <Reveal delay={200}>
          <div className="mt-8 rounded-2xl overflow-hidden glass-card h-64 flex items-center justify-center">
            <iframe
              title="MedAxis BPO Services Location - Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7!2d80.21!3d13.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM2LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.8)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
