import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageTitle from "../components/PageTitle"

import ServiceDetails from "../components/ServiceDetails"

const ProductTemplate = ({ data, pageContext }) => {
  const { product, idPage, products } = pageContext
  return (
    <Layout>
      <PageTitle title={data.allPagesJson.edges[0].node.content.title} />
      <ServiceDetails
        sidebar={products}
        title={data.allPagesJson.edges[0].node.content.title}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($idPage: String) {
    allPagesJson(filter: { idPage: { eq: $idPage } }) {
      edges {
        node {
          idPage
          content {
            category
            title
            description
          }
        }
      }
    }
  }
`

export default ProductTemplate
