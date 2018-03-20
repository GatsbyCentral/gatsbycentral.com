import React from "react";
import styled from "styled-components";
import Twitter from "images/twitter.svg";
import Facebook from "images/facebook.svg";
import Github from "images/github.svg";

const Element = styled.div`
  margin-top: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 0.5rem;
  padding-top: 1rem;
`;

const Content = styled.div`
  max-width: 900px;
  margin: auto;
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
    <Element>
      <Content>
        &copy;{" "}
        <Link href="https://superlumen.io" target="_blank">
          superlumen.io
        </Link>
        <Right>
          <List>
            <Item>
              <a href="https://twitter.com/gatsbycentral" target="_blank">
                <Twitter style={{ width: "2em", height: "2em" }} />
              </a>
            </Item>
            <Item>
              <a href="https://www.facebook.com/gatsbycentral/" target="_blank">
                <Facebook style={{ width: "2em", height: "2em" }} />
              </a>
            </Item>
            <Item>
              <a href="https://github.com/gatsbycentral" target="_blank">
                <Github style={{ width: "2em", height: "2em" }} />
              </a>
            </Item>
          </List>
        </Right>
      </Content>
    </Element>
  );
};

export default Footer;
