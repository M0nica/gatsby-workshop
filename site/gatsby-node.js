const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require(`path`);

// onCreateNode is called when a node is created
// this API allows us to modify nodes during the creation process
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // we only care about the SpeakersYaml node type where our speaker data is defined
  if (node.internal.type === `SpeakersYaml`) {
    // let's add a new field to the node for the slug
    createNodeField({
      node,
      name: `slug`,
      value: `speaker/${node.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")}`,
    });
  }
};

// createPages lets us programmatically create pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // lets query to get back all of the slugs that we generated for speaker data
  const result = await graphql(`
    query {
      allSpeakersYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // for each speaker that was returned from the above graphql query
  // let's create a new page at it's slug using the speaker-page component
  // the speaker page component has a query that relies on the slug being passed in,
  // we'll pass in the slug via the context parameter in createPage
  result.data.allSpeakersYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/speaker-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
