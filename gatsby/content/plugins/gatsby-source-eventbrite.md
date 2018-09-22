---
path: "/gatsby-source-eventbrite"
title: GatsbyJS source plugin for eventbrite.com 
date: "2018-08-12"
tags:
  - v2
  - source
  - eventbrite
---

## Eventbrite source plugin 

You wanna show your eventbrite events on your Gatby page. We have you covered? 

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-eventbrite`,
    options: {
      organizationId: `The ID of your organization`,
      accessToken: `your_access_token`,
      // OPTIONAL: Defaults are Events and Venues
      entities: ['events', 'venues','...']
    },
  },
]
```

## Download
* [NPM](https://www.npmjs.com/package/gatsby-source-eventbrite)
* [Github](https://github.com/GatsbyCentral/gatsby-source-eventbrite)



