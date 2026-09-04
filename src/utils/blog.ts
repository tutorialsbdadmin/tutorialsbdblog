import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All non-draft posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** URL-safe slug for categories/tags (keeps Bengali letters intact). */
export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9\u0980-\u09ff-]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

export interface TaxonomyItem {
  slug: string;
  name: string;
  count: number;
}

/** Unique categories with post counts, sorted alphabetically. */
export function getCategories(posts: Post[]): TaxonomyItem[] {
  const map = new Map<string, TaxonomyItem>();
  for (const post of posts) {
    const name = post.data.category;
    const slug = slugify(name);
    const item = map.get(slug) ?? { slug, name, count: 0 };
    item.count += 1;
    map.set(slug, item);
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, 'en'));
}

/** Unique tags with post counts, sorted by count (desc) then name. */
export function getTags(posts: Post[]): TaxonomyItem[] {
  const map = new Map<string, TaxonomyItem>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = slugify(name);
      const item = map.get(slug) ?? { slug, name, count: 0 };
      item.count += 1;
      map.set(slug, item);
    }
  }
  return [...map.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, 'en'),
  );
}

/** Rough reading time in minutes (works for Bengali + English mixed text). */
export function getReadingTime(body: string | undefined): number {
  if (!body) return 1;
  const text = body
    .replace(/```[\s\S]*?```/g, ' ') // fenced code blocks
    .replace(/<[^>]+>/g, ' ') // JSX/HTML tags
    .replace(/[#>*`|[\]()-]/g, ' '); // markdown punctuation
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

/** Format a date in Bengali locale (e.g. ৪ সেপ্টেম্বর ২০২৬). */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/** Post URL helper — single source of truth. */
export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}
