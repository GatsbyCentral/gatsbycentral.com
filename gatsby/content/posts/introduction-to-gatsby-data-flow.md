---
path: "/introduction-to-gatsby-data-flow"
title: Introduction to Gatsby data flow
date: "2018-03-15"
---
You're looking at Gatsby. You've read a few things. How does data move through Gatsby? Where does the GraphQL schema come from?

> tl;dr Data goes from sources -> gatsby nodes -> GraphQL -> your components (layouts / pages).

## Gatsby nodes

Nodes are the centre of Gatsby data flow. When you've mastered the nodes system, everything else is easy!

You tell Gatsby where to get data from. Gatsby gets your data and puts into nodes. Then you write GraphQL queries in your components. Those queries fetch data from the nodes.

## Source plugins

You fetch data through source plugins. You configure them in `gatsby-config.js`. These source plugins fetch data and create nodes.

For example, there is a filesystem plugin. You can use this plugin to import files on disk. You might have markdown files on disk. This is how other static site generators work. Hugo and Jekyll are two examples.

You point the `gatsby-source-filesystem` plugin at your source folder. Then it reads all the files and creates `File` nodes. Those nodes include the complete contents of the files. The node also has the content type of the file.

## Transformer plugins

Many source plugins work hand in hand with transformer plugins. You import a directory of markdown files. Then you want to show the contents in a component. Your markdown needs to be transformed into HTML. That's where the `gatsby-transformer-remark` plugin comes in.

The transformer plugin reads markdown `File` nodes. Then it creates `MarkdownRemark` nodes. These nodes include an HTML version of the markdown. They also include `frontmatter`.

> Frontmatter is data included in markdown files. It's commonly used to store metadata like dates, authors, tags, etc inside markdown files.

## Relationships

Your `MarkdownRemark` nodes are linked to their parent `File` nodes. These links are exposed in GraphQL.

This is an important relationship to understand. A `File` node can have a child `MarkdownRemark` node. The frontmatter meta data only exists on the `MarkdownRemark` node.

A `File` node may have a `childMarkdownRemark` field. This gives you access to the `MarkdownRemark` node for that file. You'll dive deeper into these relationships as your GraphQL queries become more sophisticated.

## Insanely fast

Gatsby creates outrageously fast static sites. Some Gatsby sites score 100/100 on speed tests. A big part of this is the node system.

You tell Gatsby where to fetch data from. That data gets saved into nodes. Your GraphQL queries pull data from those nodes. The output of your queries are written into static files. This is incredibly powerful.

First, your dynamic data becomes static. Static is fast. Second, your data can be pre-fetched. A visitor loads your homepage. The page is rendered. Then Gatsby immediately starts fetching the data for linked pages.

This pre-fetching creates Gatsby's instant page clicks. Pre-fetching also creates really fast mobile experience.

## Markdown example

You have markdown files on disk. They are in a folder called `content/posts`. You configure the `gatsby-source-contentful` plugin something like this:

```javascript
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/content/posts`,
    name: 'posts',
  },
},
```

Then you add the `gatsby-transformer-remark` plugin. The filesystem plugin must come first. Then your markdown files will be automatically parsed by `remark`. No specific configuration required.

## Headless CMS example

You can fetch data from CMSs. There are lots of so-called "headless" CMSs. A traditional CMS like WordPress does two things. First, you can create content. Second, WordPress displays that content. While a headless CMS only does the first. You create content. Then you use a different system to display the content. These are a great fit for Gatsby.

You might configure the `gatsby-source-contentful` plugin like this:

```javascript
{
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: `SPACE_ID`,
    accessToken: `ACCESS_TOKEN`
  }
},
```

Gatsby will import all of your Contentful data. You can query that data through Gatsby's GraphQL schema. Your Contentful data is rendered into static files as part of your build process.

> This architecture means you only call the CMS API during a Gatsby build. This can be great for your API limit! Many visitors to your site won't mean many API calls.

## Summary

You tell Gatsby where to get data from. That data gets imported into nodes. You write queries against those nodes. The results of your queries are built into static files. Those data files are pre-fetched. Your Gatsby site is blazingly fast. Your users love you. You rock.
