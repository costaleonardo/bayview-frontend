import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts(first: 10, where: { status: PUBLISH }) {
      nodes {
        id
        title
        excerpt
        slug
      }
    }
  }
`;

export default function BlogPosts() {
  const { data, loading, error } = useQuery(GET_BLOG_POSTS);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error.message}</div>;

  const posts = data?.posts?.nodes || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Blog Posts</h2>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts available.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link
                    href={`/${post.slug}`}
                    className="hover:text-dark-blue transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h3>
                <div
                  className="text-gray-600 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}