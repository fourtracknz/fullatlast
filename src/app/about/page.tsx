import { Metadata } from 'next';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'About Full At Last',
  description: 'Learn about Full At Last — an independent, evidence-based resource for GLP-1 medication information. No pharmaceutical sponsors, no sales pitch.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6">About Full At Last</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Full At Last exists because we believe everyone considering or taking GLP-1 medications deserves access to clear, trustworthy, independent information — not pharmaceutical marketing dressed up as education.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          GLP-1 medications are transforming how millions of people manage their weight and metabolic health. But navigating the landscape is overwhelming. Which drug is right for you? What side effects should you expect? How do you eat and exercise while on these medications? What about the new generics?
        </p>
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          Most of the information online comes from two sources: pharmaceutical companies trying to sell you their drug, or clinics trying to sell you their service. Both have financial incentives that shape their messaging.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          We have no pharmaceutical sponsors. We don&apos;t sell prescriptions. We&apos;re an independent resource that researches, compares, and explains GLP-1 medications so you can make informed decisions with your healthcare provider.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Who We Are</h2>
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Full At Last is maintained by an independent editorial team with backgrounds in health research, fitness, and nutrition science. Our content is built through extensive analysis of peer-reviewed clinical studies, FDA data, and real-world patient experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            We are not doctors. We don&apos;t pretend to be. What we are is a team of researchers and health practitioners who believe that the people considering or taking GLP-1 medications deserve better information than pharmaceutical marketing copy and social media speculation.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Every article goes through a rigorous research process: clinical trial data is reviewed, multiple medical sources are cross-referenced, and content is regularly updated as new evidence emerges. We believe in transparency — we cite our sources, disclose our affiliate relationships, and clearly state that our content is informational, never medical advice.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Our Editorial Standards</h2>
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          Every article on Full At Last follows strict editorial guidelines:
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-brand-500 mt-1">✓</span>
            <span className="text-gray-700 text-lg"><strong>Evidence-based:</strong> We reference peer-reviewed clinical studies, FDA data, and established medical sources. We cite our sources so you can verify our claims.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-500 mt-1">✓</span>
            <span className="text-gray-700 text-lg"><strong>Regularly updated:</strong> GLP-1 is a fast-moving field. We update our content when new drugs launch, prices change, or new research emerges.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-500 mt-1">✓</span>
            <span className="text-gray-700 text-lg"><strong>Independent:</strong> No pharmaceutical company pays us or influences our content. Our revenue comes from advertising and affiliate partnerships, which are always clearly disclosed.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-500 mt-1">✓</span>
            <span className="text-gray-700 text-lg"><strong>Not medical advice:</strong> We&apos;re educators, not doctors. We always recommend consulting your healthcare provider before making any medication decisions.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">How We Make Money</h2>
        <p className="text-gray-700 leading-relaxed mb-5 text-lg">
          Transparency matters. Full At Last earns revenue through display advertising and affiliate partnerships. When we recommend a product or service and you make a purchase through our link, we may earn a commission at no extra cost to you. This never influences which products we recommend — our editorial content is completely independent of our advertising relationships.
        </p>
      </div>

      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
}
