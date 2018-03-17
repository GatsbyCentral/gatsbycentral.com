import React from "react";
import styled from "styled-components";
import { map } from "ramda";
import Link from "gatsby-link";

const Title = styled.h2`
  text-align: center;
`;

const Posts = styled.div`
  text-align: center;
  font-size: 2rem;
  line-height: 4rem;
  a {
    color: rgb(102, 102, 102);
  }
`;

const renderPosts = map(post => (
  <div key={post.node.id}>
    <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
  </div>
));

const FeaturedPosts = props => {
  return (
    <div>
      <Title>Get Started</Title>
      <Posts>{renderPosts(props.posts)}</Posts>
    </div>
  );
};

export default FeaturedPosts;
