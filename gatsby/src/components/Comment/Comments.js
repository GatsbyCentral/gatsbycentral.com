import React from "react";
import { map } from "ramda";

import CommentForm from "./CommentForm";

const renderComments = map(comment => (
  <div>
    {comment.node.message} by {comment.node.name}
  </div>
));

const Comments = ({ post, comments }) => {
  return (
    <div>
      <h1>Comments</h1>
      <CommentForm post={post} />
      {renderComments(comments)}
    </div>
  );
};

export default Comments;
