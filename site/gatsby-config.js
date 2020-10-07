/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `TechNSketchXConf 2020`,
    description: `An amazing conference to bring together professional and aspriing technical sketch noters.`,
    author: `@waterproofheart`,
    siteUrl: `https://monica.dev/gatsbyworkshop`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/paintbrush-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
