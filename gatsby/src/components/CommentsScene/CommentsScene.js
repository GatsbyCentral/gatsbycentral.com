import React from "react";
import { H1 as StyledH1 } from "../Style/Headings/H1";
import styled from "styled-components";

import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const CommentsScene = ({ postId, comments }) => {
  return (
    <div>
      <H1>Comments</H1>
      <p>
        Feedback? A point to make? Express yourself via the comment form below.
        <CaptchaInfo>
          Don't forget to check the captcha. Otherwise we won't receive your
          comment.
        </CaptchaInfo>
      </p>
      {comments && comments.edges && comments.edges.length ? (
        comments.edges.map((comment, i) => (
          <Comment key={comment.node.id} comment={comment} first={i === 0} />
        ))
      ) : (
        <p>Be the first to post a comment on this post</p>
      )}
      <CommentForm postId={postId} />
    </div>
  );
};

export default CommentsScene;

const H1 = StyledH1.extend`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

const CaptchaInfo = styled.p`
  color: #d81e5b;
`;
