import React from "react";
import styled from "styled-components";
import BasicLink from "components/Style/Elements/Link.js";
import { path, map } from "ramda";

const Element = styled.div`
  margin-bottom: 0.5rem;
`;
const Link = styled(BasicLink)`
  font-size: 1.2rem;
`;

const TagList = ({ post }) => {
  const tags = path(["frontmatter", "tags"], post);

  if (!tags) {
    return null;
  }

  return (
    <Tags>
      {map(
        tag => (
          <Tag key={tag}>
            <a>#{tag}</a>
          </Tag>
        ),
        tags
      )}
    </Tags>
  );
};

const PostListItem = ({ item, showTags }) => {
  const { node: post } = item;
  return (
    <Element>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      {showTags ? <TagList post={post} /> : null}
    </Element>
  );
};

export default PostListItem;

const Tags = styled.div`
  font-size: 0.8rem;
`;

const Tag = styled.span`
  padding-right: 0.6rem;
`;
