import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import MainMenu from "components/Menu/MainMenu";
import Footer from "components/Footer";

import "typeface-source-sans-pro";
import "./layout.css";
// Import the prismjs theme for syntax highlighting in markdown
import "prismjs/themes/prism-coy.css";

import Container from "components/Layout/Container";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu />
        <Container>
          <div style={{ flex: 1 }}>{props.children}</div>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
