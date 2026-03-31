import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { getAllArticles } from '@/lib/content';

export default function Home() {
  const articles = getAllArticles('articles');
  const compareArticles = getAllArticles('compare');
  const featured = articles.filter(a => a.featured);
  const latest = articles.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-brand-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
              <span className="text-brand-300 text-sm font-medium">Generic semaglutide now available — March 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Finally understand <br />
              <span className="text-brand-400">GLP-1 medications</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Independent, evidence-based guides to Ozempic, Wegovy, Mounjaro, and every GLP-1 drug on the market. No pharmaceutical sponsors. No sales pitch. Just the information you actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/articles/what-are-glp1-medications"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-colors text-center"
              >
                Start Here: What Are GLP-1s?
              </Link>
              <Link
                href="/compare"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-center border border-white/20"
              >
                Compare Medications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl font-bold text-navy-900">100%</p>
              <p className="text-sm text-gray-500">Independent</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy-900">Evidence</p>
              <p className="text-sm text-gray-500">Based Content</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy-900">$0</p>
              <p className="text-sm text-gray-500">Pharma Sponsors</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy-900">2026</p>
              <p className="text-sm text-gray-500">Updated Info</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">What do you need help with?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Just Starting?', desc: 'Everything you need to know before your first dose', href: '/articles/beginners-guide-to-glp1', color: 'border-l-brand-500 bg-brand-50/50' },
            { title: 'Compare Drugs', desc: 'Ozempic vs Wegovy vs Mounjaro — see the differences', href: '/compare', color: 'border-l-indigo-500 bg-indigo-50/50' },
            { title: 'Managing Side Effects', desc: 'Practical tips for nausea, fatigue, and more', href: '/articles/glp1-side-effects-complete-guide', color: 'border-l-orange-500 bg-orange-50/50' },
            { title: 'Diet & Exercise', desc: 'What to eat and how to train while on GLP-1', href: '/articles/diet-and-nutrition-on-glp1', color: 'border-l-green-500 bg-green-50/50' },
          ].map(item => (
            <Link key={item.href} href={item.href} className={`group rounded-xl border-l-4 p-6 hover:shadow-lg transition-all ${item.color}`}>
              <h3 className="font-bold text-navy-900 group-hover:text-brand-600 transition-colors mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <span className="text-brand-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900">Latest Guides</h2>
            <Link href="/articles" className="text-brand-600 hover:text-brand-800 font-medium text-sm">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Drug Comparisons */}
      {compareArticles.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Drug Comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compareArticles.slice(0, 6).map(article => (
                <ArticleCard key={article.slug} article={article} basePath="/compare" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Newsletter />
      </section>

      {/* About Snippet */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Why trust Full At Last?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We&apos;re not a pharmaceutical company. We&apos;re not a telehealth clinic trying to sell you a prescription. We&apos;re an independent health resource built by people who understand both the science and the real-world experience of GLP-1 medications.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every article is researched against peer-reviewed studies and clinical data. We cite our sources. We update our content when new evidence emerges. And we never let advertising influence our recommendations.
          </p>
          <Link href="/about" className="text-brand-600 hover:text-brand-800 font-semibold">
            Learn more about us →
          </Link>
        </div>
      </section>
    </>
  );
}
