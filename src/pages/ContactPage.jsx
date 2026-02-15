import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const serviceTypes = [
    'Web Application Pentesting',
    'Network Security Audit',
    'Cloud Infrastructure Security',
    'Mobile Application Security',
    'Source Code Review',
    'Red Team Operations',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', serviceType: '', message: '' });
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Office Location",
      details: ["Algiers/Djelfa, Algeria", "Remote consultations available"]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      details: ["secops.team@secops.dz", "Response within 24 hours"]
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Phone",
      details: ["+213 0773983443"]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900 dark:text-zinc-100"
          >
            Let's Secure Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Digital Future
            </span>
          </motion.h1>
          <motion.p className="text-xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Ready to take the first step toward enterprise-grade security? 
            Reach out to our team for a free consultation.
          </motion.p>
        </div>
      </section>

      {/* Form + Sidebar Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-zinc-100">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Benali"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ahmed@startup.dz"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Startup"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">Service Interest *</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      >
                        <option value="" className="text-slate-500">Select a service</option>
                        {serviceTypes.map((s, i) => <option key={i} value={s} className="dark:bg-slate-900">{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your security needs..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                    <span>Send Secure Message</span>
                    <Send className="w-5 h-5" />
                  </button>

                  {formStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent! Our team will reach out within 24 hours.</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-zinc-100">Contact Info</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 h-fit">{info.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-zinc-100">{info.title}</h4>
                        {info.details.map((d, di) => <p key={di} className="text-sm text-slate-500 dark:text-zinc-400">{d}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;