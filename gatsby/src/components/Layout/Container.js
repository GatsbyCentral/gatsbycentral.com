import styled from "styled-components";
import { Container as BaseContainer } from "unstyled";

const Container = styled(BaseContainer).attrs({ title: "test" })`
  flex: 1;
  max-width: 900px;
  margin: auto;
  width: auto;
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0 1rem;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: auto;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  @media only screen and (min-width: 1200px) {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Container;
