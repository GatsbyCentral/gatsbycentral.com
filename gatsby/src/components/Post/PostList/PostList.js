import React from "react";
import { map, partial } from "ramda";

import PostListItem from "./components/PostListItem";
import Container from "components/Layout/Container";

const renderPost = (showTags, post) => (
  <PostListItem item={post} key={post.node.id} showTags={showTags} />
);

const PostList = ({ posts, showTags }) => {
  return <Container>{map(partial(renderPost, [showTags]), posts)}</Container>;
};

export default PostList;
