import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import FeaturedPosts from "components/FeaturedPosts";
import Header from "../components/Header";

import "../styles/main.scss";
import "../styles/custom.scss";

export default function Index({ data: { allMarkdownRemark: { edges } } }) {
  console.log(edges);
  return (
    <div>
      <Header />
      <FeaturedPosts posts={edges} />
    </div>
  );
}

export const query = graphql`
  query featuredPosts {
    allMarkdownRemark {
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
