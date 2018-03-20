const { name } = require("./package.json");

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    siteUrl: "https://www.gatsbycentral.com",
    author: "superlumen.io",
    title: `Gatsby Central`
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-next",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dir: `${__dirname}/src/images`, // only process this directory
        // svgr options
        icon: true,
        viewBox: false
        // see https://github.com/smooth-code/svgr for a list of all options
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-"
            }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp"
  ]
};
