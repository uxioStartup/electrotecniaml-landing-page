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
  </>
)

export default FooterBottom
