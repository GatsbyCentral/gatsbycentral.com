---
path: "/choosing-a-cms-for-a-personal-gatsby-project"
title: Choosing a CMS for a personal Gatsby project
date: "2018-04-05"
---
> tl;dr Put your content in Markdown and use GitHub to create / edit. If you want a better GUI, use netlify-cms.

You like Gatsby. You know [what it is](/what-is-gatsby-exactly). You're messing around with a personal project. Where do you put the content?

## Disk or API

You can put your content on disk. In your git repo. Or you can get it from an API. This is a fundamental choice. There are advantages and disadvantages to each approach.

## Disk

What does content on disk look like? Typically it's in Markdown format. You'd normally put it in the same git repository as your Gatsby site.

Advantages

* It's your content, it's on your disk.
* No dependencies.
* Simple to understand.
* Rebuild on every commit.

Disadvantages

* It's hard to edit.
* No GUI. Except netlify-cms, but that comes later.
* Fragile. It's easy to commit some broken content.

## API

You can also fetch content from some API. There are many styles and choices. The headless CMS is a relatively new idea.

> **What is a headless CMS?** A CMS like WordPress does 2 things. First, you can create and edit content. Second, other people can see that content. A headless CMS does only the first. The second, is left to another tool. For example, Gatsby.

Advantages

* Better editing experience, GUI, etc.
* Usually handles image processing.
* Can support powerful workflows.

Disadvantages

* Probably costs some money.
* External dependency, your content lives elsewhere.
* You need to trigger a rebuild on every content change.

## Disk choices

You're working on a hobby project. You probably want the content on disk. You can probably write Markdown. You're probably hosting on GitHub (or should be!). You can edit files in the browser. GitHub's Markdown support is pretty good.

This is by far the simplest option. No dependencies. No fuss. The downside is that you need to edit everything by hand.

Enter netlify-cms.

## Netlify CMS

Netlify-cms is several things. First, it's a React application. That application connects to a server. The server is the second part. Both are open source.

Netlify run a server that you can use. There is currently no cost to use that service. You can run your own if you like.

The server acts as a gateway. It connects the React application to your GitHub repo. For both authentication and editing. It's like a web app that uses GitHub as it's database. Genius. Sort of.

It's an awesome project. It's also quite young. It's not very polished. There are some bugs. The UI is OK, but not great.

You want to control your data? But you also want a GUI? Then [netlify-cms](https://www.netlifycms.org/) is the best choice.

## API choices

There are dozens of choices. They come in two flavours.

* Cloud hosted headless CMS products.
* WordPress / Drupal / etc

## Cloud headless CMS

There are a lot of cloud hosted CMSs. From expensive to cheap. Most of them have some kind of cost. [Contentful](https://www.contentful.com/) is probably the best known. Contentful have a generous free tier. You must include a credit on your site. Otherwise Contentful is expensive.

[Prismic](https://prismic.io/) has a free tier. No credit (or credit card) required. Their paid plans start from $9/month.

There are also open source headless CMS options. Lots of them. [Cockpit](https://getcockpit.com/), [Directus](https://getdirectus.com/), and [Sanity](https://www.sanity.io/) are some examples. The downside is you need to run this somewhere. You need a server. You need to manage and maintain that server.

## Old school CMS

Gatsby has plugins for WordPress and Drupal. This is ok for existing content. It doesn't make sense for new content. You need to trigger rebuilds, see below.

You can also export content from an existing CMS. There are lots of export tools for Jekyll. You can then load that content in Gatsby. For personal projects, you probably want to kill the old CMS. Otherwise you need to manage and maintain it.

Exporting your data makes the most sense for personal projects.

## Images

Gatsby does magic with images. Only if they are on disk. This is one big advantage of keeping your content inside your repo.

If you use a headless CMS, they usually handle images. Then your images live on their CDN. Now every visit to your site results in traffic on their CDN. If your site becomes popular, that will cost money. If the CMS disappears, your images disappear. If the CMS is offline, your images are offline.

## Rebuilds

You need to tell Gatsby when to rebuild your site. With your content in git, that's easy. Every commit triggers a rebuild. With your content somewhere else, you probably need webhooks. Not all CMS providers give you webhooks for free.

Netlify makes this stuff fairly easy. Netlify will automatically rebuild on every git commit. You can easily setup webhooks to trigger a rebuild.

## Conclusion

Keeping your content in your git repo is the best option for most personal projects. It has no dependencies. You own your content. You'll get lots of Gatsby magic for images.

Using netlify-cms makes sense if you want a better editing experience.

A headless CMS makes sense if you absolutely must have a great editing experience.
