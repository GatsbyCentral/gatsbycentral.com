---
path: "/what-is-gatsby-exactly"
title: What is Gatsby exactly?
date: "2018-03-16"
---
You've heard people raving about Gatsby. You've seen how fast Gatsby sites are. But what is Gatsby exactly?

> **tl;dr** - Gatsby build static sites from dynamic data. It sucks in your data, combines that with your React components, and builds. The site pre-fetches all links on the screen. It's insanely fast.

## Static what?

What does static mean? What exactly is a static site?

Let's take WordPress as an example. You visit a WordPress site. Your browser sends a request for the page. WordPress receives that request. Then it does some work. It fetches the recent posts. It loads the templates. It combines the data with the templates. Then it sends the response.

This takes time. It's typical for a "dynamic" site. Dynamic is the opposite of static. Dynamic sites are slow. Sometimes a little slow. Often extremely slow.

A static site does this work in advance. Dynamic sites wait for a visitor to request a page. Static sites build every page in advance. This makes static sites fast. This also makes the server much simpler. Simpler means more secure.

## Build time

Most web pages are a combination of templates and data. The data gets fed into the template. The result is given to the visitor. Dynamic sites do this for every request. Static sites do this during the so-called "build" process.

The build process fetches all your data. Then loads all your templates. Then feeds that data into the templates and saves the output. That output is plain HTML and javascript files.

Every time your content changes, the site needs to be rebuilt. With a dynamic site the build happens for every visit. For a static site the build happens for every content update.

Dynamic sites will update instantly. Static sites will take some time to update. Some update very fast. Gatsby can take 10 seconds or more to update.

> In general, static is great when you have infrequent updates. Updates every hour are fine.

## React

Gatsby is built on top of React. React uses components instead of templates. Conceptually templates and components are similar.

You need to know some React to use Gatsby. React has a steep learning curve at first. It's very powerful. If you're new to React, it will take some time to learn.

## Fast

Static sites are fast. Gatsby is absurdly fast.

Speed means many things. Let's keep it simple. A "first load" is always the slowest. Gatsby makes your first load very fast. It gives the browser a complete page as a single file. All the necessary CSS and images are embedded in the page. Only the CSS really needed for that page is included.

Gatsby's first load times are fast. Very fast.

Then comes the second load. This can either be the same page or another page on the same site. Usually many assets are shared between the pages. This makes the second load much faster. Gatsby does second page loads in advance. Before the user clicks. Then the response is instant. It's scarily fast!

## Prefetching

Loading data in advance is called prefetching. Gatsby is really, really good at prefetching. Gatsby will prefetch everything the user can click on. Any link on the screen.

Prefetching is really awesome on mobile. It's part of the Progressive Web Apps (PWA) concept that Gatsby follows. After a user has visited the first page, every subsequent click should feel instant.

Gatsby even prefetches all the images in linked pages!

## Get started

Now you've got a handle on what Gatsby does. Check out the Gatsby docs and the Getting Started guide. If you have node and npm installed, you can be up and running in a few minutes.
