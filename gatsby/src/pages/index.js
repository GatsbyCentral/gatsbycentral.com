import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "components/layout";

import Meta from "components/Meta/Meta";

import PostList from "components/Post/PostList/PostList.js";
import Container from "components/Layout/Container";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "The Community for Gatsby Developers"
};

// These posts are filtered from the `posts` array to be shown in the "Start
// Here" section of the homepage.
const featuredPostPaths = [
  "/what-is-gatsby-exactly",
  "/introduction-to-gatsby-data-flow",
  "/gatsby-v2"
];

const Index = props => {
  const { edges: posts } = props.data.posts;
  const { edges: snippets } = props.data.snippets;
  // const { edges: starters } = props.data.starters;
  const { edges: tutorials } = props.data.tutorials;

  // Find our featured posts by iterating over the `featuredPostPaths` array and
  // finding each post in turn from the `posts` array.
  const featuredPosts = featuredPostPaths.map(path =>
    posts.find(post => post.node.frontmatter.path === path)
  );
  return (
    <Layout>
      <Container>
        <Meta data={meta} />
        <Banner>Become a GatsbyJS master</Banner>
        <Sub>Build static sites with the stack you love</Sub>
        <H2>Start here</H2>
        <PostList posts={featuredPosts} />
        <H2 id="posts">Posts</H2>
        <PostList posts={posts} />
        <H2 id="tutorials">Tutorials</H2>
        <PostList posts={tutorials} />
        <H2 id="snippets">Snippets</H2>
        <PostList posts={snippets} />
        {/*<H2 id="starters">Starters</H2>*/}
        {/*<PostList posts={starters} />*/}
      </Container>
    </Layout>
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
    tutorials: allMarkdownRemark(
      filter: { fields: { collection: { eq: "tutorials" } } }
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
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
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
    starters: allMarkdownRemark(
      filter: { fields: { collection: { eq: "starters" } } }
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
`;

const H2 = styled.h2`
  margin-top: 3rem;
`;
