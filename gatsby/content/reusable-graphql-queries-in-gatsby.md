---
path: "/reusable-graphql-queries-in-gatsby"
title: Reusable GraphQL queries in Gatsby
date: "2018-02-28"
---
You want to use the same query in multiple components. Or maybe you want to use queries outside of pages / layouts. Well, you can't, but you can use fragments!

> **tl;dr** Use fragments. Export fragments from any component. Use them anywhere.

## Sharing queries

You have a blog. You want to have a list of recent posts in the sidebar. That sidebar is a separate component. You can only use queries in pages or layouts. You need to pass data to components from layouts or pages.

You cannot share queries. But you can do something similar with GraphQL fragments.

## Introducing fragments

A fragment defines some fields that you want to retrieve from a type. GraphQL organises data according to types. You can start by just using fragments. They will make more sense once you've used them a few times.

For example, if you want the site title, your query might look like this:

```graphql
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
}
```

You could make this a fragment. Then whenever you need the site title, you use the fragment. Your fragment might look like this:

```graphql
fragment SiteTitle on Site {
  siteMetadata {
    title
  }
}
```

The fragment name is `SiteTitle`. It's a fragment on the type `Site`.

Then you could change your query. Now it could look like this:

```graphql
query IndexQuery {
  site {
    ...SiteTitle
  }
}
```

You use fragments with the spread operator `...`. The effect of this query is exactly the same as the first example. Your site's title will be `props.data.site.siteMetadata.title`.

## Exporting fragments

You can define fragments in any of your components. You just export the fragment as a "named export". If you export it, Gatsby will find it. Then you can use it anywhere.

> Gatsby searches all your files for fragments first. Then it builds your site. You don't need to think about defining fragments before you use them. Gatsby takes care of that for you. Define anywhere, use anywhere.

Your fragment must follow the export syntax like so:

```es6
export const variableName = graphql`
fragment FragName on TypeName { ... }
`
```

The `variableName` can be anything you want.

## Define once, use many

You have one component that you want to use in different places. You must pass the data either from a layout or a page. If you use the same component in multiple pages you will have multiple queries. Those queries must always fetch the same data.

You can define the fragment in the same file as your component. Then use the fragment to fetch the data in your page or layout query. Pass the data from the layout or page to the component.

You want to fetch an extra field. Instead of changing your queries, just change the fragment. Then the data will automatically flow from query to page / layout to your component.
