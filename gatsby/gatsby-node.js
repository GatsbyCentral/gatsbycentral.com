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

const R = require("ramda");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
              tags
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
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          tags: node.frontmatter.tags
        }
      });
    });

    return posts;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // For comment nodes (which are stored in JSON) parse the `message` field from
  // markdown into HTML, and add it to the node as a field called `messageHtml`.
  // Then we can use that field to render the comments.
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

  // console.log(R.path("internal.type")(node));
  // console.log(node.parent);
  if (R.path(["internal", "type"])(node) === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(R.prop("parent", node));

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: "collection",
      value: R.prop("sourceInstanceName", parent)
    });
  }
};
