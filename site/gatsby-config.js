/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `SketchXConf 2020`,
    description: `A conference site mockup made from a Gatsby Workshop`,
    author: `Richard Pastenes`,
    social: {
      twitter: `@richardpastenes`,
    },
    siteUrl: `https://gatsby-workshop-richard.netlify.app/`,
  },
  plugins: [
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
        icon: `src/images/favicon.png`,
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
