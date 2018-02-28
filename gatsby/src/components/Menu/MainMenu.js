import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Container from "components/Layout/Container";

const Wrapper = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const MenuItem = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  display: inline;
`;

const MainMenu = () => {
  return (
    <Wrapper>
      <Container>
        <MenuItem>
          <Link to="/">Gatsby Central</Link>
        </MenuItem>
        {/*<MenuItem>Posts</MenuItem>*/}
      </Container>
    </Wrapper>
  );
};

export default MainMenu;
