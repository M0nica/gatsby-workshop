# 01 • Customize Gatsby Site Information
## Background 📚
Generally important Gatsby site configuration and meta data lives within the gatsby-config.js file at the root of the site folder. You'll usually see a gatsby-config.js file that resembles:

```js
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

The siteMetadata from the gatsby-config can be accessed throughout the site via GraphQL queries and is a common pattern for referencing sitewide metadata within Gatsby applications. The array of plugins allow you to configure 2300+ Gatsby Plugins for your site. Check out the Gatsby site for more information on the Gatsby Config API. 

## Exercise 🤓
Customize the siteMetadata object in the gatsby-config.js with your own information (i.e, name, site title, site description, twitter handle, etc.)
 
Note: Changes to the gatsby-config require restarting the server to see them on the site (i.e. CTRL + C and then run `npm run start`)

## Files 🗂
- gatsby-config.js

## Extra Credit 💯
- Upload a new site icon

## Related Files 🗂
- src/images/pencil-icon.png
- gatsby-config.js
- src/components/header.js

## Example Solution Code
- [Exercise 1 Solution: customize the gatsby-config](https://github.com/M0nica/gatsby-workshop/pull/4/files)

## Example Solution Demo
- https://deploy-preview-4--gatsbyjsdemo.netlify.app/

