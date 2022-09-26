import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="main-footer padd-top">
    <div className="auto-container">
      {/* <!--Widgets Section--> */}
      <div className="widgets-section">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div
              id="montro_get_in_touch-3"
              className="footer-widget widget_montro_get_in_touch"
            >
              <div className="links-widget">
                <h4>Get In Touch</h4>{" "}
                <ul className="list-style-two">
                  <li>
                    <span className="icon fa fa-send"></span>National Vicksr 88
                    broklyn <br /> golden street, USA
                  </li>

                  <li>
                    <span className="icon fa fa-envelope"></span>Email :{" "}
                    <a href="mailto:info@themerange.net">info@themerange.net</a>
                  </li>

                  <li>
                    <span className="icon fa fa-phone"></span>Phone :{" "}
                    <a href="tel:">+22 (5) 789 0001</a>
                  </li>

                  <li>
                    <span className="icon fa fa-globe"></span>Support :{" "}
                    <a href="tel:">+15 (2) 654 0002</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">MAPA</div>
        </div>
      </div>
    </div>

    {/* <!-- Footer Bottom --> */}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="row clearfix">
          {/* <!-- Column --> */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <div className="copyright">
              Copyright &copy; 2022{" "}
              <a href="https://themerange.net/wp/montro">Montro</a> All rights
              reserved.
            </div>
          </div>

          {/* <!-- Column --> */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            {/* <!-- Menu Box --> */}
            <ul className="social-box">
              <li
                id="menu-item-1901"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1901"
              >
                <a
                  title="Terms &#038; Condition"
                  href="https://themerange.net/wp/montro/terms-condition/"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Terms &#038; Condition
                </a>
              </li>
              <li
                id="menu-item-1902"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1902"
              >
                <a
                  title="Privacy &#038; Policy"
                  href="https://themerange.net/wp/montro/privacy-policy/"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Privacy &#038; Policy
                </a>
              </li>
              <li
                id="menu-item-1903"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1903"
              >
                <a
                  title="Contact Us"
                  href="https://themerange.net/wp/montro/contact-us-01/"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
