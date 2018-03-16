import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>
      This is a starter project for gatsby that we us for our own purpose. Hence
      it is very opinionated.
    </p>
    <p>Now go build something great.</p>
    <Link to="/about/">Gatsby Central</Link>
  </div>
);

export default IndexPage;
