import React from "react";
import Link from "gatsby-link";

export default function Header(props) {
  return (
    <section id="header">
      <div className="inner">
        <span className="icon major fa-cloud" />
        <h1>Gatsby Central</h1>
        <p />
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
