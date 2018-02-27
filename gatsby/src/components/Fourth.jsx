import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Fourth(props) {
  return (
    <section id="four" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2>You want to stay up to date?</h2>
        </header>
        <p>Sign up for the newsletter.</p>
        <ul className="actions uniform">
          <li>
            <a href="#" className="button special">
              Sign Up
            </a>
          </li>
          {/*<li>*/}
          {/*<a href="#" className="button">*/}
          {/*Learn More*/}
          {/*</a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </section>
  );
}
