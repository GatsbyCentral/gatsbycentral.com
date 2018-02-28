import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Footer = props => {
  return (
    <Container>
      &copy;{" "}
      <a href="https://superlumen.io" target="_blank">
        superlumen.io
      </a>
    </Container>
  );
};

export default Footer;
