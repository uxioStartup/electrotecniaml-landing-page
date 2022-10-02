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

        terminos: allPagesJson(
          filter: { idPage: { eq: "terminos-servicio" } }
        ) {
          nodes {
            idPage
            content {
              category
              description
              title
            }
          }
        }

        privacidad: allPagesJson(
          filter: { idPage: { eq: "politica-privacidad" } }
        ) {
          nodes {
            idPage
            content {
              category
              description
              title
            }
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
          products: result.data.productos.subitems,
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
          products: result.data.servicios.subitems,
        },
      })
  })

  const pageTemplate = path.resolve(`src/templates/template.js`)

  const pathTerminos = result.data.terminos.nodes[0].idPage

  createPage({
    path: pathTerminos,
    component: pageTemplate,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      idPage: pathTerminos,
      title: result.data.terminos.nodes[0].title,
      description: result.data.terminos.nodes[0].description,
    },
  })

  const pathPrivacidad = result.data.privacidad.nodes[0].idPage

  createPage({
    path: pathPrivacidad,
    component: pageTemplate,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      idPage: pathPrivacidad,
      title: result.data.privacidad.nodes[0].title,
      description: result.data.privacidad.nodes[0].description,
    },
  })
}
