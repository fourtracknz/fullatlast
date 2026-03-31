import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  author?: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

export function getArticleSlugs(subdir: string = 'articles'): string[] {
  const dir = path.join(contentDirectory, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string, subdir: string = 'articles'): ArticleMeta {
  const fullPath = path.join(contentDirectory, subdir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    featured: data.featured || false,
    author: data.author || 'Full At Last Editorial Team',
  };
}

export async function getArticleWithContent(slug: string, subdir: string = 'articles'): Promise<Article> {
  const fullPath = path.join(contentDirectory, subdir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    featured: data.featured || false,
    author: data.author || 'Full At Last Editorial Team',
    contentHtml: processedContent.toString(),
  };
}

export function getAllArticles(subdir: string = 'articles'): ArticleMeta[] {
  const slugs = getArticleSlugs(subdir);
  return slugs
    .map(slug => getArticleBySlug(slug, subdir))
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter(a => a.featured);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter(a => a.category.toLowerCase() === category.toLowerCase());
}
