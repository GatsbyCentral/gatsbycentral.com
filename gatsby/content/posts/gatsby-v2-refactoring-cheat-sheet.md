---
path: "/gatsby-v2-refactoring-cheat-sheet"
title: Gatsby v2 refactoring cheat sheet
date: "2018-07-16"
tags:
  - v2
  - cheat sheet
---
<span style="text-align: center; display: block;">Part of [a series on Gatsby v2](/gatsby-v2)</span>

This is a short cheat sheet to remind you of the refactoring changes needed to move from Gatsby v1 to Gatsby v2. Click each point for the full documentation.

## Import changes

* [`import { Link } from ‘gatsby’` instead of `gatsby-link`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#import-link-from-gatsby)
  - Also `yarn remove gatsby-link`
* [`import { graphql } from ‘gatsby’` (was magic global in v1)](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#import-graphql-from-gatsby)

## Renames

* [`boundActionCreators` -> `actions`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#rename-boundactioncreators-to-actions)
* [`pathContext` -> `pageContext`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#rename-pathcontext-to-pagecontext)
* [Image `*sizes` -> `*fluid`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#rename-responsive-image-queries)
* [Image `*resolutions` -> `*fixed`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#rename-responsive-image-queries)
* [`modifyBabelrc` -> `onCreateBabelConfig`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#change-modifybabelrc-to-oncreatebabelconfig)
* [`modifyWebpackConfig` -> `onCreateWebpackConfig`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#change-modifywebpackconfig-to-oncreatewebpackconfig)
* [Link `navigateTo` -> `push`](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/#change-navigateto-to-push)
