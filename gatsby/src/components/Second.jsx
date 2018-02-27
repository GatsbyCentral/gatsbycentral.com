import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Second(props) {
  return (
    <section id="two" className="main style2">
      <div className="container">
        <div className="row 150%">
          <div className="6u 12u$(medium) custom-medium">
            <ul className="major-icons">
              <li>
                <span className="icon style1 major fa-code" />
              </li>
              <li>
                <span className="icon style2 major fa-bolt" />
              </li>
              <li>
                <span className="icon style3 major fa-camera-retro" />
              </li>
              <li>
                <span className="icon style4 major fa-cog" />
              </li>
              <li>
                <span className="icon style5 major fa-desktop" />
              </li>
              <li>
                <span className="icon style6 major fa-calendar" />
              </li>
            </ul>
          </div>
          <div className="6u 12u$(medium) custom-medium">
            <header className="major">
              <h2>Docs and Resources</h2>
            </header>
            <p>
              Find documentation on how to succeed with gatsby. Most of your
              problems are already solved, you just have to find where.
            </p>
            <p>We show you all the places where you get help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
