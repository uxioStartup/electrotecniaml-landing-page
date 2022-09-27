import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import FooterBottom from "./FooterBottom"

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
