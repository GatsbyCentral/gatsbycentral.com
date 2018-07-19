---
path: "/should-i-rebuild-my-site-for-gatsby-v2"
title: Should I rebuild my site for Gatsby v2?
date: "2018-07-21"
---
You have a site built with Gatsby v1. You want to move to v2. Do you start from scratch and rebuild? Or do you refactor from v1 to v2?

> **tl;dr** - It depends. In most cases, refactor. You’ll typically be faster refactoring than rebuilding.

## Intro

Gatsby v2 has introduced some awesome new stuff. For more on that, read [What’s new in Gatsby v2](/whats-new-in-gatsby-v2). Suffice to say, you’ve decided you want it. At least, if not today, soon. Awesome.

This raises the question. To rebuild or not to rebuild. Do you start with a clean v2 site and copy from your v1 site? Or would it be smarter to upgrade, and refactor?

There are a couple of factors to consider here.

* How complicated is your site?
* How many plugins are you using?
* How many separate components do you have?

## Complexity

Do you have any complexity in your site? If you do, where is that complexity? Is your `gatsby-node.js` file super long? Do you have lots and lots of plugins with sophisticated configurations? Are your React components very complex? Lots of data being passed down through many components?

It's hard to generalise. But we'll try anyway! If you have a lot of complexity in your React components, then you probably want to refactor for v2. The changes introduced will be most noticeable in your `gatsby-*.js` files. This is where most of the significant changes are.

If your React components are super simple. If the component hierarchy is quite flat. Then, you might want to start fresh on v2. You can hopefully copy much of your source plugin configuration and all of your components into a new v2 starter. Then with a few small tweaks, your site should be migrated.

## Plugins

Do you have a complex setup with many plugins and plugin dependencies in `gatsby-config.js`? If you do, then upgrading to v2 is probably the smart choice.

One of the biggest changes you'll notice with plugins is dependencies. React and its friends are no longer direct dependencies of `gatsby`. Now you need to install these as well as `gatsby`. The same is true for some plugins.

When you upgrade Gatsby, you might find that many packages are missing. You can try the following:

* Which plugin is causing the error?
* Check the v2 docs for that plugin
* Does it have `peerDependencies`? These were probably direct dependencies in v1.
* If it does, install them.

If that doesn't work, you can also try cloning the whole [Gatsby repo](https://github.com/gatsbyjs/gatsby/). Then search (grep) the whole codebase for the package that appears in the error. This might point you at where the problem lies.

If your plugin configuration is very simple, you might be quicker to start with a clean v2 starter. Then add any missing plugins, copy your components, do some renaming](/gatsby-v2-refactoring-cheat-sheet). This will probably bypass any issues of missing packages.

## Components

The changes to components in v2 are fairly simple.

* [No more layouts](/how-do-layouts-work-in-gatsby-v2)
* [The option to use GraphQL everywhere](/staticquery-in-gatsby-v2)
* [`pathContext` renamed to `pageContext`](/gatsby-v2-refactoring-cheat-sheet)

Is your component hierarchy quite simple? Do you have a small number of large components? Then starting with a new v2 Gatsby starter might make sense.

Otherwise, do you have a lot of separate components? Do you have components with lots of subcomponents? In this case, it's probably easier to upgrade. Moving many components into a new project could be difficult.

Do you have many "page" components? Each one will require some changes. If there are lots of them, upgrading will probably be easier.

## Upgrade or start over

Hopefully this article has given you some insight into the decision. Unfortunately we can't offer a clear prescription that applies to all cases.

The best overall advice, try it and see. It's easy to go back and try the other option if you use `git branch` at the start.
