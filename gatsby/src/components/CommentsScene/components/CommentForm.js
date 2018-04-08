import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: wrap column;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 100%;
  line-height: 2rem;
  margin-bottom: 1rem;
  border: 1px solid rgb(238, 238, 238);
`;

const Textarea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 100%;
  line-height: 2rem;
  border-color: rgb(238, 238, 238);
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  padding: 0.5rem;
  width: 30%;
  line-height: 2rem;
`;

// Use the `path` (frontmatter) as the identifier for the post.
const CommentForm = ({ postId }) => {
  return (
    <Form
      method="POST"
      action="https://api.staticman.net/v2/entry/GatsbyCentral/gatsbycentral.com/comments/comments"
    >
      <input
        name="options[redirect]"
        type="hidden"
        value="https://www.gatsbycentral.com/comments/success"
      />
      <input name="options[slug]" type="hidden" value={postId} />
      <input name="fields[post]" type="hidden" value={postId} />
      <label>
        <Input name="fields[name]" type="text" placeholder="Name" required />
      </label>
      <label>
        <Input name="fields[email]" type="email" placeholder="eMail" required />
      </label>
      <label>
        <Textarea name="fields[message]" required />
      </label>

      <Button type="submit">Comment</Button>
    </Form>
  );
};

export default CommentForm;
