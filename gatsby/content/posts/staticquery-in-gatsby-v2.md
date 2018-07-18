---
path: "/staticquery-in-gatsby-v2"
title: StaticQuery in Gatsby v2
date: "2018-07-18"
---
You've heard about `StaticQuery` as part of Gatsby v2. GraphQL everywhere. Sounds great, but how does it work?

> **tl;dr** - Wrap any component in `StaticQuery` and pass two props `query` and `render`. These queries do not get any data about the current page, they're static for the entire build.

## What is `StaticQuery`?

In Gatsby v1 there was only 2 places you could use GraphQL. Layouts and pages. Layouts have disappeared in Gatsby v2. Pages still use GraphQL.

Imagine you want to pass the `title` from you `gatsby-config.js` file into a component. In Gatsby v1 you would have to get that data via the layout or the page. With `StaticQuery`, you can get that data anywhere.

Or put another way, `StaticQuery` lets you write GraphQL queries which are parsed **once** during the build process. Think of it like this:

* Gatsby boots and loads all your files
* All GraphQL queries are extracted
* All `StaticQuery` instances are parsed, their queries run, and the data bound to their components
* All pages are built and page specific GraphQL queries run per page

## Where to use `StaticQuery`?

Short answer, anywhere. You just import and it works. A few examples where `StaticQuery` would be useful:

* Passing the global site metadata to Helmet
* Showing a list of the 5 most recent posts
* Displaying the 5 best selling products in a store

## Example

Enough theory, time to dive into some code. Here's the example from the [`StaticQuery` docs](https://next.gatsbyjs.org/docs/static-query/):

```javascript
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
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
    render={data => (
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
      </header>
    )}
  />
)

export default Header
```

Let's unpack that a bit.

* First we import `StaticQuery` from `gatsby`. It's a named export.
* Then we render `<StaticQuery` just like any other React component
* It accepts two props, `query` and `render`
* The `query` prop takes a `graphql` template string
  - NOTE: `graphql` must be imported from `gatsby` in Gatsby v2
* The `render` prop takes a function
  - That function accepts a single argument `data`
  - The `data` argument is filled with the result of the GraphQL query
  - We render an `h1` tag containing `data.site.siteMetadata.title`

> NOTE: The `data` argument passed to the `render` function is not `props`, it is **only the data**. It's more like `props.data`, and it should not be destructured like `({ data }) => ...`.

If you haven't seen it before, the `siteMetadata` object is filled from `gatsby-config.js`. It's a convenient way to pass config values into your Gatsby site without hard coding them.
