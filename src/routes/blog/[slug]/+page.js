import { base } from '$app/paths';

export const prerender = 'true';

export async function load({ params }){
  const post = await import(`${base}/../${params.slug}.md`)
  const { title, date, categories, image } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
    categories,
    image
  }
}
