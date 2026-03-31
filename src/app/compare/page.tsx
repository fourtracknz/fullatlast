import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'GLP-1 Drug Comparisons — Ozempic vs Wegovy vs Mounjaro vs Zepbound',
  description: 'Side-by-side comparisons of every GLP-1 medication. Compare Ozempic, Wegovy, Mounjaro, Zepbound, and generic semaglutide on weight loss, side effects, cost, and more.',
};

export default function ComparePage() {
  const articles = getAllArticles('compare');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">GLP-1 Drug Comparisons</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">
        Not sure which GLP-1 medication is right for you? Our side-by-side comparisons break down the key differences in weight loss results, side effects, cost, and dosing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.slug} article={article} basePath="/compare" />
        ))}
      </div>
    </div>
  );
}
