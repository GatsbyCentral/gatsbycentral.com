import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "components/layout";

import Meta from "components/Meta/Meta";

import PostList from "components/Post/PostList/PostList.js";
import Container from "components/Layout/Container";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "Become a GatsbyJS master"
};

const Index = props => {
  const { edges: posts } = props.data.posts;
  const { nextPagePath, previousPagePath } = props.pageContext;
  debugger;

  return (
    <Layout>
      <Container>
        <Meta data={meta} />
        <div>Testing pagination</div>
        <H2 id="posts">Posts</H2>
        <PostList posts={posts} />
        {previousPagePath ? <Link to={previousPagePath}>Previous</Link> : null}
        {" - "}
        {nextPagePath ? <Link to={nextPagePath}>Next</Link> : null}
      </Container>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query postList($limit: Int!, $skip: Int!) {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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

const H2 = styled.h2`
  margin-top: 3rem;
`;
