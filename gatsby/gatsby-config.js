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
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "snippets",
        path: `${__dirname}/content/snippets`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "starters",
        path: `${__dirname}/content/starters`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "comments",
        path: `${__dirname}/_data/comments/`
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        dir: `${__dirname}/src/images`, // only process this directory
        // svgr options
        icon: true,
        viewBox: true
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
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap"
  ]
};
