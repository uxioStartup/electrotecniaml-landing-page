/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

import $ from "jquery"

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

  useEffect(() => {
    // Scroll to a Specific Div
    if ($(".scroll-to-target").length) {
      $(".scroll-to-target").on("click", function () {
        var target = $(this).attr("data-target")
        // animate
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1500
        )
      })
    }
  })

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

      {/* <!--Scroll to top--> */}
      <div
        className="back-to-top scroll-to-target show-back-to-top"
        data-target="html"
      >
        TOP
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
