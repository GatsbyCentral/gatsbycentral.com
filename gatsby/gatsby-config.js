const { name } = require("./package.json");

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    author: "superlumen.io",
    title: `Gatsby Central`
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-next",
    "gatsby-plugin-catch-links",
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
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
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
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp"
  ]
};
