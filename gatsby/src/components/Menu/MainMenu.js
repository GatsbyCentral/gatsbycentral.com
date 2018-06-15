import React from "react";
import styled from "styled-components";
import GatsbyLink from "gatsby-link";
import Container from "components/Layout/Container";

const Wrapper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const MenuItem = styled.div`
  font-size: ${props => props.size || "1.2rem"};
  padding: 0rem 0.5rem;
  display: inline;
`;

const Link = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`;
const MenuRight = styled.div`
  margin-left: auto;
  padding: 0;
`;

const MainMenu = () => {
  return (
    <Wrapper>
      <Container>
        <Menu>
          <MenuItem size="1.2rem">
            <Link to="/">Gatsby Central</Link>
          </MenuItem>
          <MenuRight>
            <MenuItem>
              <Link to="/#posts">Posts</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/#snippets">Snippets</Link>
            </MenuItem>
          </MenuRight>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default MainMenu;
