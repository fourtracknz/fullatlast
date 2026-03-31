import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Full At Last — Your Trusted GLP-1 Medication Guide',
    template: '%s | Full At Last',
  },
  description: 'Independent, evidence-based guides to GLP-1 weight loss medications including Ozempic, Wegovy, Mounjaro, and Zepbound. Drug comparisons, side effects, diet tips, and cost guides.',
  keywords: ['GLP-1', 'Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound', 'semaglutide', 'tirzepatide', 'weight loss', 'GLP-1 side effects', 'GLP-1 diet'],
  authors: [{ name: 'Full At Last Editorial Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fullatlast.com',
    siteName: 'Full At Last',
    title: 'Full At Last — Your Trusted GLP-1 Medication Guide',
    description: 'Independent, evidence-based guides to GLP-1 weight loss medications. Drug comparisons, side effects, nutrition, and cost guides.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full At Last — Your Trusted GLP-1 Medication Guide',
    description: 'Independent, evidence-based guides to GLP-1 weight loss medications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
