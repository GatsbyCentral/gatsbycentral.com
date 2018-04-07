import React from "react";
import { map } from "ramda";

import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const renderComments = map(comment => (
  <Comment key={comment.email} comment={comment} />
));

const CommentsScene = ({ post, comments }) => {
  return (
    <div>
      <h1>Comments</h1>
      {renderComments(comments)}
      <CommentForm post={post} />
    </div>
  );
};

export default CommentsScene;
