---
path: "/gatsby-themes"
title: "Gatsby Themes"
date: "2018-10-30"
tags:
  - themes
---
> **tl;dr** - Would Gatsby benefit from the ability to easily swap the visual part of a Gatsby site?

What does a "theme" mean? Specifically, what does it mean in the context of Gatsby?

In the WordPress world a theme defines how your site should look. How will posts and pages be displayed. You can install multiple themes and switch between them at will. Your content stays the same, but each theme will display that content in a totally different way. Drupal and other CMS systems use this same definition for the term "theme".

## Gatsby Themes

Things are a bit different in the Gatsby world. Firstly, themes don't really exist, at least not yet. The Gatsby Manor project has been working on themes. These use the same definition as WordPress.

Gatsby core has an [unlinked page in the v1 docs](https://v1.gatsbyjs.org/docs/themes/), and [some info in a merged PR](https://github.com/gatsbyjs/gatsby/pull/8917/files). There's not much else. The PR suggests that the Gatsby config files are "composable".

> What does "composable" mean? In simple terms, it means that the config files can be combined. Each one can build upon the one before in a chain. A bit like the `_.merge()` function from lodash / underscore.

## What makes a Gatsby site?

Let's take a little moment to explore what a Gatsby site is actually made from. It includes a bunch of different pieces.

* gatsby-config: Where Gatsby should get data from
* The data itself (in the case of files like markdown)
* gatsby-node: How that data should be processed / converted / etc
* gatsby-node: Logic to make a list of pages from your data
* src/: A template for each page which includes:
  - What specific parts of what data are required (the GraphQL query)
  - The visual layout of each page

When you start from a Gatsby starter, you copy all of these. A Gatsby starter is an entire Gatsby site which you copy completely as a starting point. Content, config, logic, visual appearance, and all.

## Changing themes

How do you change the visual appearance of a Gatsby site? You can't simply use a new starter, it would wipe all your data. Instead you need to manually change all of your visual components. There's no way to simply switch from one visual appearance to another.

## GraphQL

Each Gatsby template file defines a GraphQL query. That query says which fields are required for the page. That means your pages need to know exactly what data is available. If you change your backend from markdown to WordPress, the list of available fields will change. Now your site will be broken. Gatsby won't even boot until you fix it.

GraphQL is great, and it's part of what makes Gatsby so awesome (and so incredibly fast). However, when it comes to switching visual appearance, it creates some problems.

## A proposal

We could have a standard set of fields that must be available on a Gatsby site. For example, a standard set of fields that make up a "blog post". Then multiple visual components could request whatever data they need from this standardised schema.

Effectively this would split a Gatsby site into 2 parts. The config / node / GraphQL schema part, and the visual appearance part. Then the visual part could be quickly swapped with the same underlying data.

## Disadvantages

Let's start with the downsides. GraphQL is strongly typed. This proposal essentially says "let's provide a standard schema for data in Gatsby". That would mean additional fields could not be added. This would definitely limit the scope of data available to components.

## Advantages

Being able to easily swap the visual part of your Gatsby site would be the biggest advantage. Assuming that folks actually implement on top of the API of course.

## How would this work?

There would be a few pieces to this "specification".

* Some code to create a standard set of Gatsby nodes (post, page, tag, category, author, etc)
* Some way to switch between "themes"
  - This could be as simple as `src/theme/post.js` and then `src/theme/` is either a symlink (or overwritten on Windows)

## What do you think?

Right now this is an idea. Next steps would be:

* Define the specification
* Fork one or two starters to use the spec
* Fork some starters into "themes"

Feedback welcome. We'll probably push this as a Gatsby RFC once the idea has been refined a bit.
