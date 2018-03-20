import React from "react";
import Meta from "components/Meta/Meta";
import Link from "gatsby-link";

import SubscribeForm from "components/SubscribeForm";

import Container from "components/Container";

export default function Template({ data, pathContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  return (
    <Container>
      <Meta data={{ ...frontmatter, description: excerpt }} />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        <em>Last updated: {frontmatter.date}</em>
      </p>
      <SubscribeForm />
      <Link to="/posts">All Posts</Link>
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
