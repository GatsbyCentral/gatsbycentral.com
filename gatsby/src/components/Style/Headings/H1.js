import React from "react";
import styled from "styled-components";

export const H1 = styled.h1`
  text-align: ${centered => (centered ? "center" : "left")};
`;

export default H1;
