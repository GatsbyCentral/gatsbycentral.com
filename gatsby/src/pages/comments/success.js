import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Component = styled.div`
  text-align: center;
  margin-top: 20%;
`;

const CommentsSuccess = () => (
  <Component>
    <h1>Thanks for commenting</h1>
    <p>Your comment will be reviewed soon.</p>
    <Link to="/posts">All Posts</Link>
  </Component>
);

export default CommentsSuccess;
