import React from "react";
import styled from "styled-components";
import BasicLink from "components/Style/Elements/Link.js";

const Element = styled.div`
  margin-bottom: 0.5rem;
`;
const Link = styled(BasicLink)`
  font-size: 1.2rem;
`;

const PostListItem = ({ item }) => {
  const { node: post } = item;
  return (
    <Element>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </Element>
  );
};

export default PostListItem;
