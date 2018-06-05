const path = require("path");
const _ = require("lodash");
const toHAST = require(`mdast-util-to-hast`);
const hastToHTML = require(`hast-util-to-html`);
const Remark = require(`remark`);

// Initialise remark
const remark = new Remark().data(`settings`, {
  commonmark: true,
  footnotes: true,
  pedantic: true
});

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate
      });
    });

    return posts;
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  // If this is a YAML node
  if (_.get(node, "internal.type") === `CommentsJson`) {
    // Generate an HTML version of the markdown field `message`
    const ast = remark.parse(_.get(node, "message"));
    const htmlAst = toHAST(ast, { allowDangerousHTML: true });
    const html = hastToHTML(htmlAst, {
      allowDangerousHTML: true
    });

    createNodeField({
      node,
      name: "messageHtml",
      value: html
    });
  }
};
