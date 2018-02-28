import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import classNames from "classnames";
import theme from "../styles/theme.js";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>{this.props.children()}</div>
      </ThemeProvider>
    );
  }
}
