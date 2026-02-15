import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Lock, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Force sync the 'dark' class to the HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-navy-950 text-slate-900 dark:text-zinc-100">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-white/80 border-slate-200 dark:bg-navy-950/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Fixed text color */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" strokeWidth={2} />
                <div className="absolute inset-0 blur-xl bg-blue-400/20 dark:bg-blue-400/30 group-hover:bg-blue-400/40 transition-all"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SecOps</span>
            </Link>

            {/* Desktop Navigation - Fixed Link Colors */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side - Fixed Toggle and Buttons */}
            <div className="hidden md:flex items-center space-x-5">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>
              
              <Link to="/login" className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-zinc-100">
                Login
              </Link>
              
              <Link
                to="/signup"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button - Fixed color */}
            <button 
              className="md:hidden text-slate-900 dark:text-white" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed colors */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-base font-medium text-slate-600 dark:text-zinc-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center space-x-2 text-slate-600 dark:text-zinc-300"
                  >
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="pt-24 min-h-[calc(100vh-300px)]"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer - Fixed hardcoded background and text */}
      <footer className="bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-slate-900 dark:text-white">SecOps</span>
            </div>
            
            <nav className="flex gap-6 text-sm text-slate-500 dark:text-zinc-400">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link>
              <Link to="/contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold text-slate-600 dark:text-zinc-300">Secure by Design</span>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-slate-400 dark:text-zinc-500">
            © 2026 SecOps Algeria. Empowering Algerian startups.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;