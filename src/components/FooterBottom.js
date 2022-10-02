import { Link } from "gatsby"
import * as React from "react"

const FooterBottom = () => (
  <>
    {/* <!-- Footer Bottom --> */}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="row clearfix">
          {/* <!-- Column --> */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <div className="copyright">
              Copyright 2022
              <Link to="/">Montro</Link> All rights reserved.
            </div>
          </div>

          {/* <!-- Column --> */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            {/* <!-- Menu Box --> */}
            <ul className="social-box">
              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                <Link
                  title="Términos y condiciones del servicio"
                  to="/terminos-servicio"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Términos y condiciones del servicio
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                <Link
                  title="Política de privacidad"
                  to="/politica-privacidad"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Política de privacidad
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page ">
                <Link
                  title="Contacto"
                  to="/contacto"
                  className="hvr-underline-from-left1"
                  data-scroll
                  data-options="easing: easeOutQuart"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default FooterBottom
