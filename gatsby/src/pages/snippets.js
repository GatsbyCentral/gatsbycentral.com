import React from "react";
import styled from "styled-components";
import { map } from "ramda";
import Link from "gatsby-link";
import Meta from "../components/Meta/Meta";
import Container from "components/Layout/Container";
import H1 from "components/Style/Headings/H1.js";

const renderSnippets = map(snippet => {
  return (
    <Item to={snippet.node.frontmatter.path} key={snippet.node.id}>
      {snippet.node.frontmatter.title}
    </Item>
  );
});

const Snippets = props => {
  const { edges: snippets } = props.data.allMarkdownRemark;
  return (
    <Container>
      <Meta
        data={{
          title: "Snippets",
          description: "Code Snippets for common Gatsby tasks."
        }}
      />
      <H1 centered={true}>Snippets</H1>
      {renderSnippets(snippets)}
    </Container>
  );
};

export const query = graphql`
  query allSnippets {
    allMarkdownRemark(filter: { fields: { collection: { eq: "snippets" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Snippets;

const Item = styled(Link)`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
`;
