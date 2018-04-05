import React from "react";
import styled from "styled-components";
import { map } from "ramda";
import Link from "gatsby-link";

const Title = styled.h2`
  text-align: center;
  border: none;
`;

const Posts = styled.div`
  text-align: center;
  font-size: 2rem;
  line-height: 4rem;
  a {
    //color: rgb(102, 102, 102);
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
      <Posts>
        <div>
          <Link to="/what-is-gatsby-exactly">What is Gatsby exactly?</Link>
        </div>
        <div>
          <Link to="/introduction-to-gatsby-data-flow">
            Introduction to Gatsby data flow
          </Link>
        </div>
        <div>
          <Link to="/meta-tags-in-gatsby">Meta Tags in Gatsby</Link>
        </div>
      </Posts>
    </div>
  );
};

export default FeaturedPosts;
