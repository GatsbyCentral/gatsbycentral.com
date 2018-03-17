import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Item = styled(Link)`
  color: white;
`;

const Header = () => (
  <div
    style={{
      background: "#3D348B",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Item to="/">Gatsby Central</Item>
      </h1>
    </div>
  </div>
);

export default Header;
