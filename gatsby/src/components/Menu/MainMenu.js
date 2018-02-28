import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  height: 2em;
  line-height: 2em;
`;

const MainMenu = () => {
  return <Container>Menu</Container>;
};

export default MainMenu;
