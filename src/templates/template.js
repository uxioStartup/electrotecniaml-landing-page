import * as React from "react"
import Layout from "../components/layout"

import PageTitle from "../components/PageTitle"

const PageTemplate = ({ pageContext }) => {
  const { title, description } = pageContext
  return (
    <Layout>
      <PageTitle title={title} />
    </Layout>
  )
}

export default PageTemplate
