import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import MainMenu from "components/Menu/MainMenu";

const Heading = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 3rem;
`;

export default function Header(props) {
  return (
    <section id="">
      <div className="inner">
        <Heading>
          <h1>Gatsby Central</h1>
          <p>The community for gatsby developers</p>
        </Heading>
      </div>
    </section>
  );
}
