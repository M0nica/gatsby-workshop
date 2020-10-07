/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `GatsbyConf 2020`,
    description: `A fun conference for fun people`,
    author: `@kstrickland0612`,
    siteUrl: `https://nostalgic-joliot-3c88b4.netlify.app`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/rainbow-icon.jpg`,
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
