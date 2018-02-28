import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import Container from "components/Layout/Container";
import MainMenu from "components/Menu/MainMenu";
import Footer from "components/Footer";

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainMenu />
        <Container>
          <div>{props.children()}</div>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
