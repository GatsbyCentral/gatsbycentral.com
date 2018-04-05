import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  max-width: 900px;
  margin: auto;
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export default Container;
