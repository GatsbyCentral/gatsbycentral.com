import React from "react";
import Layout from "components/layout";

class Redirect extends React.Component {
  componentDidMount() {
    alert("mounted");
  }
  render() {
    return <div>Redirect</div>;
  }
}

// const About = () => (
//   <Layout>
//     <div>
//       <h1>Gatsby Central</h1>
//       <Redirect />
//       <p>The Community for Gatsby Developer</p>
//       <a
//         href="https://www.gatsbycentral.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Find us here
//       </a>
//     </div>
//   </Layout>
// );

class About extends React.Component {
  componentDidMount() {
    alert("mounted");
    window.location.replace("http://ddg.gg/");
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>Gatsby Central</h1>
          <p>The Community for Gatsby Developer</p>
          <a
            href="https://www.gatsbycentral.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us here
          </a>
        </div>
      </Layout>
    );
  }
}

export default About;
