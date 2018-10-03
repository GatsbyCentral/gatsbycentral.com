import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Meta from "components/Meta/Meta";
import Layout from "components/layout.js";
import SubscribeForm from "components/SubscribeForm";
import Comments from "components/CommentsScene/CommentsScene";
import Share from "components/Share";
import BasicContent from "components/Layout/Content";
import RelatedPosts from "components/Post/RelatedPosts/RelatedPosts";
import ReactStars from "react-stars";

const Content = styled(BasicContent)`
  @media (max-width: 900px) {
    font-size: 1.5rem;
    color: hsla(0, 0%, 0%, 0.9);
  }
`;

const submitRating = (rating, path) => {
  const data = {
    "fields[rating]": rating,
    "fields[postPath]": path,
    "options[reCaptcha][siteKey]": "6LeCvWMUAAAAAAYxtvLnM1HMzHIdoofRlV_4wPy4"
  };

  const XHR = new XMLHttpRequest();
  let urlEncodedData = "";
  let urlEncodedDataPairs = [];
  let name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
    );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", function(event) {
    alert("Thanks for rating us! Your rating will appear soon. Stay tuned..");
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function(event) {
    alert("Sorry, something went wrong. Please file an issue in github!");
  });

  // Set up our request
  XHR.open(
    "POST",
    "https://api.staticman.net/v2/entry/GatsbyCentral/gatsbycentral.com/master/ratings"
  );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
};

export default function Template(props) {
  const {
    markdownRemark,
    relatedPosts,
    allCommentsJson: comments,
    allRatingsJson: ratings = []
  } = props.data;
  const { frontmatter, html, timeToRead, excerpt } = markdownRemark;

  const ratingValue =
    ratings && ratings.edges
      ? ratings.edges.reduce(
          (accumulator, rating) => accumulator + parseInt(rating.node.rating),
          0
        ) / ratings.totalCount
      : 0;
  const ratingCount = ratings && ratings.edges ? ratings.totalCount : 0;

  return (
    <Layout>
      <Content>
        <Meta
          data={{
            ...frontmatter,
            description: excerpt,
            rating: { ratingValue, ratingCount: ratingCount }
          }}
          rich
        />
        <h1>{frontmatter.title}</h1>
        <Time>{timeToRead} min read</Time>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {/* TODO calculate score in gatsby-node*/}
        {ratings ? (
          <Rating>
            Rating: {ratingValue !== 0 ? ratingValue.toFixed(1) : null} -{" "}
            {ratings.totalCount} Reviews
          </Rating>
        ) : null}
        Is this post useful to you? Please give us a rating!
        <ReactStars
          onChange={rating => {
            submitRating(rating, frontmatter.path);
          }}
          half={false}
          size={36}
        />
        <SubscribeForm />
        <Share path={frontmatter.path} />
        <LastUpdated>
          <em>Post last updated: {frontmatter.date}</em>
        </LastUpdated>
        <Comments postId={frontmatter.path} comments={comments} />
        {relatedPosts ? <RelatedPosts posts={relatedPosts} /> : null}
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $tags: [String]) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tags }, path: { ne: $path } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
          }
        }
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
    allRatingsJson(
      filter: { postPath: { eq: $path } }
      sort: { fields: [date], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          rating
        }
      }
    }
  }
`;

const LastUpdated = styled.p`
  margin-top: 4rem;
`;
const Time = styled.span`
  font-size: 1rem;
  color: silver;
`;
const Rating = styled.div`
  font-size: 1.5rem;
`;
