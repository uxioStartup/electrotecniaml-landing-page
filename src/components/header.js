import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import $ from "jquery"
import CallToActionBtn from "./CallToActionBtn"

const Header = ({ siteTitle }) => {
  const data = [
    {
      icon: "flaticon-phone",
      description: "Requesting a Call:",
      data: <a href="tel:">(301) 357 1234</a>,
    },
    {
      icon: "flaticon-clock-1",
      description: "Sunday - Friday:",
      data: "9am - 8pm",
    },
    {
      icon: "flaticon-location-1",
      description: "1428 Callison Laney Building",
      data: "California",
    },
  ]

  const item_menu = [
    { name: "Inicio", href: "/" },
    {
      name: "Productos",
      href: "productos",
      subitems: [
        { name: "Hormigón elaborado" },
        { name: "Áridos" },
        { name: 'Planta móvil de elaboración "On Site"' },
      ],
    },
    {
      name: "Servicios",
      href: "servicios",
      subitems: [
        { name: "Servicio de bombeo" },
        { name: "Asesoramiento online" },
        { name: "Atención personalizada" },
      ],
    },
    { name: "Contacto", href: "contacto" },
  ]

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
                <a href="https://themerange.net/wp/montro/" title="Montro">
                  <img
                    src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo.svg"
                    alt="logo"
                    style={{ width: "200px", height: "70px" }}
                  />
                </a>
              </div>
            </div>

            <div className="pull-right upper-right clearfix">
              {data.map((item, i) => {
                return (
                  <div className="upper-column info-box" key={i}>
                    <div className="icon-box">
                      <span className={item.icon}></span>
                    </div>
                    <ul>
                      <li>{item.description}</li>
                      <li>
                        <strong>{item.data}</strong>
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
                    {item_menu.map((item, i) => {
                      let submenu = ""
                      let inputProps = {
                        href: item.href,
                      }
                      let classes =
                        "menu-item menu-item-type-custom menu-item-object-custom"
                      if (item.hasOwnProperty("subitems")) {
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
                            <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                              <a
                                title={subitem.name}
                                href="https://themerange.net/wp/montro/services/"
                              >
                                {subitem.name}
                              </a>
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
                        <li className={classes} key={item.name}>
                          <a title={item.name} {...inputProps}>
                            {item.name}
                          </a>
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
              <img
                src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo-small.svg"
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
              <img
                src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo.svg"
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
