import React from "react";
import styled from "styled-components";
import { map } from "ramda";
import Meta from "../components/Meta/Meta";
import Container from "components/Layout/Container";
import H1 from "components/Style/Headings/H1.js";

const Snippets = props => {
  return (
    <Container>
      <Meta
        data={{
          title: "Gatsby Starters for version 2",
          description: "Gatsby starter repos for the upcoming v2."
        }}
      />
      <H1 centered={true}>Gatsby v2 Starters</H1>
      <Item>
        <a
          href="https://github.com/GatsbyCentral/gatsby-starter-default-v2"
          target="_blank"
        >
          Gatsby Starter Default v2 (Alpha)
        </a>
      </Item>
    </Container>
  );
};

export default Snippets;

const Item = styled.div`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
`;
