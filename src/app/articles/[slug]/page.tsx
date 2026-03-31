import { Metadata } from 'next';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { getArticleWithContent, getArticleSlugs, getAllArticles } from '@/lib/content';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getArticleSlugs('articles');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleWithContent(slug, 'articles');
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.date,
        authors: [article.author || 'Full At Last Editorial Team'],
      },
    };
  } catch {
    return { title: 'Article Not Found' };
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try {
    article = await getArticleWithContent(slug, 'articles');
  } catch {
    notFound();
  }

  const allArticles = getAllArticles('articles');
  const related = allArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-brand-600">Guides</Link>
          <span>/</span>
          <span className="text-gray-600 capitalize">{article.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700 capitalize">
              {article.category}
            </span>
            <time className="text-sm text-gray-400">{article.date}</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {article.description}
          </p>
        </header>

        {/* Disclaimer Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-amber-800 text-sm">
            <strong>Medical Disclaimer:</strong> This article is for informational purposes only and is not medical advice. Always consult your doctor before starting or changing any medication.
          </p>
        </div>

        {/* Article Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Newsletter CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <Newsletter />
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.slug} href={`/articles/${r.slug}`} className="group block bg-gray-50 rounded-xl p-6 hover:bg-brand-50 transition-colors">
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
