import React from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServerErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-900">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* Animated 500 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 leading-none">
              500
            </h1>
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-500/30 to-orange-500/30"></div>
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
            Server Error
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-300 mb-2">
            Oops! Something went wrong on our end.
          </p>
          <p className="text-slate-600 dark:text-gray-400">
            Our team has been notified and we're working on fixing this issue. Please try again later.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-red-500/10 border border-red-500/30">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
        </motion.div>

        {/* What You Can Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            What you can try:
          </h3>
          <div className="space-y-3 text-left text-slate-700 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Refresh the page or wait a few minutes and try again</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Check your internet connection</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Contact our support team if the problem persists</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleRefresh}
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center space-x-2 text-white"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Refresh Page</span>
          </button>
          <Link
            to="/"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 rounded-lg font-semibold transition-all hover:bg-blue-500/5 flex items-center space-x-2 text-slate-900 dark:text-white"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
        </motion.div>

        {/* Support Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-slate-600 dark:text-gray-300 mb-2">Need immediate assistance?</p>
          <Link
            to="/contact"
            className="text-blue-500 dark:text-blue-400 hover:underline font-semibold"
          >
            Contact our support team →
          </Link>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xs text-slate-500 dark:text-gray-400"
        >
          Error Code: SEC-500-{Date.now().toString().slice(-6)}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServerErrorPage;
