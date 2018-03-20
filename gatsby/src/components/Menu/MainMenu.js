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

const MenuItem = styled.div`
  font-size: ${props => props.size || "1.2rem"};
  padding: 1rem 0.5rem;
  display: inline;
`;

const Link = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`;

const MainMenu = () => {
  return (
    <Wrapper>
      <Container>
        <MenuItem size="1.5rem">
          <Link to="/">Gatsby Central</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/posts">All Posts</Link>
        </MenuItem>
      </Container>
    </Wrapper>
  );
};

export default MainMenu;
