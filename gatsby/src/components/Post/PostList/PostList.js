import React from "react";
import { map } from "ramda";

import PostListItem from "./components/PostListItem";
import Container from "components/Layout/Container";

const renderPosts = map(post => <PostListItem item={post} />);

const PostList = ({ posts }) => {
  return <Container>{renderPosts(posts)}</Container>;
};

export default PostList;
