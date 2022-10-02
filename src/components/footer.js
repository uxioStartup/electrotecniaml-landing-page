import * as React from "react"
import PropTypes from "prop-types"
import FooterBottom from "./FooterBottom"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer className="main-footer padd-top">
    <div className="auto-container">
      {/* <!--Widgets Section--> */}
      <div className="widgets-section">
        <div className="row clearfix">
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div
              id="montro_about_company-3"
              class="footer-widget widget_montro_about_company"
            >
              <div class="logo-widget">
                <div class="logo">
                  <Link tp="/">
                    <StaticImage src="../images/logo-2.svg" alt="Logo" />
                  </Link>
                </div>
                <div class="text">
                  Montro is an exclusive multi-purpose 100% responsive Template
                  Theme with powerful features. Simple and well-structured
                  coding, high quality and flexible layout, scalable features
                  along with color schemes to create tailor-cut websites.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div
              id="montro_get_in_touch-3"
              className="footer-widget widget_montro_get_in_touch"
            >
              <div className="links-widget">
                <h4>Get In Touch</h4>{" "}
                <ul className="list-style-two">
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
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div
              id="montro_get_free_estimate-2"
              class="footer-widget widget_montro_get_free_estimate"
            >
              <div class="request-widget">
                <h4>Get Free Estimate</h4>
                <a class="phone" href="tel:">
                  123-456-78910
                </a>

                <div class="text">
                  Our online scheduling and payment system is safe.
                </div>

                <a
                  href="contact-us-01/index.html"
                  class="btn-style-six theme-btn"
                >
                  <span class="txt">Request With Online Form</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterBottom />
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
