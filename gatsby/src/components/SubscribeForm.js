import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Form = styled.form`
  width: 100%;
  display: inline-block;
  margin-top: 2rem;
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
      action="https://gatsbycentral.us18.list-manage.com/subscribe/post?u=7ba5fb7dfe0be75fbc4a20b01&amp;id=d5b2592fff"
      method="post"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>Subscribe</h2>
      <p>
        We will send you emails about new articles posted here, and in the
        future, emails about products which Gatsby Central will sell. See{" "}
        <Link to="/privacy">privacy</Link> for more info.
      </p>
      <p style={{ fontSize: "0.8em" }}>
        We use MailChimp as our marketing automation platform. By clicking
        "Submit" to submit this form, you acknowledge that the information you
        provide will be transferred to MailChimp for processing in accordance
        with their{" "}
        <a
          href="https://mailchimp.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://mailchimp.com/legal/terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>.
      </p>
      <Input
        type="email"
        name="EMAIL"
        label="Subscribe to our Newsletter for music lovers"
        placeholder="eMail"
      />
      <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
        <input
          type="text"
          name="b_7ba5fb7dfe0be75fbc4a20b01_d5b2592fff"
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
