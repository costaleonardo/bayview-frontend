import { gql } from "@apollo/client";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SingleTemplate(props) {
  const post = props.data?.post;

  if (!post) {
    return (
      <div>
        <Header />
        <div className="py-12 text-center">
          <div className="max-w-[1440px] mx-auto px-6">
            <h1 className="text-[2.5rem] font-medium text-dark-blue font-serif mb-6">Post Not Found</h1>
            <p className="text-dark-blue text-base font-serif text-justify">
              The post you’re looking for doesn’t exist or has been removed.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, content } = post;

  return (
    <div>
      <Header />
      <article className="py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Post Title */}
          <h1 className="text-[2.5rem] font-medium text-dark-blue font-serif mb-6 text-center">{title}</h1>

          {/* Post Content */}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
}

SingleTemplate.query = gql`
  query GetPost($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
    }
  }
`;

SingleTemplate.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery?.uri,
  };
};