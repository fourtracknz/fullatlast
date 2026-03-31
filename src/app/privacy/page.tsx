import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Full At Last. How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-navy-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-lg leading-relaxed mb-5"><strong>Last updated: March 2026</strong></p>
        <p className="text-lg leading-relaxed mb-5">FullAtLast.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Information We Collect</h2>
        <p className="text-lg leading-relaxed mb-5"><strong>Automatically collected:</strong> When you visit our Site, our analytics services may collect standard web log information including your IP address, browser type, referring pages, and pages visited. This data is anonymised and used solely to understand how visitors use our Site.</p>
        <p className="text-lg leading-relaxed mb-5"><strong>Voluntarily provided:</strong> If you subscribe to our newsletter, we collect your email address. We will never sell, rent, or share your email address with third parties.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">How We Use Information</h2>
        <p className="text-lg leading-relaxed mb-5">We use collected information to improve our Site content, understand our audience, deliver our newsletter, and display relevant advertising through third-party ad networks such as Google AdSense.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Cookies</h2>
        <p className="text-lg leading-relaxed mb-5">Our Site uses cookies for analytics and advertising purposes. Third-party advertising partners, including Google, may use cookies to serve ads based on your prior visits to our Site or other websites. You can opt out of personalised advertising by visiting Google&apos;s Ads Settings.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Third-Party Links</h2>
        <p className="text-lg leading-relaxed mb-5">Our Site contains links to third-party websites including affiliate partners. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Contact</h2>
        <p className="text-lg leading-relaxed mb-5">If you have questions about this Privacy Policy, please contact us at hello@fullatlast.com.</p>
      </div>
    </div>
  );
}
