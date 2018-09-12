import React from "react";
import { Link } from "gatsby";
import { H1 as StyledH1 } from "../../Style/Headings/H1";

const RelatedPosts = props => {
  const { posts } = props;
  if (!posts || posts.length === 0) return null;
  return (
    <div>
      <H1>Related Posts</H1>
      {posts.edges.map(post => (
        <div>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;

const H1 = StyledH1.extend`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;
