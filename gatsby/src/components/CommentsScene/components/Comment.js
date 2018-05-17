import React from "react";
import styled from "styled-components";
import moment from "moment";

const Comment = styled.div`
  border-bottom: 1px solid silver;
  padding: 1rem 0;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;
const Message = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
const Author = styled.span`
  font-weight: 800;
`;
const Date = styled.span``;

const Element = ({ comment: { node: comment } }) => {
  return (
    <Comment>
      <Message>{comment.message}</Message>
      {/* Date is `timestamp-seconds` format. Convert with `moment.unix()` */}
      <Date>{moment.unix(comment.date).format("LLL")}</Date> by{" "}
      <Author>{comment.name}</Author>
    </Comment>
  );
};

export default Element;
