import React from "react";
import Meta from "components/Meta/Meta";

import H1 from "components/Style/Headings/H1.js";

import Container from "components/Layout/Container";

const Privacy = () => {
  return (
    <Container>
      <Meta data={{ title: "Privacy" }} />
      <H1 centered={true}>Privacy</H1>
      <p>
        This site is run by chmac Ltd, 170B Great Junction Street, Edinburgh,
        EH6 5LJ, UK. chmac Ltd is incorporated in Scotland with company number
        SC519133.
      </p>

      <h2>Google Analytics</h2>
      <p>We use Google Analytics to measure:</p>
      <ul>
        <li>How many people have visited this web site.</li>
        <li>
          Which articles people are visiting, how long they are staying on each
          article.
        </li>
        <li>How visitors found this web site.</li>
      </ul>
      <p>
        We cannot identify you personally on Google Analytics. There is no way
        for us to know who you are. You can read Google’s privacy policy{" "}
        <a href="https://policies.google.com/privacy" target="_blank">
          here
        </a>.
      </p>

      <h2>MailChimp</h2>
      <p>
        If you choose to sign up for our email newsletter (we hope you will), we
        use MailChimp. You’re free to unsubscribe at any time. If you want us to
        delete your entire history on MaiChimp at any time, contact
        callum@superlumen.io and we’ll do that.
      </p>
      <p>We’ll email you about:</p>
      <ul>
        <li>New articles we think you will be interested in reading.</li>
        <li>
          Products that we think you will be interested in learning about.
        </li>
      </ul>
      <p>We won’t sell or rent your data to anyone else.</p>
      <p>
        Feel free to read MailChimp’s{" "}
        <a href="https://mailchimp.com/legal/privacy/" target="_blank">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="https://mailchimp.com/legal/terms/" target="_blank">
          terms
        </a>.
      </p>

      <h2>Questions</h2>
      <p>
        If anything about privacy policy is not clear, or you have any
        questions, contact callum@superlumen.io.
      </p>
    </Container>
  );
};

export default Privacy;
