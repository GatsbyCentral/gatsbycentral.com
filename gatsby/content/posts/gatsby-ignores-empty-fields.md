---
path: "/gatsby-ignores-empty-fields"
title: Gatsby ignores empty fields
date: "2018-02-24"
---
Your Gatsby GraphQL schema is missing data. If one of your fields is empty, it doesn't show up in Gatsby.

> **tl;dr** - One field can only have one type. Put an empty string instead of null or undefined. Try to fill all fields on all nodes.

## Gatsby builds a GraphQL schema

You don't tell Gatsby the shape of your data. Gatsby figures it out.

GraphQL is strongly typed. If a field is empty, Gatsby can't know what type it should have. Each field can only have one type.

## A blog example

You have a blog. Some posts have a field called `tags`. Gatsby reads your first post. It has a field called `tags` with a value `null`. At this point, Gatsby can't know what type the field should have. Maybe the next post will have a string, or maybe an array.

Then Gatsby reads your second post. This post has no field called `tags`.

Your third post has a field called `tags` with the string value `one, two, three`. Now Gatsby creates a field called `tags` with the type `string`.

Your fourth post has a field called `tags` with the value `['four', 'five', 'six']`. Your model already has a field called `tags` with type `string`. Gatsby cannot store an array in a type `string`. So Gatsby ignores this value.

## Empty fields must be ignored

Gatsby has no alternative but to ignore empty fields. It also has no way to handle fields with different types. The type that comes first wins. But the order might change over time.

Only use one type per field. Decide what that type is in advance. Stick to it.

If you want to change the type, change the field name. This will make it much easier to spot errors.

## Empty values

An empty string is not the same as an empty field. If a field has a value `""` then Gatsby will create the field with type `string`. You tell Gatsby that the field type by setting the value to an empty string.

You can only do this for fields of type `string`. If the field is a number, there is no equivalent. Likewise for dates.

If your field is an array, there is no empty value. An empty array does not tell Gatsby what the array type will be. GraphQL is strongly typed. Array fields must contain exactly one type. You could set an empty string inside an array. But that's a bad idea. Trust me, it will make your life harder later.

## Same fields on all nodes

Try to keep the same fields on all nodes. A headless CMS will probably do this automatically. Not so if you're using markdown and frontmatter. You might create a frontmatter template and copy it for each new node.

Try to have a value for every field on every node. If you have tags, add tags to every node. You might have problems if you have one field on only one node. it has [caused confusion](https://github.com/gatsbyjs/gatsby/issues/3913) for people.

## Conclusion

Every field must always have the same type. This is critically important. If you take away only one thing from this article, let it be this!
