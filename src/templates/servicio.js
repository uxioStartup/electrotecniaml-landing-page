import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PageTitle from "../components/PageTitle"

import ServiceDetails from "../components/ServiceDetails"

const ServiceTemplate = ({ data, pageContext }) => {
  const { product, idPage } = pageContext
  console.log(idPage)
  return (
    <Layout>
      <PageTitle title={product.name} />
      <ServiceDetails />
    </Layout>
  )
}

export const query = graphql`
  query ($idPage: String) {
    pagesJson(idPage: { eq: $idPage }) {
      content {
        category
        description
        title
      }
    }
  }
`

export default ServiceTemplate
