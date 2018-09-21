import React from "react";
import { Link } from "gatsby";
import { H1 as StyledH1 } from "../../Style/Headings/H1";
import styled from "styled-components";

const RelatedPosts = props => {
  const { posts } = props;
  if (posts.length === 0) return;
  return (
    <div>
      <H1>Related Posts</H1>
      {posts.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;

const H1 = styled(StyledH1)`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;
