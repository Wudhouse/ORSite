'use client';

import { useState } from 'react';

export default function BookConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    message: '',
    preferredDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log submission (as required for now)
    console.log('%c[OverRide] Consultation booking submitted:', 'color:#60A5FA', formData);
    
    // In production this would POST to an API
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight mb-4">Thank you. We’ve received your request.</h1>
        <p className="text-xl text-white/70">A member of our team will contact you within 4 business hours to arrange a convenient time for your 30-minute consultation.</p>
        
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', company: '', email: '', phone: '', role: '', message: '', preferredDate: '' });
          }}
          className="mt-10 text-sm text-[#60A5FA] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="text-[#60A5FA] text-sm tracking-[2px] font-medium mb-3">NEXT STEP</div>
        <h1 className="section-heading tracking-[-2px]">Book your consultation</h1>
        <p className="mt-4 text-xl text-white/70">Tell us a little about your current situation. We’ll respond promptly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white placeholder:text-white/40" placeholder="Alex Thompson" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Company</label>
            <input type="text" name="company" required value={formData.company} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white placeholder:text-white/40" placeholder="Acme Ltd" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Work Email</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white placeholder:text-white/40" placeholder="you@company.co.uk" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Phone Number</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white placeholder:text-white/40" placeholder="+44 7700 900123" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Your Role</label>
            <select name="role" required value={formData.role} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white">
              <option value="">Select role...</option>
              <option value="Managing Director">Managing Director</option>
              <option value="Finance Director">Finance Director</option>
              <option value="IT Manager">IT Manager / Head of IT</option>
              <option value="Operations Director">Operations Director</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">Preferred Date / Time</label>
            <input type="text" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="form-input w-full px-5 py-3.5 rounded-2xl text-white placeholder:text-white/40" placeholder="Next week, mornings preferred" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white/80">What are you looking to achieve? (optional)</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            rows={5} 
            className="form-input w-full px-5 py-4 rounded-3xl resize-y text-white placeholder:text-white/40" 
            placeholder="We currently spend £X on our MSP and are frustrated with response times and lack of strategic support..."
          />
        </div>

        <button 
          type="submit"
          className="cta-button w-full md:w-auto mt-4 px-14 py-4 bg-white hover:bg-[#E0E7FF] active:bg-white text-[#0A1628] font-semibold rounded-full text-lg transition-all"
        >
          Request Consultation
        </button>

        <p className="text-xs text-white/50 pt-2">We will never share your details. You’ll receive a calendar link within one business day.</p>
      </form>
    </div>
  );
}
