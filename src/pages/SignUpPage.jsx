import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Phone, ArrowRight, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative bg-slate-50 dark:bg-transparent">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <Shield className="w-10 h-10 text-blue-500" strokeWidth={2} />
            <span className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
              SecOps
            </span>
          </Link>
        </div>

        {/* Sign Up Card */}
        <div className="p-8 rounded-2xl backdrop-blur-sm
          bg-white dark:bg-white/5
          border border-slate-200 dark:border-white/10
          shadow-xl dark:shadow-none">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
              Create Account
            </h1>
            <p className="text-slate-600 dark:text-zinc-400">
              Get started with SecOps security platform
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full pl-11 pr-4 py-3 rounded-lg
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-zinc-100
                    placeholder-slate-400 dark:placeholder-zinc-500
                    focus:outline-none focus:border-blue-500
                    transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-lg
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-zinc-100
                    placeholder-slate-400 dark:placeholder-zinc-500
                    focus:outline-none focus:border-blue-500
                    transition-colors"
                />
              </div>
            </div>

            {/* Mobile Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                Mobile Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+213 XXX XXX XXX"
                  className="w-full pl-11 pr-4 py-3 rounded-lg
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-zinc-100
                    placeholder-slate-400 dark:placeholder-zinc-500
                    focus:outline-none focus:border-blue-500
                    transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-4 py-3 rounded-lg
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-zinc-100
                    placeholder-slate-400 dark:placeholder-zinc-500
                    focus:outline-none focus:border-blue-500
                    transition-colors"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="w-full pl-11 pr-4 py-3 rounded-lg
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-zinc-100
                    placeholder-slate-400 dark:placeholder-zinc-500
                    focus:outline-none focus:border-blue-500
                    transition-colors"
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 rounded border-slate-300 dark:border-white/10
                  bg-white dark:bg-white/5
                  text-blue-500 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-slate-600 dark:text-zinc-400">
                I agree to the{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold
                transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 text-white"
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 dark:text-zinc-400">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center text-sm text-slate-500 dark:text-zinc-500">
          <Lock className="w-4 h-4 inline-block mr-1" />
          Your data is encrypted and secure
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
