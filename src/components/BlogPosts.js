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
    <section className="py-12 h-[80vh]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[2.5rem] font-medium text-dark-blue font-serif mb-8">Latest Blog Posts</h2>
        {posts.length === 0 ? (
          <p className="text-dark-blue text-base font-serif text-justify">No blog posts available.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-6">
                <h3 className="text-[1.5rem] font-medium text-dark-blue font-serif mb-2">
                  <Link
                    href={`/${post.slug}`}
                    className="hover:text-blue-900 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h3>
                <div
                  className="text-dark-blue text-base font-serif text-justify"
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