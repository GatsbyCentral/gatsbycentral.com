---
path: "/graphql-queries-in-gatsby-layouts"
title: GraphQL queries in Gatsby layouts
date: "2018-02-28"
---
How can you use data from GraphQL queries in Gatsby layouts? You have data in Gatsby that you want to use inside templates. Is there a layout version of `pageQuery`?

> **tl;dr** - Your query variable can be called anything. It must be exported. The query must be named. That name must be unique. Data arrives as `props.data`.

## `pageQuery` is not special

Every Gatsby example I saw called the query `pageQuery`. I thought that `pageQuery` was a "magic" name. I assumed it only worked in page components. I thought queries only worked in pages. I was wrong.

I dug into the Gatsby code. I ran some experiments. I eventually figured it out. You can call the query anything you want. It can be `myQuery`, `componentQuery`, `fooBar` or anything else.

## The query must be exported

My next thought was, does it need to be exported? Short answer, yes.

I tried removing the `export`. Gatsby would build, but no data was reaching my components. I wasted a few hours. I added back the `export` and my data was back. Great.

The export must be like this:

```javascript
export const queryVariable = graphql`QUERY`
```

> Aside. Queries are parsed [here](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/internal-plugins/query-runner/file-parser.js#L81). The parser looks for a named export, then a `graphql` tag. If you break that pattern, the query won't be found. For example you can't use `exports.query = ...`.

## The query must be named

You must give each query a unique name. The query name is not the same as the **variable name**.

```javascript
export const queryVariable = graphql`
 query QueryName {...}
`
```

The variable is called `queryVariable` but the query is called `QueryName`. You must ensure that every query has a name.

Every query name must be unique.

Gatsby checks this during startup. If you make a mistake, it will complain. The error message should explain what you need to fix.

NOTE: If you duplicate layouts, remember to change the query name.

## Queries in templates

You can use queries in templates or page components. They work exactly the same way in both cases. You define your query. Remember to export it. Then the results of the query will arrive at `props.data`.

## Wrap your query in graphql template tag

You must wrap your query in the `graphql` template tag like this:

```javascript
export const myQuery = graphql` query goes here `
```

This uses a javascript feature called [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). You don't need to understand all the details of how it works. I've read the spec several times and I still don't get it. You just need to do it!

## Don't `import graphql`

You don't need to import `graphql`. It must be imported by Gatsby. I'm not sure, I haven't figured it out yet. But the `graphql` keyword "just works", so you can forget about it and move on!

## Examples

You can put all this together like so.

```javascript
export const templateQuery = graphql`
  query DefaultTemplate {
    site {
     siteMetadata {
       title
       author
     }
   }
  }
`
```

Then inside your component's `render()` function you can do something like this:

```javascript
<p>Post by {this.props.data.site.siteMetadata.title}</p>
```
