import Link from 'next/link';
import { ArticleMeta } from '@/lib/content';

const categoryColors: Record<string, string> = {
  'guides': 'bg-blue-100 text-blue-700',
  'drugs': 'bg-purple-100 text-purple-700',
  'lifestyle': 'bg-green-100 text-green-700',
  'side-effects': 'bg-orange-100 text-orange-700',
  'cost': 'bg-yellow-100 text-yellow-700',
  'compare': 'bg-indigo-100 text-indigo-700',
  'news': 'bg-red-100 text-red-700',
};

export default function ArticleCard({ article, basePath = '/articles' }: { article: ArticleMeta; basePath?: string }) {
  const colorClass = categoryColors[article.category] || 'bg-gray-100 text-gray-700';

  return (
    <Link href={`${basePath}/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400">{article.date}</span>
        </div>
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors mb-2 flex-grow">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {article.description}
        </p>
      </article>
    </Link>
  );
}
