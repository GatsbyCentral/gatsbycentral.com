import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Element = styled.div``;

const PostListItem = ({ item }) => {
  const { node: post } = item;
  return (
    <Element key={post.id}>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>{" "}
    </Element>
  );
};

export default PostListItem;
