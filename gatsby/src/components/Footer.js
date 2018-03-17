import React from "react";
import styled from "styled-components";

import Container from "components/Layout/Container";

const Wrapper = styled.div`
  margin-top: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 1rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const Right = styled.div`
  float: right;
`;

const List = styled.ul`
  display: inline;
  list-style-type: none;
`;

const Item = styled.li`
  display: inline;
  margin-right: 1rem;
  color: white;
  a {
    color: white;
  }
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
          <List>
            <Item>
              <a
                href="https://twitter.com/gatsbycentral"
                className="icon alt fa-twitter"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </Item>
            <Item>
              <a
                href="https://www.facebook.com/gatsbycentral/"
                className="icon alt fa-facebook"
                target="_blank"
              >
                <span className="label">Facebook</span>
              </a>
            </Item>
            <Item>
              <a
                href="https://github.com/gatsbycentral"
                className="icon alt fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </Item>
          </List>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
