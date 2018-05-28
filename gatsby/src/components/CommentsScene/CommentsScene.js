import React from "react";
import { map, isNil } from "ramda";
import { H1 } from "../Style/Headings/H1";

import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const renderComments = map(comment => (
  <Comment key={comment.node.date} comment={comment} />
));

const CommentsScene = ({ postId, comments }) => {
  return (
    <div>
      <H1>Comments</H1>
      {!isNil(comments) ? renderComments(comments.edges) : null}
      <CommentForm postId={postId} />
    </div>
  );
};

export default CommentsScene;
