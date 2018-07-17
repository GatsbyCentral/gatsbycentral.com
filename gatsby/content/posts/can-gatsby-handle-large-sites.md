---
path: "/can-gatsby-handle-large-sites"
title: Can Gatsby handle large sites?
date: "2018-03-20"
---
> tl;dr **No**. Sites with >1k pages will not perform very well with Gatsby v1.

## How large is large?

Short answer, it depends.

Let's talk about right now, Gatsby v1. Gatsby is great up to about 1'000 pages. That means 1k calls to `createPage()`. Beyond that, Gatsby will start to slow down. You might want to switch to something like [Hugo](https://gohugo.io/).

> Hugo claims to be the "fastest framework for building websites". It probably is. But it's talking about **build time** speed. Gatsby sites are probably faster from the user's point of view.

## Examples

I'll quote examples in this article. We're testing a migration from WordPress. It has 3.5k total pages. About 2k blog posts plus category and tag pages.

## What happens on large sites?

You import your data. You call `createPage()`. Gatsby builds a list of all your pages. When that list gets large, things break. For example, the `gatsby develop` version of a site with 3.5k pages fails to load in chrome.

That list of pages is included in the built javascript file. That file is downloaded as soon as somebody visits your site. When that file goes over 500K it no longer gets minified. The 3.5k page example site had an app bundle of 2.7MB. That's gigantic.

## Maximum stack errors

Our test site doesn't work in chrome. We started it with `gatsby develop`. Then Chrome throws a `RangeError: Maximum call stack size exceeded` error. The site will load in Firefox (it has a larger stack).

We also saw the same error during build. The build failed to complete. We could get Gatsby to build with a smaller number of pages.


## Migrating from WordPress

Are you migrating from WordPress? How much existing content do you have? Will you also have category and tag pages? How many pages will you have? That total includes blog posts, categories, tags, and all other pages. Is the total is greater than 1'000? If so, Gatsby might not be the perfect fit for you today.

## Will this change?

Short answer, we're not sure. I've checked the Gatsby issues and I don't see anything that looks like it addresses this issue. Some people are successfully building Gatsby sites with >1k pages. So it is possible.

## Workarounds?

You have a huge site. You love Gatsby's performance. What can you do? Right now, at Gatsby v1, we don't know of a suitable workaround. We'll update this article if we discover one.
