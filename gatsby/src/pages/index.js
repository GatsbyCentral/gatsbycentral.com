import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Meta from "components/Meta/Meta";

import PostList from "components/Post/PostList/PostList.js";
import Container from "components/Layout/Container";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "The Community for Gatsby Developers"
};

const featuredPostPaths = [
  "/what-is-gatsby-exactly",
  "/introduction-to-gatsby-data-flow",
  "/meta-tags-in-gatsby"
];

const Index = props => {
  const { edges: posts } = props.data.posts;
  const featuredPosts = posts.filter(post =>
    featuredPostPaths.includes(post.node.frontmatter.path)
  );
  return (
    <Container>
      <Meta data={meta} />
      <Banner>Become a master of GatsbyJS</Banner>
      <Sub>Build static sites with the stack you love</Sub>
      <h2>Get Started</h2>
      <PostList posts={featuredPosts} />
      <br />
      <br />
      <h2>All posts</h2>
      <PostList posts={posts} />
    </Container>
  );
};

export default Index;

export const query = graphql`
  query indexPosts {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
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

const Banner = styled.h1`
  text-align: center;
  padding-top: 2rem;
`;

const Sub = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;
