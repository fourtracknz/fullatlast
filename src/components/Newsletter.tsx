'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to ConvertKit/email service
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 md:p-12 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          The Full Signal Newsletter
        </h3>
        <p className="text-brand-100 mb-6 text-lg">
          Weekly insights on GLP-1 medications, nutrition tips, new drug updates, and real stories from real people. Trusted by thousands. Free forever.
        </p>

        {submitted ? (
          <div className="bg-white/20 rounded-xl p-6">
            <p className="text-xl font-semibold">Welcome aboard! 🎉</p>
            <p className="text-brand-100 mt-2">Check your inbox for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}
        <p className="text-brand-200 text-xs mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  );
}
