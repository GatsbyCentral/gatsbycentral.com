import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import image_1 from "../images/pic02.jpg";
import image_2 from "../images/pic03.jpg";
import image_3 from "../images/pic04.jpg";

export default function Third(props) {
  return (
    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Gatsby Academy</h2>
        </header>
        <p>Tutorials, HowTo's, Guides</p>
        <div className="row 150%">
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit">
              <img src={image_1} alt="" />
            </span>
            <h3>Listen</h3>
            <p>
              Walk through the resources which guide you on you path with
              gatsby.
            </p>
            <ul className="actions">
              {/*<li>*/}
              {/*<a href="#" className="button">*/}
              {/*More*/}
              {/*</a>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit">
              <img src={image_2} alt="" />
            </span>
            <h3>Learn</h3>
            <p>
              Internalize the concepts on how to build static, but still
              dynamic, sites with gatsby.
            </p>
            <ul className="actions">
              {/*<li>*/}
              {/*<a href="#" className="button">*/}
              {/*More*/}
              {/*</a>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit">
              <img src={image_3} alt="" />
            </span>
            <h3>Build</h3>
            <p>
              Use your newly earned knowledge and build your high performance
              websites.
            </p>
            <ul className="actions">
              {/*<li>*/}
              {/*<a href="#" className="button">*/}
              {/*More*/}
              {/*</a>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
