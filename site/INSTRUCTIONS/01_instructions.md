# 01 &bull; Customize Gatsby Site Information

![01_metadata-on-site](./media/01_metadata-on-site.png)

## Background 📚

Generally important Gatsby site configuration lives within the `gatsby-config.js` file at the root of the site folder. You'll usally see a `gatsby-config.js` file that looks like:

```
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Monica Powell`,
      summary: `who creates technology to elevate people.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `waterproofheart`,
    },
  },
  plugins: [// we'll talk about the Gatsby plugin ecosystem soon! ]
};
```

The `siteMetadata` from the `gatsby-config` can be accessed throughout the site via GraphQL queries and is a common pattern for referencing sitewide metadata within Gatsby applications. The array of `plugins` allow you to configure [2300+ Gatsby Plugins](https://www.gatsbyjs.com/plugins) for your site.

## Exercise 🤓

Customize the `siteMetadata` object in the `gatsby-config.js` with your own information (i.e, name, site title, site description)

### Files 🗂

`gatsby-config.js`

## Extra Credit 💯

Upload a new profile picture

### Files 🗂

` content/assets/profile-pic.png`

`src/components/bio.js`
