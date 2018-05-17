import React from "react";
import { map, isNil } from "ramda";

import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const renderComments = map(comment => (
  <Comment key={comment.node.date} comment={comment} />
));

const CommentsScene = ({ postId, comments }) => {
  return (
    <div>
      <h1>Comments</h1>
      {!isNil(comments) ? renderComments(comments.edges) : null}
      <CommentForm postId={postId} />
    </div>
  );
};

export default CommentsScene;
