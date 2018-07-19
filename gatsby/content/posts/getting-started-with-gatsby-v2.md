---
path: "/getting-started-with-gatsby-v2"
title: Getting started with Gatsby v2
date: "2018-04-10"
tags:
  - v2
---
<span style="text-align: center; display: block;">Part of [a series on Gatsby v2](/gatsby-v2)</span>

You're familiar with Gatsby. You realise there's much awesomeness in v2. You want some of that now. You **need** it now.

> **tl;dr** - Install `react`, `react-dom`, `gatsby@next` and probably `react-helmet`.

## What's in v2?  

Why is v2 awesome? A handful of reasons. You can check out the [v2 project](https://github.com/gatsbyjs/gatsby/projects/2) for a good overview. A few of our personal highlights include:

* Load data via JSON outside of webpack
* No more layouts, GraphQL queries in all components
* Modern builds for modern browsers

### Better data loading

You've read about why [Gatsby chokes on large sites](/can-gatsby-handle-large-sites)? Now's a good time. We'll wait. You can come right back via the "back" button.

Gatsby needs a list of every page on your site. Then where the data for that page can be found. It's a static file. The file name includes a [cache busting hash](/what-is-cache-busting-or-content-hashing). We need to know the filename. There's no way to guess. This list has 1 entry for every page. 100k pages means 100k entries.

In Gatsby v1 the entire list is put into the HTML of **every page**. That means if you have a lot of pages, your HTML files will be huge. It's a problem. It makes Gatsby v1 impractical for sites with more than ~1k pages.

This is fixed in Gatsby v2. First, the list is much, much smaller. Second, it's no longer part of the HTML. It's loaded *after* the page has rendered. These changes are **huge**. Gatsby v2 will easily support sites with 5k pages. Maybe even 50k or 100k pages.

### GraphQL everywhere

You know that Gatsby only allows GraphQL queries in two places. In layouts and page components. Layouts are disappearing in v2. You can use GraphQL in any component instead.

> This is currently a work in progress. It might change by the final release of v2.

No more layouts. So what now? Now you wrap your components in other components. You can create any kind of "layout" hierarchy you want. Awesome. How do we get data into those components? Via the new `StaticQuery`.

What is `StaticQuery`? It's a new component. It's a bit like `Provider` from redux. You give it a GraphQL query. It fetches that data and delivers it to your component.

How does it work? That's still not finalised. But checkout [Gatsby's first RFC for more details](https://github.com/gatsbyjs/rfcs/pull/2).

### Modern builds

You write modern javascript. Then babel and webpack "transpile" it. Now your sites work in old browsers. Wooho!

The transpiled code is bigger. It includes lots of "polyfills". These are special helpers for old browsers which don't have some modern features.

Modern javascript today. Awesome. But now all modern browsers are also fetching polyfills. They don't need them. They could download smaller bits of code instead.

That's the goal of modern builds. Give modern browsers a smaller build. Keep the bigger builds for old browsers.

Another performance optimisation from Gatsby. This is just an idea right now. It hasn't been built yet. You can read the [discussion about it here](https://github.com/gatsbyjs/gatsby/issues/2114).

## Tech changes

So v2 will be awesome. You want it *now*. Great. But there's no migration guide yet. Darn.

Here's a short list of some of the bigger changes from v1 to v2. This list is definitely not exhaustive. v2 is constantly evolving. This list will get you started until the v2 migration guide comes out.

* React & React Dom are peer dependencies now
* `pathContext` is now `pageContext`
* PostCSS / `.scss` has changed

## Try v2 now

You're convinced. You want to try it now. Awesome.

First, do this in a branch. It might not work.

```
git checkout -b gatsby-v2
```

### Install

First, install the `react` and `react-dom`. They are now peer dependencies. They must go into your `package.json`.

```
yarn add react react-dom
```

Great. Are you using helmet? Probably. If you are, install it. Same as above.

```
yarn add react-helmet
```

Now install Gatsby v2. It's easy.

```
yarn add gatsby@next
```

You've installed Gatsby v2. Congratulations. Unfortunately, it probably doesn't work yet. Try anyway, just for fun!

```
gatsby develop
```

Errors? You probably need to update some other Gatsby packges. It's hard to know exactly which ones. Are you using the filesystem source plugin? Probably. Update it.

```
yarn add gatsby-source-filesystem@next
```

## Errors

You might have errors at this point. Try to figure out which package they're coming from. Try upgrading that package.

> **Be careful**. Some packages have `@next` versions which are actually old. You can check on the "Versions" tab on npm. For example [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet) today (11 Apr 2018). The `latest` tag is version `2.0.10`. While the `next` tag is `2.0.6-2` which is 10 days older.

This process might take a little trial and error. It's worth it. Remember to make frequent git commits!


## PostCSS / SaSS

There's something new about PostCSS in v2. We haven't fully figured it out. It's not yet documented. We had success by removing the `gatsby-plugin-postcss-sass` package and instead using the `gatsby-plugin-sass` package.

```
yarn remove gatsby-plugin-postcss-sass
yarn add gatsby-plugin-sass@next
```

> **Warning:** [gatsby-plugin-sass](https://www.npmjs.com/package/gatsby-plugin-postcss-sass?activeTab=versions) is an example of a plugin whose `@next` tag is out of date.

## Help

You're messing with advanced level Gatsby fu here. You might have issues. Google is your friend. Check [StackOverflow](http://stackoverflow.com/questions/tagged/gatsby). Join the #gatsby channel on [Reactiflux Discord](https://discord.gg/0ZcbPKXt5bVoxkfV) (Discord is a bit like slack).

But most of all. Persevere. Good luck.
