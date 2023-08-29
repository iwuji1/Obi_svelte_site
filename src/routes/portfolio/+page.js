export const load = async ({ fetch}) => {
  const response = await fetch(`/api/posts`)
  const allPosts = await response.json()

  const posts = allPosts
    .filter(post => post.meta.categories.includes("Portfolio"))

  return {
    posts
  }
}
