import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'Medical disclaimer for Full At Last. Our content is for informational purposes only and is not a substitute for professional medical advice.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-navy-900 mb-6">Medical Disclaimer</h1>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-lg leading-relaxed mb-5"><strong>Last updated: March 2026</strong></p>
        <p className="text-lg leading-relaxed mb-5">The information provided on FullAtLast.com (&quot;the Site&quot;) is for general informational and educational purposes only. It is not intended to be, and should not be construed as, medical advice, diagnosis, or treatment.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Not Medical Advice</h2>
        <p className="text-lg leading-relaxed mb-5">The content on this Site is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition, medication, or treatment. Never disregard professional medical advice or delay seeking it because of something you have read on this Site.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Prescription Medications</h2>
        <p className="text-lg leading-relaxed mb-5">GLP-1 receptor agonist medications discussed on this Site, including but not limited to semaglutide (Ozempic, Wegovy, Rybelsus), tirzepatide (Mounjaro, Zepbound), liraglutide (Saxenda, Victoza), and others, are prescription medications that require medical supervision. Do not start, stop, or change the dosage of any medication without consulting your healthcare provider.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">No Doctor-Patient Relationship</h2>
        <p className="text-lg leading-relaxed mb-5">Use of this Site does not create a doctor-patient relationship between you and any contributors to, or editors of, this Site. Information provided on this Site is not intended to create any form of healthcare provider-patient relationship.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Accuracy of Information</h2>
        <p className="text-lg leading-relaxed mb-5">While we strive to provide accurate, up-to-date information, the field of GLP-1 medications is rapidly evolving. New research, drug approvals, pricing changes, and clinical guidelines emerge frequently. We make no warranties or representations about the accuracy, completeness, or timeliness of the content on this Site.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Affiliate Disclosure</h2>
        <p className="text-lg leading-relaxed mb-5">This Site may contain affiliate links to products or services. If you click on these links and make a purchase, we may receive a commission at no additional cost to you. This does not influence our editorial content or recommendations.</p>
        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Emergency Situations</h2>
        <p className="text-lg leading-relaxed mb-5">If you are experiencing a medical emergency, call your local emergency services immediately. Do not rely on this Site for emergency medical guidance.</p>
      </div>
    </div>
  );
}
