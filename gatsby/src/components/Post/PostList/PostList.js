import React from "react";
import styled from "styled-components";
import { map } from "ramda";

import PostListItem from "./components/PostListItem";
import Container from "components/Container";

const renderPosts = map(post => <PostListItem item={post} />);

const PostList = ({ posts }) => {
  return <Container>{renderPosts(posts)}</Container>;
};

export default PostList;
