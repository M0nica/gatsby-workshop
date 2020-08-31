# 02 &bull; Add New Filesystem Type to Site

## Background 📚

Gatsby sites can use GraphQL to interface with external data as well as local file date. The plugin `gatsby-source-filesystem` allows local file to be added to the GraphQL graph.

If you open up this project's `gatsby-config.js` then in the `plugins` array you'll see:

```{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    }
```

This makes all of the markdown content within `content/blog` available to query throughout the Gatsby site.

A sample query to read the data would look like

```{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          url
        }
      }
    }
  }
}
```

and returns data that looks like:

```
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "excerpt": "Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the blind texts. Separated they live in…",
            "fields": {
              "slug": "/new-beginnings/"
            },
            "frontmatter": {
              "date": "May 28, 2015",
              "title": "New Beginnings",
              "description": "This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.",
              "url": null
            }
          }
        },
      ]
    }
  },
}
```

If you are running the site locally then you see a live interactive version [view the results of this query in GraphiQL](<http://localhost:8000/__graphql?query=%7B%0A%20%20allMarkdownRemark(sort%3A%20%7Bfields%3A%20%5Bfrontmatter___date%5D%2C%20order%3A%20DESC%7D)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20excerpt%0A%20%20%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20%20%20date(formatString%3A%20%22MMMM%20DD%2C%20YYYY%22)%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=undefined>).

## Exercise 🤓

Create a new directory `websites` and make the files within it accessible to GraphQL. When you successfully complete this exercise you should the content you added in `content/websites/jamstack.md` appear on the homepage.

### Files 🗂

- gatsby-config.js
- create `content/websites`
- add a file to `content/websites/jamstack.md` with the below content:

```
---
title: Jamstack Conf
date: "2015-05-01T22:12:03.284Z"
description: "Conference website for Jamstack Conf"
url: "https://www.jamstackconf.com"
---
```

## Extra Credit 💯

TBD
