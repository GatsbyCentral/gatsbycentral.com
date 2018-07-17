---
path: "/add-type-field-for-markdown-sources"
title: Add type field for markdown sources 
date: "2018-05-29"
tags:
  - v1
---

```
const _ = require("lodash")

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
     const { createNodeField } = boundActionCreators;
   
     if (_.get(node, "internal.type") === `MarkdownRemark`) {
       // Get the parent node
       const parent = getNode(_.get(node, "parent"));
   
       // Create a field on this node for the "collection" of the parent
       // NOTE: This is necessary so we can filter `allMarkdownRemark` by
       // `collection` otherwise there is no way to filter for only markdown
       // documents of type `post`.
       createNodeField({
         node,
         name: "collection",
         value: _.get(parent, "sourceInstanceName")
       });
     }
   };
   ```
