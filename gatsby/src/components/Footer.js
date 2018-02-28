import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 1rem;
`;

const Link = styled.a``;

const Footer = props => {
  return (
    <Container>
      &copy;{" "}
      <Link href="https://superlumen.io" target="_blank">
        superlumen.io
      </Link>
    </Container>
  );
};

export default Footer;
