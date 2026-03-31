import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold text-white">
                Full<span className="text-brand-400">AtLast</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Your trusted, independent guide to GLP-1 medications and the lifestyle changes that make them work. Evidence-based information for real people on a real journey.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/articles" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">All Guides</Link></li>
              <li><Link href="/compare" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Drug Comparisons</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-6">
            <p className="text-amber-200 text-xs leading-relaxed">
              <strong>Medical Disclaimer:</strong> The content on FullAtLast.com is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting, stopping, or changing any medication. GLP-1 medications are prescription drugs that require medical supervision.
            </p>
          </div>
          <p className="text-gray-500 text-xs text-center">
            &copy; {new Date().getFullYear()} FullAtLast.com. All rights reserved. This site is independently operated and is not affiliated with any pharmaceutical company.
          </p>
        </div>
      </div>
    </footer>
  );
}
