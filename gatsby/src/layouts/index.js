import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import { default as BasicContainer } from "components/Layout/Container";
import MainMenu from "components/Menu/MainMenu";
import Footer from "components/Footer";

import "./index.css";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = BasicContainer.extend`
  min-height: 100%;
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu />
        <Container>
          <div>{props.children()}</div>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
