import { Metadata } from 'next';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { getArticleWithContent, getArticleSlugs, getAllArticles } from '@/lib/content';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getArticleSlugs('compare');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleWithContent(slug, 'compare');
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.date,
      },
    };
  } catch {
    return { title: 'Comparison Not Found' };
  }
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try {
    article = await getArticleWithContent(slug, 'compare');
  } catch {
    notFound();
  }

  const allCompare = getAllArticles('compare');
  const related = allCompare.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-brand-600">Comparisons</Link>
          <span>/</span>
          <span className="text-gray-600">{article.title}</span>
        </nav>

        <header className="mb-10">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 mb-4 inline-block">
            Drug Comparison
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {article.description}
          </p>
          <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">Last updated: {article.date}</p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-amber-800 text-sm">
            <strong>Medical Disclaimer:</strong> This comparison is for informational purposes only. The best medication for you depends on your individual health profile. Always consult your healthcare provider.
          </p>
        </div>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Newsletter />
      </div>

      {related.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">More Comparisons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.slug} href={`/compare/${r.slug}`} className="group block bg-gray-50 rounded-xl p-6 hover:bg-brand-50 transition-colors">
                  <h3 className="font-bold text-navy-900 group-hover:text-brand-600 transition-colors mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
