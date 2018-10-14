---
path: "/enable-absolute-imports-for-gatsby-v2
title: "Enable absolute imports for Gatsby v2"
date: "2018-10-14"
tags:
  - v2
---

If you prefer absolute imports like with GatsbyJS v2 add the following snippet to your `gatsby-node.js` file.

```
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
```
Then you con import like so:

`import from 'components/MyComponent'`



