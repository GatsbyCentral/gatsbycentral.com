import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta/Meta";
import Container from "components/Layout/Container";
import H1 from "components/Style/Headings/H1.js";

const Snippets = props => {
  return (
    <Container>
      <Meta
        data={{
          title: "CheatSheet",
          description: "GatsbyJS CheatSheet"
        }}
      />
      <H1 centered={true}>CheatSheet</H1>
      <Content>
        <Item>
          <Header>CLI</Header>
          <Code>gatsby new [path] [starter]</Code>
        </Item>
        <Item>
          <Header>Query data via GraphQL</Header>
          <Code>
            {"export const query = graphql`\n" +
              "  query AboutSite{\n" +
              "    site {\n" +
              "      siteMetadata {\n" +
              "        title\n" +
              "      }\n" +
              "    }\n" +
              "  }\n" +
              "`;"}
          </Code>
        </Item>
        <Item>
          <Header>Plugins</Header>
          <Code>
            {"  plugins: [\n" +
              '    "gatsby-plugin-resolve-src",\n' +
              "    {\n" +
              '      resolve: "gatsby-source-filesystem",\n' +
              "      options: {\n" +
              '        name: "content",\n' +
              "        path: `${__dirname}/content`\n" +
              "      }\n" +
              "    }]"}
          </Code>
        </Item>
      </Content>
    </Container>
  );
};

export default Snippets;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;

const Item = styled.div`
  box-shadow: 2px 2px 8px #888;
  padding: 1rem;
  margin: 0.5rem;
  max-width: 500px;
`;

const Header = styled.div``;

const Code = styled.code`
  display: block;
  white-space: pre-wrap;
`;
