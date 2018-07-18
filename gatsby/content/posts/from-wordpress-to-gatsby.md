---
path: "/from-wordpress-to-gatsby"
title: From WordPress to Gatsby
date: "2018-05-28"
---
You have a WordPress blog. You've heard that Gatsby is all kinds of awesome. You want to switch. Well sit tight, this is gonna be a journey.

> **tl;dr** - Moving content from WordPress to Gatsby will be painful. Consider starting a new blog on Gatsby instead. Or budget 1-2 days and get ready to dig in.

You've heard about Gatsby. Great. Do you understand the basics of how Gatsby handles data? Read our [intro to data flow article](/introduction-to-gatsby-data-flow) if not. Read it now. The rest of this article will be much easier afterwards.

## Content

The first and biggest question. Where will your content live?

### Keep it in WordPress

You could keep the content in WordPress. Gatsby can pull content from WordPress. There are some considerations. This would be a simple strategy.

* Move WordPress to a new domain
* Enable the "Discourage search engines from indexing this site" setting in WordPress (Settings > Reading)
* Connect Gatsby to WordPress

#### Updates

Gatsby needs to know when your content changes. You need to trigger a rebuild on every change in WordPress. You could use a webhook plugin for that. If you use netlify to build your site, they support webhooks also.

### Content in git

Keeping content in WordPress is possible, but in most cases, not the best solution. Gatsby is all about static. When your content lives in git, your life will be easier.

You can export your WordPress content for jekyll. There's a good export plugin. Then you can use that jekyll formatted content in Gatsby. Magic.

#### Export

The export process can be painful. You might need to make some changes. Your photos, videos, and other media might not work 100%. There's no simple, one click solution here. Unfortunately.

## React

WordPress uses its own templating engine. Gatsby is built on React. You will need to build (or choose) a new theme for Gatsby. There is no simple way to use your WordPress theme in Gatsby.

Pick a Gatsby starter. This will save you a ton of time. Tweak the theme later.

## Comments

Do you want to support comments? The simplest answer is no. They're mostly spam anyway!

If you do want to support comments, see our [comments in Gatsby article](/how-to-handle-comments-in-gatsby-blogs). You will need to export and import your comments. This could be tricky.

## Start over?

Moving content from WordPress to Gatsby can be painful. There's no simple solution, no easy shortcuts. It would be much easier to start with a brand new blog. If you have a lot of content, or a long history, this might not make sense. Give the idea serious consideration. You might well decide later this would have been the smarter move!

## Keep it simple

WordPress is incredibly powerful. There are thousands of plugins available. Thousands of theme choices. The simpler you keep your blog, the easier the migration will be. Fancy image galleries, embedded rich media content, things like this will make the migration much harder.

## Is it worth it?

WordPress is a pretty good CMS. Gatsby is a much better choice for a new project. But for an existing blog, with a lot of content, or complex content, you might find staying with WordPress is the smarter choice. At least for now. The process will get easier in time. Do you really need all of Gatsby's awesomeness today? Give it some thought.

Above all else, good luck!
