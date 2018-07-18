---
path: "/what-is-cache-busting-or-content-hashing"
title: What is cache busting or content hashing?
date: "2018-04-10"
---
> **tl;dr** - A hash of the contents of a file is included in the filename. A change in the content changes the filename. These files can be cached forever. This is awesome.

## What is a hash?

There's a lot of great content on this topic already. Google has some great answers to this question.

Just for you. A very short summary. Hashing is a mathematical function. The hash function output is always the same size. A very small change in the input creates a large change in the output.

Here's a few md5 examples:

* Input `hello`
  - Output `5d41402abc4b2a76b9719d911017c592`
* Input `hello.`
  - Output `d94c10e437d18531e122ed0b45badd2a`

## Why do you care?

Gatsby generates lots of static files. Those files have names. One part of the name is a hash. The hash is built from the contents of the file. A small change in the content of the file changes the hash.

Now every change creates a new filename. No matter how small the change. Each time the content changes, the file name changes. *Every version of a file has its own unique name*.

Great. So what?

So now your static files can be cached **forever**.

## Caching

Gatsby is all about speed. Insanely fast static sites. One part of insanely fast is caching. Cache as much as possible.

The content hashing technique helps with caching. The contents of a file will never change. If the content changes, the name changes, so it's a new file. Now the static files can be cached indefinitely.

That's really helpful. Why? Updating a cache is hard. It's much easier to push stuff into a cache and forget about it. It never changes. Every change creates a new file. Add files. Never delete. Easy.

## Static files

All of Gatsby's static files apply this technique. The `.html` pages do not. You need to be able to change the content of your site. So the `.html` pages must change over time. But otherwise, all other files can be cached forever.
