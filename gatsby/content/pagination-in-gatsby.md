---
path: "/pagination-in-gatsby"
title: Pagination in Gatsby
date: "2018-03-14"
---
How do you create paginated pages in Gatsby? You might have many blog posts and want to show 10 per page. Do you need a Gatsby pagination plugin?

> tl;dr Don't use a plugin (yet). Call `createPage()` and pass limit and skip in context. Use lodash `_.times()` and some custom logic.

## What is pagination?

You have 107 blog posts. You want to show 10 posts per page. That makes 11 pages. The pages should be `/blog`, then `/blog/2`, `/blog/3`, etc. Each page should have a link to to the next and previous pages (where appropriate).

For example:
* `/blog` links to `/blog/2/` as the next page
* `/blog/2/` links to `/blog` as the previous page and `/blog/3` as the next page

The first page has no previous link. The last page has no next link.

## Pages in Gatsby

Pagination is not part of Gatsby. It doesn't need to be. You create pages just as normal via `createPage()`. Paginated pages do not need any special treatment.

## Pages and Pages

The terms are confusing. Page 1 and a Gatsby Page. We'll call Gatsby pages a "page". We'll call page 1, page 2, etc "paginated pages". A paginated page is also a page!

## Blog posts

In this article we'll talk about blog posts. The same logic applies to any other type of page. We'll show some examples later of applying the same to category or tag pages.

## Create pages in `gatsby-node.js`

In summary.

* Fetch data
* Calculate how many pages there should be
* Create each page
	* Pass skip and limit
	* Pass some other pagination variables

## How many paginated pages?

If you have 107 blog posts and 10 per page, you need 11 paginated pages. With 107 blog posts and 15 per page, 8 paginated pages.

In javascript, that is:

```javascript
const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage);
```

## Helpers

Creating the paths like `/blog` and `/blog/2` requires a little logic. We can put all of this into a helper function. You can define it at the top scope in `gatsby-node.js`.

```javascript
const paginationPath = (path, page, totalPages) => {
  if (page === 0) {
    return path
  } else if (page < 0 || page >= totalPages) {
    return ''
  } else {
    return `${path}/${page + 1}`
  }
}
```

We need to know the total number of pages in order to know which is the last page. If we have 11 pages the link for page 12 is an empty string. There is no page 12!

## Creating paginated pages

We'll assume you've already fetched your blog posts as normal inside `gatsby-node.js`. The blog posts are in an array `blogPosts`.

Then you can create pages like this.

```javascript
// How many posts do we have?
const blogPostsCount = blogPosts.length;
// How many posts per paginated page?
const blogPostsPerPaginatedPage = 10;
// How many paginated pages do we need?
const const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage);

// Create each paginated page
_.times(paginatedPagesCount, (index) => {
  createPage({
    // Calculate the path for this page like `/blog`, `/blog/2`
    path: paginationPath('/blog', index, paginatedPagesCount),
    // Set the component as normal
    component: componentPath,
    // Pass the following context to the component
    context: {
      // Skip this number of posts from the beginning
      skip: index * blogPostsPerPaginatedPage,
      // How many posts to show on this paginated page
      limit: blogPostsPerPaginatedPage,
      // How many paginated pages there are in total
      paginatedPagesCount,
      // The path to the previous paginated page (or an empty string)
      prevPath: paginationPath('/blog', index - 1, paginatedPagesCount),
      // The path to the next paginated page (or an empty string)
      nextPath: paginationPath('/blog', index + 1, paginatedPagesCount),
    }
  })
});
```

This code simply calls `createPage()` once for each paginated page. The `context` contains all the information required for that paginated page.

## Page query

In the component, you use `skip` and `limit` directly inside your query. Gatsby's `all*` queries support these variables directly.

For example:

```graphql
query BlogQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    skip: $skip
    limit: $limit
  ) {
    ...
  }
}
```

## Plugins

There are two pagination plugins right now. They have very similar names! `gatsby-paginate` and `gatsby-pagination`. They both use a similar approach. You get all the data you want in `gatsby-node.js`. Then you pass that data to the component.

Now your query lives in `gatsby-node.js` but your data is used in the component. Part of the magic of GraphQL is putting your queries next to your components.

The packages pass data via `context`.  In the blog post example, the 10 posts per page are passed via `context`. This is not a great idea. The idea behind `context` is to pass just that, context. Not the actual data for the page. This approach somewhat abuses `context`.

## Numbered links

Perhaps you want to show links like [1](#) [2](#) [3](3). You need to create these links with custom logic. Neither pagination package provides helpers.

The code to generate the links is beyond the scope of this article. In general, we recommend the following:

* Create the numbered links in `gatsby-node.js`
* Pass the links as two arrays in `context`

This keeps the separation of concerns. All pagination logic is in `gatsby-node.js`. The component fetches all the data it requires. The component renders the previous / next / numbered links passed from `context`.
