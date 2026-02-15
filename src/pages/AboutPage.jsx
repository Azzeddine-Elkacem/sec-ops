import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Startup-First Mindset",
      description: "We understand the unique challenges of early-stage companies. Fast-paced development, limited budgets, and the need to move quickly without compromising security."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Practical Security",
      description: "No theoretical reports that sit on shelves. We deliver actionable findings with clear remediation steps that your dev team can implement immediately."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Continuous Partnership",
      description: "Security is not a one-time checkbox. We build long-term relationships, growing our services as your company scales from seed to Series A and beyond."
    }
  ];

  const certifications = [
    { name: "OSCP", description: "Offensive Security Certified Professional" },
    { name: "HTB CPTS", description: "Certified Penetration Testing Specialist" },
    { name: "OSEP", description: "Offensive Security Evasion Professional" },
    { name: "CRTP", description: "Certified Red Team Professional" }
  ];

  const stats = [
    { number: "Soon", label: "Startups Secured" },
    { number: "Soon", label: "Vulnerabilities Found" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Security Monitoring" }
  ];

  const whySMEs = [
    {
      title: "Affordability Without Compromise",
      description: "Enterprise security shouldn't require enterprise budgets. We've designed tier-based pricing that makes professional pentesting accessible to startups, while delivering the same rigorous methodology used by Fortune 500 companies."
    },
    {
      title: "Local Expertise, Global Standards",
      description: "As Algeria's first dedicated startup security firm, we understand the local regulatory landscape while ensuring our clients meet international compliance requirements like ISO 27001, SOC 2, and GDPR."
    },
    {
      title: "Speed and Agility",
      description: "Traditional security firms move slowly. We operate at startup speed—delivering findings in days, not months, and integrating seamlessly into your CI/CD pipeline for continuous security validation."
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Our Mission</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-zinc-100"
          >
            Securing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Algerian Startup Ecosystem
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We're on a mission to democratize enterprise-grade cybersecurity, making professional 
            penetration testing and vulnerability management accessible to every Algerian startup and SME.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-500 dark:text-zinc-400 text-sm sm:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-zinc-100">
              What Drives Us
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Our core values shape every engagement and client relationship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:border-blue-400/50 transition-all"
              >
                <div className="mb-4 inline-block p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-zinc-100">{value.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Founder Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-blue-950/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-6">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Our Team</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900 dark:text-zinc-100">
                Built by Security Professionals
              </h2>
              <p className="text-xl text-slate-600 dark:text-zinc-300 mb-6 leading-relaxed">
                SecOps was founded by seasoned penetration testers with deep expertise in 
                offensive security and a passion for helping startups build secure products from day one.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
                  >
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-zinc-100">{cert.name}</div>
                      <div className="text-xs text-slate-500 dark:text-zinc-400">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative">
              <div className="aspect-square rounded-2xl bg-white dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-purple-500/20 border border-slate-200 dark:border-blue-400/30 p-8 flex items-center justify-center shadow-xl dark:shadow-none">
                <div className="text-center">
                  <Shield className="w-32 h-32 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
                    Technical Excellence
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-300">
                    Every team member brings 2+ years of hands-on pentesting experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SMEs Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Our Focus</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-zinc-100">
              Why We Focus on SMEs
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Startups deserve enterprise security without enterprise overhead
            </p>
          </div>

          <div className="space-y-8">
            {whySMEs.map((reason, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-400/50 transition-all shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-zinc-100">{reason.title}</h3>
                    <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-blue-400/30 overflow-hidden shadow-2xl dark:shadow-none">
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-zinc-100">
                Join the SecOps Family
              </h2>
              <p className="text-xl text-slate-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                Partner with Algeria's most trusted security team and build a secure foundation for growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <span>Start Your Security Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;