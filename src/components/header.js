import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import $ from "jquery"
import CallToActionBtn from "./CallToActionBtn"

const Header = ({}) => {
  let data = useStaticQuery(graphql`
    query {
      allHeaderContactInformationJson {
        nodes {
          data
          description
          icon
        }
      }
      allHeaderMenuJson {
        nodes {
          href
          name
          subitems {
            name
            href
          }
        }
      }
    }
  `)

  useEffect(() => {
    //Mobile Nav Hide Show
    if ($(".mobile-menu-two").length) {
      var mobileMenuContent = $(".header-style-four .navigation").html()
      $(".mobile-menu-two .navigation").append(mobileMenuContent)
      $(".sticky-header").append(mobileMenuContent)
      $(".mobile-menu-two .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible")
      })

      //Dropdown Button
      $(".mobile-menu-two li.dropdown .dropdown-btn").on("click", function () {
        $(this).prev("ul").slideToggle(500)
      })

      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible")
      })

      //Menu Toggle Btn
      $(".mobile-menu-two .menu-backdrop,.mobile-menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible")
        }
      )
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      // $(".mobile-menu .menu-box").mCustomScrollbar()

      var mobileMenuContent = $(".main-header .nav-outer .main-menu").html()
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent)
      $(".sticky-header .main-menu").append(mobileMenuContent)

      //Dropdown Button
      $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
        $(this).toggleClass("open")
        $(this).prev("ul").slideToggle(500)
      })
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible")
      })

      //Menu Toggle Btn
      $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible")
        }
      )
    }
  })

  return (
    <header className="main-header header-style-one">
      {/* <!--Header-Upper--> */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="clearfix">
            {/* <!-- Logo Box --> */}
            <div className="pull-left logo-box">
              <div className="logo">
                <Link to="/" title="Montro">
                  <StaticImage
                    src="../images/logo.svg"
                    alt="logo"
                    style={{ width: "200px", height: "70px" }}
                  />
                </Link>
              </div>
            </div>

            <div className="pull-right upper-right clearfix">
              {data.allHeaderContactInformationJson.nodes.map((item, i) => {
                return (
                  <div className="upper-column info-box" key={"ib" + i}>
                    <div className="icon-box">
                      <span className={item.icon}></span>
                    </div>
                    <ul>
                      <li>{item.description}</li>
                      <li>
                        <strong
                          dangerouslySetInnerHTML={{ __html: item.data }}
                        ></strong>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Header Upper--> */}

      {/* <!--Header Lower--> */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="clearfix">
            <div className="nav-outer clearfix pad-left">
              {/* <!-- Nav Btn --> */}

              {/* <!-- Mobile Navigation Toggler --> */}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
              </div>
              {/* <!-- Main Menu --> */}
              <nav className="main-menu show navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    {data.allHeaderMenuJson.nodes.map((item, i) => {
                      let submenu = ""
                      let inputProps = {
                        to: "/" + item.href,
                      }
                      let classes =
                        "menu-item menu-item-type-custom menu-item-object-custom"
                      if (
                        item.hasOwnProperty("subitems") &&
                        item.subitems != null
                      ) {
                        classes = classes + " dropdown"
                        inputProps = {
                          "data-toggle": "dropdown1",
                          className: "hvr-underline-from-left1",
                          "aria-expanded": "false",
                          "data-scroll": true,
                          "data-options": "easing: easeOutQuart",
                        }

                        let submenu_items = item.subitems.map((subitem, i) => {
                          return (
                            <li
                              className="menu-item menu-item-type-post_type menu-item-object-page "
                              key={"si" + i}
                            >
                              <Link
                                title={subitem.name}
                                to={"/" + item.href + "/" + subitem.href}
                              >
                                {subitem.name}
                              </Link>
                            </li>
                          )
                        })
                        submenu = (
                          <ul role="menu" className="submenu">
                            {submenu_items}
                          </ul>
                        )
                      }
                      return (
                        <li className={classes} key={"im" + item.name}>
                          <Link title={item.name} {...inputProps}>
                            {item.name}
                          </Link>
                          {submenu}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              <CallToActionBtn />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Lower --> */}

      {/* <!-- Sticky Header  --> */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/* <!--Logo--> */}
          <div className="logo pull-left">
            <a href="https://themerange.net/wp/montro/" title="Montro">
              <StaticImage
                src="../images/logo-small.svg"
                alt="logo"
                style={{ width: "135px", height: "50px" }}
              />
            </a>{" "}
          </div>
          {/* <!--Right Col--> */}
          <div className="pull-right">
            {/* <!-- Main Menu --> */}
            <nav className="main-menu">
              {/* <!--Keep This Empty / Menu will come through Javascript--> */}
            </nav>
            {/* <!-- Main Menu End--> */}

            {/* <!-- Options Box --> */}
            <div className="options-box clearfix">
              {/* <!--Search Box--> */}

              <div className="btn-box">
                <a
                  href="https://themerange.net/wp/montro/contact-us-01/"
                  className="theme-btn btn-style-one"
                >
                  <span className="txt">Get A Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Menu --> */}

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-multiply"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="https://themerange.net/wp/montro/" title="Montro">
              <StaticImage
                src="../images/logo.svg"
                alt="logo"
                style={{ width: "200px", height: "70px" }}
              />
            </a>
          </div>
          <div className="menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
