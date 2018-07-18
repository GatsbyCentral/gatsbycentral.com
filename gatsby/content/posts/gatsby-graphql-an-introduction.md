---
path: "/gatsby-graphql-an-introduction"
title: "Gatsby GraphQL - An Introduction"
date: "2018-07-20"
---
> Familiar with GraphQL already? If not, [start here](https://graphql.org/). Seriously.

You know GraphQL. You're learning Gatsby. How does GraphQL work inside Gatsby?

> **tl;dr** - Gatsby uses GraphQL in 3 ways. In `gatsby-node.js` via `graphql().then()`. In pages via `` const query = graphql`...` ``. In any component via `StaticQuery`.

## What data is available?

It's really helpful to understand [Gatsby data flows](/introduction-to-gatsby-data-flow). In short, Gatsby ingests data into its nodes system, then you pull data from Gatsby's nodes into your components.

The easiest way to explore the data is via the GraphiQL. While `gatsby develop` is running you can find it at http://localhost:8000/___graphql.

Exactly what your data looks like depends on a few things:

* Which source plugins you have configured
* Any transformations you're making in `gatsby-node.js`
* What data is actually found by your source plugins

Gatsby generates the GraphQL schema automatically from the data it finds. So if a field is always empty, it will not exist.

> **NOTE**: Watch out for empty fields. Gatsby needs to see your data to be able to determine its shape. Only then is it made available.

## GraphQL in `gatsby-node.js`

In the Gatsby flow, this is probably the first place you'll use GraphQL. You've installed a source plugin. Data is being loaded. You've explored that data in GraphiQL. You want to use that data to create pages.

You can use GraphQL queries inside the `createPages` API. You get a `graphql` API. Confusingly, this is not the same as when you `import { graphql } from 'gatsby';`. It's a function which accepts a string and returns a promise. Here's an example of how you might use it.

```javascript
exports.createPages = ({ actions, graphql }) => {
  // Fetch a list of posts
  graphql(`query { ... }`).then(result => {
    if (result.errors) ...

    // Iterate over `result.data` and call `actions.createPage()`
  })
}
```

This requires some familiarity with Promises to understand. Unfortunately there's no easy way around that. Promises are awesome though, and definitely worth learning a little about.

## GraphQL in pages

Next up, your pages. Of course you want to get data into your pages. One common mistake is to pass all the data for the page to the `createPage()` call. This is a mistake. Use GraphQL page queries instead.

When you call `createPage()` you pass the path to a React component as the variable `component`. Gatsby then loads that component and supplies it with some context.

If you have defined a GraphQL query in that component's file, Gatsby will find it. There's some magic going on here. You must export the component like ``export const query = graphql`query { ... }` ``. The name of the export does not matter.

Bottom line, create it, make sure it's exported, and Gatsby will magically link it to your component for you.

The results of your query will be given to your component as `props.data`.

Here's an abbreviated example.

```javascript
import React from "react";
import { graphql } from "gatsby";

const Page = props => {
  return <div>{JSON.stringify(props.data)}</div>;
};

export const query = graphql`
  query { ... }
`;

export default Page;
```

The query is magically linked to the component. No action required.

## GraphQL everywhere

Starting with Gatsby v2, you can now use GraphQL to pass data to any React component anywhere. This is done via `StaticQuery`. [Read all about `StaticQuery` here](/staticquery-in-gatsby-v2).

A really simple example of how you might use this, just for kicks.

```javascript
import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Header = props => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  );
};

const HeaderWithStaticData = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Header data={data} {...props} />}
    />
  );
};

export default HeaderWithStaticData;
```

There are a few things to note in this example. Check out the [article on `StaticQuery`](/staticquery-in-gatsby-v2) to understand them.

## GraphQL in Gatsby

I hope this has given you a useful introduction to how GraphQL is used in Gatsby. Feel free to reach out in the comments or on twitter if you have questions or feedback. Subscribe below if you want to receive Gatsby awesomeness directly to your inbox.
