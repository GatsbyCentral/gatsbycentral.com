import React from "react";
import { map } from "ramda";

import PostListItem from "./components/PostListItem";

const renderPosts = map(post => <PostListItem item={post} />);

const PostList = ({ posts }) => {
  return <div>{renderPosts(posts)}</div>;
};

export default PostList;
