import React from "react";
import Meta from "components/Meta/Meta";

import FeaturedPosts from "components/FeaturedPosts";
import Header from "../components/Header";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "The Community for Gatsby Developers"
};

export default function Index({ data: { allMarkdownRemark: { edges } } }) {
  return (
    <div>
      <Meta data={meta} />
      <Header />
      <FeaturedPosts posts={edges} />
    </div>
  );
}

export const query = graphql`
  query featuredPosts {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            _PARENT
            parent
          }
        }
      }
    }
  }
`;
