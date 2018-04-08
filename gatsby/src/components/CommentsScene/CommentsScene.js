import React from "react";
import { map, isNil } from "ramda";

import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const renderComments = map(comment => (
  <Comment key={comment.node.email} comment={comment} />
));

const CommentsScene = ({ post, comments }) => {
  console.log(comments);
  return (
    <div>
      <h1>Comments</h1>
      {!isNil(comments) ? renderComments(comments.edges) : null}
      <CommentForm post={post} />
    </div>
  );
};

export default CommentsScene;
