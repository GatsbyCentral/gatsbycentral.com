import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Footer(props) {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/gatsbycentral"
            className="icon alt fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/pg/Gatsby-Central-175136329785915"
            className="icon alt fa-facebook"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        {/*<li>*/}
        {/*<a href="#" className="icon alt fa-instagram">*/}
        {/*<span className="label">Instagram</span>*/}
        {/*</a>*/}
        {/*</li>*/}
        <li>
          <a
            href="https://github.com/gatsbycentral"
            className="icon alt fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        {/*<li>*/}
        {/*<a href="#" className="icon alt fa-envelope">*/}
        {/*<span className="label">Email</span>*/}
        {/*</a>*/}
        {/*</li>*/}
      </ul>
      <ul className="copyright">
        <li>
          &copy;{" "}
          <a href="https://superlumen.io" target="_blank">
            superlumen.io
          </a>
        </li>
        <li>
          Design:{" "}
          <a href="http://html5up.net" target="_blank">
            HTML5 UP
          </a>
        </li>
      </ul>
    </section>
  );
}
