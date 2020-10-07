# 06 • Adding Speaker/Talk Data Type

## Background 📚

The Gatsby ecosystem involves a wide variety of plugins that help support the core functionality of Gatsby sites as well as provide additional enhancements. A popular Gatsby plugin is the gatsby-source-file-system plugin (https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) which enables you to add local data to the site’s internal GraphQL API.

> The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.
> In order to use the `gatsby-source-filesystem` plugin once it is installed as a project dependency you will need to update the `gatsby-config.js` file to use the plugin. This is the same file where we configured the site meta data earlier. In addition to the `siteMetaData` key of the config object is an array named `plugins` which is where Gatsby plugins are generally installed.
> In our case in addition to using the gatsby-source-filesystem plugin we should use the gatsby-transformer-yaml function to parse data from YAML files. Below is an example of a `gatsby-config.js` where the plugins has the gatsby-source-filesystem configured to add the data that lives in the `data` directory to its GraphQL API.

```module.exports = () => ({

 siteMetadata: {

   title: `Gatsby`,

   siteUrl: `https://www.gatsbyjs.org`,

   description: `Blazing fast modern site generator for React`,

   longDescription: `Blazing fast modern site generator for React`

 },

 plugins: [
`gatsby-transformer-yaml`,
   {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `./src/data`,
     },
   },
 ]
});
```

## Exercise 🤓

Add a new data type for conference speakers. Hint: You will need to configure `gatsby-transformer-yaml` and `gatsby-source-filesystem` in the `gatsby-config` file.

## Files 🗂

- site/gatsby-config.js

For the path of the data you can use the pre-existing conference speaker data which lives in `site/src/data`

If you successfully added the speaker data to the GraphQL API then you can run:

```
query FetchSpeakers {
  allSpeakersYaml {
	edges {
  	node {
    	id
    	avatar
    	name
    	title
    	time
  	}
	}
  }
}

```

in the [GraphQL Playground](http://localhost:8000/___graphql?query=query%20FetchSpeakers%20%7B%0A%20%20allSpeakersYaml%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20avatar%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20time%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=FetchSpeakers) and have it return something that looks like:

```
{
"data": {
  "allSpeakersYaml": {
    "edges": [
      {
        "node": {
          "id": "d1251971-3091-5906-a241-e66474a66273",
          "avatar": "woman-generated-avatar-1.png",
          "name": "Angela Toad",
          "title": "Introduction to Sketching Animals",
          "time": "12:00"
        }
      },
      {
        "node": {
          "id": "79791060-9578-5381-b772-4678f8e833f6",
          "avatar": "man-generated-avatar-1.png",
          "name": "Larry Foam",
          "title": "Getting Started with Sketchnoting",
          "time": "10:00"
        }
      }
    ]
  }
},
}
```



## Example Solution Code
- [Exercise 6 - Add Speaker Data to GraphQL](https://github.com/M0nica/gatsby-workshop/pull/9/files)

## Example Solution Demo
- https://deploy-preview-9--gatsbyjsdemo.netlify.app/
