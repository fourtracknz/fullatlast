import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'GLP-1 Guides & Articles',
  description: 'Comprehensive, evidence-based guides to GLP-1 medications including Ozempic, Wegovy, Mounjaro, and Zepbound. Side effects, diet tips, cost guides, and more.',
};

export default function ArticlesPage() {
  const articles = getAllArticles('articles');

  const categories = Array.from(new Set(articles.map(a => a.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">GLP-1 Guides & Articles</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">
        Evidence-based guides to help you understand, start, and thrive on GLP-1 medications.
      </p>

      {categories.map(cat => {
        const catArticles = articles.filter(a => a.category === cat);
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-xl font-bold text-navy-900 mb-6 capitalize">{cat.replace('-', ' ')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catArticles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
