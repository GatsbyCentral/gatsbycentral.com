---
path: "/comparing-gatsby-and-jekyll"
title: Comparing Gatsby and Jekyll
date: "2018-09-11"
tags:
  - jekyll
  - comparison
---
You've heard of Jekyll. You've heard of Gatsby. Which should you choose? What are their relative strenghts? We set out to answer these questions and more.

> tl;dr Jekyll was first release in 2008, Gatsby is significantly more modern.

Disclaimer, I know a lot more about Gatsby than about Jekyll. Please feel free to point out any errors in the comments below and we'll update this article.

## What is Jekyll?

Jekyll is a static site generator, focused on creating blogs. Posts and pages are first class citizens. Your content lives in Markdown on disk. It's been around for a decade, and it's the backbone of GitHub's pages feature. It was also created by GitHub's cofounder. It's a simple, secure, and performant alternative to traditional blogging platforms.

## What is Gatsby?

We've written a lot about this. Gatsby is a sort of "dynamic" static site generator. It pulls in data from data sources (and from disk), and builds a static site. It uses React to make the built static site crazy performant. It's only a few years old.

## Learning

Gatsby has a huge advantage in terms of learning. True for anything new. New projects can learn from the experience of older projects. Gatsby is the new kid on the block in this comparison.

## Maturity

On the flip side, Jekyll is older and therefore more mature. A wider range of themes and plugins exist. Every problem you'll ever encounter has probably already been solved. By comparison, Gatsby can feel like a toddler, cute and hella fast, but still young.

## Data sources

Gatsby is built from the ground up for dynamic data sources. You can easily pull in content from APIs, from WordPress, or a bunch of other places. Even WikiPedia. With Jekyll you need to pull data and push it into Markdown on disk. This is one of the biggest differences between Gatsby and most other static site generators.

## Crazy fast

Gatsby is fast. It's almost impossible to beat on speed. There's an absolute ton of optimisations built into it. This is possible because it's built on React. Jekyll users liquid templates, and so can never be as fast. Speed, in this context, means site loading time, not build speed.

This could be a whole post into itself. But to summarise:

* Gatsby inlines everything. CSS, even images.
* The built output is insanely small, and extremely optimised.
* Gatsby aims for 1 request, 1 paint. Bottom line, ridiculously fast first loads.
* Gatsby preloads content for instant 2nd page loads.

If you care about speed, and you can be your users do, Gatsby is awesome.

## React

If you want to use Gatsby, you need to know React. Is learning React a good idea? That depends. In some cases, yes. React is quite different compared to Liquid templates. Liquid is much closer to HTML, and for many people, will feel much more intuitive at first.

> While React has a steep learning curve, we highly recommend it. It's a game changing paradigm shift. Hard work at first, but definitely worth the effort.

## Themes

Jekyll has first class theme support. There are hundreds, maybe thousands, of themes available. Gatsby doesn't really have themes. This is a general weakness in React. There isn't an active theme ecosystem. If you want a blog with a range of themes to choose from, Jekyll gives you that.

## Blogging

Jekyll is focused on building blogs. You can use it for other things, but blogging is at its core. Gatsby is more general. You can build any type of site in Gatsby. Ecommerce, sure. This can be a benefit or not, depending on what you're doing.

## Conclusion

If you care about speed, Gatsby is the clear winner. If you want a blog and a wide range of themes, Jekyll is better suited. If you already know React, Gatsby makes a lot of sense. If you are pulling data from APIs or other dynamic sources, Gatsby is better suited. If you value maturity and stability over everything else, Jekyll is for you.

They are each different tools with their own focus and strengths. We've tried to keep this article unbiased, but we're much deeper into Gatsby than Jekyll, so we probably failed!
