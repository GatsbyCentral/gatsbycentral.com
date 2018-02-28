import React from "react";
import styled from "styled-components";

import Container from "components/Layout/Container";

const Wrapper = styled.div`
  margin-top: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 1rem;
`;

const Link = styled.a``;

const Right = styled.div`
  float: right;
`;

const Footer = props => {
  return (
    <Wrapper>
      <Container>
        &copy;{" "}
        <Link href="https://superlumen.io" target="_blank">
          superlumen.io
        </Link>
        <Right>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/gatsbycentral"
                className="icon alt fa-twitter"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/pg/Gatsby-Central-175136329785915"
                className="icon alt fa-facebook"
                target="_blank"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gatsbycentral"
                className="icon alt fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
