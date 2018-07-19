---
path: "/whats-new-in-gatsby-v2"
title: "What's new in Gatsby v2"
date: "2018-07-17"
tags:
  - v2
  - beta
---
<span style="text-align: center; display: block;">Part of [a series on Gatsby v2](/gatsby-v2)</span>

Gatsby v2 is in beta. Awesome. What does that mean? What changes come with v2?

> **tl;dr** - Gatsby v2 brings better data loading which supports giant sites, lets you use GraphQL in every component, and some other performance improvements.

Gatsby v2 introduce a lot of changes under the hood. Some of those will affect you. See our [refactoring cheat sheet](/gatsby-v2-refactoring-cheat-sheet) for a quick summary. Great. What are the major changes?

* Data loading has been completely overhauled
* Faster and easier development experience
* GraphQL can now be used everywhere

Those are the headline changes. We'll cover them one at a time.

## Data loading

Gatsby ingests data. It sucks data into its own "nodes" system. Then it takes that data, and multiplies it by react components. Finally, it renders all of that to static files. But you knew that already.

The static output essentially consists of two parts, components and data. In Gatsby v1, a list of every single page on your site was included as part of the HTML inside every single page. Think that one over for a second. With every new page, your built HTML files get bigger. Gatsby v1 breaks at around 1k or 2k pages.

This has been completely changed in v2. This means several things.

* You can build sites with 50k or 100k pages with Gatsby v2
* Hot reloading happens much faster during development
* Your HTML pages will be smaller, and so load faster

Bottom line, this is a huge change, and a massive win for Gatsby.

## Improved dev experience

What does developer experience really mean? It means, how easy (and arguably how fun) is something to use. Gatsby is awesome. Gatsby sites are scary fast, super safe, and crazy simple to host. Getting started, learning Gatsby, can feel a bit mind bending at first.

The Gatsby team (specifically Shannon) has been doing some awesome UX research around developer experience. This has lead to lots of improvements in how Gatsby works. Not only with Gatsby itself, but also in the ecosystem. Thanks Shannon, Gatsby is getting easier to use by the day.

There are a handful of developer experience upgrades in Gatsby v2.

Data loading. We talked about this already. Hot reloads are faster with v2. Nice. Really nice on bigger sites.

Renames. There have been a few significant variable renames in v2. The new names are clearer, easier to understand. Sweet.

Dependency upgrades. Gatsby is now using newer versions of its underlying packages. That means React v16, Babel v7 and webpack v4. These changes may appear subtle, but have nice payoffs. A personal favourite is support for [React Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html).

## GraphQL everywhere

Where you can and cannot use GraphQL in v1 is slightly confusing. With v2 it's much simpler. You can use GraphQL anywhere via `StaticQuery`. Then you can use the same, page specific, GraphQL queries in any page components. Easy, simple, clean.

We'll write more about `StaticQuery` soon, and try to remember to update this post with a link. Please ping us in the comments if we forget!

## Other changes

There are a lot of other changes with Gatsby v2. Check out these links for more:

* [Gatsby v2 announcement blog post](https://www.gatsbyjs.org/blog/2018-06-16-announcing-gatsby-v2-beta-launch/)
* [Gatsby v2 roadmap](https://github.com/gatsbyjs/gatsby/projects/2)
