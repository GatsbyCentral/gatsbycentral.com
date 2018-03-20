import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: inline-block;
  margin-top: 2rem;
`;
const Label = styled.label`
  font-size: 1.5rem;
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
const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 70%;
  line-height: 2rem;
`;

const SubscribeForm = props => {
  return (
    <Form
      action="https://superlumen.us11.list-manage.com/subscribe/post?u=29cc54e2162c3639daa008bd1&amp;id=40f8310806"
      method="post"
      target="_blank"
    >
      <Label>Get the latest Gatsby tips straight to your inbox</Label>
      <Input
        type="email"
        name="EMAIL"
        label="Subscribe to our Newsletter for music lovers"
        placeholder="eMail"
      />
      <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
        <input
          type="text"
          name="b_1c6b7ca3255dba0ca2da27a42_16ba39cfff"
          tabIndex="-1"
          value=""
        />
      </div>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SubscribeForm;
