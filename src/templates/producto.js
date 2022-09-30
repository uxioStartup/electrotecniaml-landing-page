import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageTitle from "../components/PageTitle"

import ServiceDetails from "../components/ServiceDetails"

const ProductTemplate = ({ data, pageContext }) => {
  const { product, idPage } = pageContext
  console.log(idPage)
  console.log(idPage)
  return (
    <Layout>
      <PageTitle title={data.allPagesJson.edges[0].node.content.title} />
      <ServiceDetails />
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
