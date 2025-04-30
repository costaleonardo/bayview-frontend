import { gql } from "@apollo/client";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SingleTemplate(props) {
  const { title, content } = props.data.post;

  return (
    <div>
      <Header />
      <article className="py-12 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Post Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{title}</h1>

          {/* Post Content */}
          <div
            className="prose prose-lg prose-dark-blue max-w-none mx-auto"
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