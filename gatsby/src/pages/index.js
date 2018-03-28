import React from "react";
import Meta from "components/Meta/Meta";

import FeaturedPosts from "components/FeaturedPosts";
import Header from "components/Header";
import Container from "components/Layout/Container";

// SEO meta data for the homepage.
const meta = {
  // Omit title for homepage to apply Helmet's default value. Otherwise title
  // will be  duplicated (both `Gatsby Central`).
  description: "The Community for Gatsby Developers"
};

export default function Index(props) {
  return (
    <Container>
      <Meta data={meta} />
      <Header />
      <FeaturedPosts />
    </Container>
  );
}
