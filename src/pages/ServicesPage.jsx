import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Network, 
  Shield, 
  Search, 
  Bug, 
  FileText,
  CheckCircle,
  ArrowRight,
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Web Application Pentesting",
      description: "Comprehensive security testing for web applications, APIs, and SaaS platforms.",
      features: [
        "OWASP Top 10 vulnerability assessment",
        "Authentication and authorization testing",
        "SQL injection and XSS detection",
        "Business logic flaw identification",
        "API security analysis",
        "Session management review"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10",
      techStack: ["BURP Suite", "OWASP ZAP", "Nuclei", "SQLMap"]
    },
    {
      icon: <Network className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Network Security Audits",
      description: "Deep-dive infrastructure testing to identify network vulnerabilities and misconfigurations.",
      features: [
        "Internal and external network scanning",
        "Firewall configuration review",
        "Wireless security assessment",
        "Port and service enumeration",
        "Network segmentation analysis",
        "VPN and remote access testing"
      ],
      gradient: "from-purple-500/10 to-pink-500/10",
      techStack: ["Nmap", "Metasploit", "Wireshark", "Nessus"]
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: "Red Team Operations",
      description: "Advanced adversarial simulations to test your entire security program.",
      features: [
        "Full-scope attack simulation",
        "Social engineering campaigns",
        "Physical security testing",
        "Incident response validation",
        "Purple team collaboration",
        "Custom exploit development"
      ],
      gradient: "from-violet-500/10 to-blue-500/10",
      techStack: ["Cobalt Strike", "Empire", "Mimikatz", "BloodHound"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Reconnaissance",
      description: "Scan the target to find open ports",
      icon: <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      number: "02",
      title: "Enumeration",
      description: "Search for hidden data and service details.",
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      number: "03",
      title: "Vulnerability Analysis & Exploitation",
      description: "Identify weak spots and known security flaws.",
      icon: <Bug className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      number: "04",
      title: "Post-Exploitation & Privilege Escalation",
      description: "Stabilize your shell and explore the system & Elevate your permissions to become the administrator.",
      icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      number: "05",
      title: "Documentation & Reporting",
      description: "Document every step to explain the attack.",
      icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Comprehensive Security Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-zinc-100"
          >
            Professional Pentesting for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Every Attack Vector
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            From web apps to cloud infrastructure, our team delivers 
            enterprise-grade security testing tailored for startups and SMEs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-400/50 transition-all hover:shadow-xl dark:hover:shadow-blue-500/10"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-blue-100 dark:bg-blue-500/10">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-zinc-100">{service.title}</h3>
                  <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-500 dark:text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-slate-400 dark:text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs px-2 py-1 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-blue-950/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-zinc-100">
              Our Testing Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
              A proven methodology that delivers actionable security insights
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                )}

                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-400/50 transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/25">
                    {step.number}
                  </div>
                  <div className="mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-zinc-100">{step.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300
      bg-white dark:bg-zinc-950 
      border border-slate-200 dark:border-blue-500/30">
      
      {/* Background Decorative Element for Dark Mode */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none hidden dark:block"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
      </div>

      {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-zinc-100">
                Ready to Secure Your Startup?
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a free consultation with our security experts and get a customized 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> security roadmap </span> 
                tailored for your growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
                >
                  <span>Get Your Free Security Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/services"
                  className="text-sm font-semibold text-slate-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  View our methodology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;