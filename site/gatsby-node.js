const captureWebsite = require("capture-website");

// TODO: more efficiently process screenshots https://github.com/sindresorhus/capture-website/issues/42
// process.setMaxListeners(0);

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

/* Generate Screenshots of Websites*/

exports.createPages = async ({ graphql, actions }) => {
  const websiteFiles = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "websites" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                description
                url
              }
            }
          }
        }
      }
    }
  `);

  if (websiteFiles.errors) {
    throw websiteFiles.errors;
  }

  const websitesData = websiteFiles.data.allFile.edges;

  websitesData.map((website) => {
    const { url, title } = website.node.childMarkdownRemark.frontmatter;

    const imageFileName = `${title.split(" ").join("")}-screenshot.png`;

    console.log(`attempting to capture a screenshot of ${url}`);

    captureWebsite
      .file(url, `public/${imageFileName}`, {
        overwrite: true,
        delay: 4,
      })
      .catch((error) => console.log(error));
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
