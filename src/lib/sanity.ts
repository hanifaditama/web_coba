import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'i49piibj',
  dataset: 'production',
  apiVersion: '2021-06-07', // or whatever version you're using
  useCdn: false, // Set to false during development
  withCredentials: true, // Important for CORS with credentials
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Function to fetch all blog posts
export async function getAllPosts() {
  console.log('Fetching all posts from Sanity...');
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "author": author->name,
      "category": categories[0]->title,
      mainImage,
      publishedAt
    }`
  );
  console.log('Fetched posts:', posts);
  return posts;
}

// Function to fetch a single post by slug
export async function getPostBySlug(slug: string) {
  console.log(`Fetching post with slug: ${slug}`);
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      "author": author->name,
      "category": categories[0]->title,
      mainImage,
      publishedAt,
      body
    }`,
    { slug }
  );
  console.log('Fetched post:', post);
  return post;
}