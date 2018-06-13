import React from "react";
import Meta from "components/Meta/Meta";
import Link from "gatsby-link";

import SubscribeForm from "components/SubscribeForm";
import Comments from "components/CommentsScene/CommentsScene";

import BasicContent from "components/Layout/Content";

const Content = BasicContent.extend`
  @media (max-width: 900px) {
    font-size: 1.5rem;
    color: hsla(0, 0%, 0%, 0.9);
  }
`;

export default function Template({ data }) {
  const { markdownRemark, allCommentsJson: comments } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  return (
    <Content>
      <Meta data={{ ...frontmatter, description: excerpt }} rich />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        <em>Last updated: {frontmatter.date}</em>
      </p>
      <SubscribeForm />
      <Comments postId={frontmatter.path} comments={comments} />
      <Link to="/posts">All Posts</Link>
    </Content>
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
    allCommentsJson(
      filter: { postPath: { eq: $path } }
      sort: { fields: [date], order: ASC }
    ) {
      edges {
        node {
          id
          name
          date
          fields {
            messageHtml
          }
        }
      }
    }
  }
`;
