---
path: "/how-do-layouts-work-in-gatsby-v2"
title: How do layouts work in Gatsby v2
date: "2018-07-19"
---
You're ready to upgrade to Gatsby v2. You've read that layouts have disappeared. What do you replace them with?

> tl;dr No more "special" layouts, just use normal React components.

In Gatsby v1, layouts were treated specially. They could use GraphQL queries. They were given a special `children` prop which was a function. Whacky but true. None of this is necessary in Gatsby v2.

## What is a layout?

A layout is more conceptual than anything. Typically, a layout might contain the structure of your site. For example, a component which loads the header, sidebar, and main body of the page.

You can do this with a standard, totally normal React component. A very simple example might look like:

```javascript
const Layout = (props) => {
  return (
    <Container>
      <Header />
      <PageBody>
        <Content>
          {props.children}
        </Content>
        <Sidebar />
      </PageBody>
    </Container>
  );
};
```

This does not require any special magic. You use it very simply like so:

```javascript
const Page = (props) => {
  return (
    <Layout>
      ...
    </Layout>
  )
};
```

It's just regular React.

## Static data

In Gatsby v1 you could inject data into layouts with GraphQL. In Gatsby v2 you can inject data into any React component via `StaticQuery`. [Read all about `StaticQuery` here](/staticquery-in-gatsby-v2).

## Dynamic data

If you want to inject data based on the current page, that is also possible. That data can only be fetched in the page specific GraphQL query. Then you pass it into the layout just like any other component.

A simple example:

```javascript
const Page = (props) => {
  return (
    <Layout pageTitle={props.data.post.title}>
      ...
    </Layout>
  )
}
```

With this approach you can pass data as far down your components as you want to. Given that Gatsby v2 has updated to React v16, you can also use the [new context API](https://reactjs.org/docs/context.html). This can be a helpful way of passing data down to deeply nested components.

## Layouts

Hopefully this article explains how layouts work in Gatsby v2. Any questions, hit us up in the comments.
