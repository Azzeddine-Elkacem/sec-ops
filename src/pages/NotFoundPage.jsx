import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-900">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 leading-none">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-400/30 to-purple-500/30"></div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-300 mb-2">
            Oops! The page you're looking for has vanished into cyberspace.
          </p>
          <p className="text-slate-600 dark:text-gray-400">
            It might have been deleted, moved, or never existed in the first place.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-500/10 border border-blue-500/30">
            <Search className="w-16 h-16 text-blue-500" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center space-x-2 text-white"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 rounded-lg font-semibold transition-all hover:bg-blue-500/5 flex items-center space-x-2 text-slate-900 dark:text-white"
          >
            Contact Support
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-slate-600 dark:text-gray-400 mb-4">Maybe these will help:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/services" className="text-blue-500 dark:text-blue-400 hover:underline">
              Our Services
            </Link>
            <Link to="/about" className="text-blue-500 dark:text-blue-400 hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="text-blue-500 dark:text-blue-400 hover:underline">
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
