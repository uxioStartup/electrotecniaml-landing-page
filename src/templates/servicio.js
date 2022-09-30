import * as React from "react"
import Layout from "../components/layout"

import PageTitle from "../components/PageTitle"

import ServiceDetails from "../components/ServiceDetails"

const ServiceTemplate = ({ pageContext }) => {
  const { product, idPage } = pageContext
  return (
    <Layout>
      <PageTitle title={product.name} />
      <ServiceDetails />
    </Layout>
  )
}

export default ServiceTemplate
