import React from "react";
import Meta from "components/Meta/Meta";
import Link from "gatsby-link";

export default function Template({ data, pathContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <Meta data={frontmatter} />
      <h1>{frontmatter.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">Home</Link>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
