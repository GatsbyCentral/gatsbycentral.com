import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

// NOTE Only valid for posts at the moment: hardcoded url.
const Share = ({ path }) => {
  const url = `https://www.gatsbycentral.com/post${path}`;
  return (
    <div>
      <h2>Share</h2>
      <p>
        If you'd like to share this post, here are some handy links to make that
        easier.
      </p>
      <Component>
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon />
        </LinkedinShareButton>
        <RedditShareButton url={url}>
          <RedditIcon />
        </RedditShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon />
        </GooglePlusShareButton>
        <TumblrShareButton url={url}>
          <TumblrIcon />
        </TumblrShareButton>
        <EmailShareButton url={url}>
          <EmailIcon />
        </EmailShareButton>
      </Component>
    </div>
  );
};

export default Share;

const Component = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 4rem;
`;
