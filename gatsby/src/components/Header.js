import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 3rem;
  p {
    font-size: 1.5rem;
  }
`;

export default function Header(props) {
  return (
    <section id="">
      <div className="inner">
        <Heading>
          <h1>Become a master of GatsbyJS</h1>
          <p>Build static sites with the stack you love</p>
        </Heading>
      </div>
    </section>
  );
}
