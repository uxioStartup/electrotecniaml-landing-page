const webpack = require("webpack")
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  })
}

const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        productos: headerMenuJson(name: { eq: "Productos" }) {
          name
          href
          subitems {
            href
            name
          }
        }
        servicios: headerMenuJson(name: { eq: "Servicios" }) {
          name
          href
          subitems {
            href
            name
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const productoTemplate = path.resolve(`src/templates/producto.js`)

  result.data.productos.subitems.forEach(node => {
    const path = "/" + result.data.productos.href + "/" + node.href
    if (node.href != "")
      createPage({
        path,
        component: productoTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          idPage: path,
          product: node,
        },
      })
  })

  const servicioTemplate = path.resolve(`src/templates/servicio.js`)
  result.data.servicios.subitems.forEach(node => {
    const path = "/" + result.data.servicios.href + "/" + node.href
    if (node.href != "")
      createPage({
        path,
        component: servicioTemplate,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          idPage: path,
          product: node,
        },
      })
  })
}
