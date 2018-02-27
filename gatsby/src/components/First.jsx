import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import image_0 from "../images/pic01.jpg";

export default function First(props) {
  return (
    <section id="one" className="main style1">
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium) custom-medium">
            <header className="major">
              <h2>Gatsby Community </h2>
            </header>
            <p>
              Join the GatsbyJS community. Get help for your problems from
              experts. Discuss best practices and learn from each other.
            </p>
          </div>
          <div className="6u 12u$(medium) important(medium) custom-medium">
            <span className="image fit">
              <img src={image_0} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
