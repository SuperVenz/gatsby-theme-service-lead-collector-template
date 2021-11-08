const path = require(`path`);
module.exports = (options) => ({
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(`./src`, `img`),
      },
    },

    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => node.name,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: options.projectId,
        dataset: options.dataset,
        useCdn: options.useCdn,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
});
