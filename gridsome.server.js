// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(async ({ graphql, createPage }) => {
  //   const { data } = await graphql(`
  //     {
  //       allPost {
  //         edges {
  //           node {
  //             id,
  //             path,
  //             title,
  //             excerpt,
  //             image
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   data.allPost.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `/new${node.path}`,
  //       component: './src/templates/Post.vue',
  //       context: {
  //         id: node.id,
  //         title: node.title,
  //         image: node.image,
  //         excerpt: node.excerpt
  //       }
  //     })
  //   })
  // })
}
