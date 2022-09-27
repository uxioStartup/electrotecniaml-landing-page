/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./../css/index.css"
import Footer from "./footer"
import BackToTop from "./BackToTop"

import "../components/script"
import "jquery-migrate"

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
        </div>
        {/* <!-- End Page Wrapper --> */}
      </div>

      <BackToTop />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
