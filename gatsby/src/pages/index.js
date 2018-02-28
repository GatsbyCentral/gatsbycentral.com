import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import FeaturedPosts from "components/FeaturedPosts";
import Photon from "../Photon";
import Header from "../components/Header";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Footer from "../components/Footer";

import "../styles/main.scss";
import "../styles/custom.scss";

export default function Index({ data: { allMarkdownRemark: { edges } } }) {
  console.log(edges);
  return (
    <Photon>
      <Header />
      <FeaturedPosts posts={edges} />
      {/*<First />*/}
      {/*<Second />*/}
      {/*<Third />*/}
      {/*<Fourth />*/}
      {/*<Footer />*/}
    </Photon>
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
