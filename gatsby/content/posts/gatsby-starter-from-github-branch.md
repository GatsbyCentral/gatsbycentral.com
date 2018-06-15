---
path: "/gatsby-starter-from-github-branch"
title: Gatsby starter from a GitHub branch
date: "2018-03-30"
---
If you want to create a new Gatsby project from a specific branch of a repository, the syntax is as follows:

```
gatsby new gatsby 'https://github.com/GatsbyCentral/gatsby-starter-lumen.git#gatsby-v2'
```

You append `.git#branch-name` to the https URL of GitHub repository.

Small trick, but took a while to track down, hope it helps somebody.
