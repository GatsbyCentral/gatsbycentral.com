import React from "react";
import Meta from "components/Meta/Meta";
import styled from "styled-components";
import Layout from "components/layout";

const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <Meta data={{ title: "Community" }} />
        <h1>Community</h1>
        <Segment>
          <h2>Meetup</h2>
          <p>You're running a local meetup? Add it here (PR)!</p>
          <h3>Germany</h3>
          <ul>
            <li>
              <a href="https://www.meetup.com/gatsbyjs" target="_blank">
                Berlin
              </a>
            </li>
          </ul>
          <h2>Stack Overflow</h2>
          Find help on the number one resource for devs. You can find questions
          related to Gatsby{" "}
          <a
            href="https://stackoverflow.com/questions/tagged/gatsby"
            target="_blank"
          >
            here.
          </a>
        </Segment>
        <Segment>
          <h2>Hashnode</h2>
          Discussions and stories for developers. Get started at the{" "}
          <a href="https://hashnode.com/n/gatsby">Gatsby</a> community there.
        </Segment>
        <iframe
          width="225"
          height="570"
          src="http://meetu.ps/3hWjzY"
          frameBorder="0"
        />
      </div>
    </Layout>
  );
};

export default CommunityPage;

const Segment = styled.div`
  margin-bottom: 2rem;
`;
