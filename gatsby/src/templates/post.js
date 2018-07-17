import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Meta from "components/Meta/Meta";
import Layout from "components/layout.js";
import SubscribeForm from "components/SubscribeForm";
import Comments from "components/CommentsScene/CommentsScene";
import Share from "components/Share";
import BasicContent from "components/Layout/Content";

const Content = BasicContent.extend`
  @media (max-width: 900px) {
    font-size: 1.5rem;
    color: hsla(0, 0%, 0%, 0.9);
  }
`;

export default function Template(props) {
  const { markdownRemark, allCommentsJson: comments } = props.data;
  const { frontmatter, html, excerpt } = markdownRemark;

  return (
    <Layout>
      <Content>
        <Meta data={{ ...frontmatter, description: excerpt }} rich />
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <SubscribeForm />
        <Share path={frontmatter.path} />
        <LastUpdated>
          <em>Post last updated: {frontmatter.date}</em>
        </LastUpdated>
        <Comments postId={frontmatter.path} comments={comments} />
      </Content>
    </Layout>
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

const LastUpdated = styled.p`
  margin-top: 4rem;
`;
