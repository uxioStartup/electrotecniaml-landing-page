/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="">
<div className="page-wrapper   ">
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      
	</div>{/* <!-- End Page Wrapper --> */}
</div>


{/* <!--Scroll to top--> */}
<div className="back-to-top scroll-to-target show-back-to-top" data-target="html">TOP</div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
