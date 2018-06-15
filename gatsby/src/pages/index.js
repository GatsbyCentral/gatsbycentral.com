import React from "react";
import Meta from "components/Meta/Meta";

import FeaturedPosts from "components/FeaturedPosts";
import Container from "components/Layout/Container";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "The Community for Gatsby Developers"
};

const Posts = props => {
  const { edges: posts } = props.data.posts;
  return (
    <Container>
      <Meta data={{ title: "All Posts" }} />
      <PostList posts={posts} />
    </Container>
  );
};

const Index = props => {
  return (
    <Container>
      <Meta data={meta} />
      <h1>Become a master of GatsbyJS</h1>
      <p>Build static sites with the stack you love</p>
      <FeaturedPosts />
    </Container>
  );
};

export default Index;

export const query = graphql`
  query indexPosts {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "pages" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
