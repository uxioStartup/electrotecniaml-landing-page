import * as React from "react"
import Layout from "../components/layout"

import CallToActionBtn from "../components/CallToActionBtn"

const ContactPage = () => (
  <Layout>
    {/* <!-- Page Title --> */}
    <section
      className="page-title"
      style={{ backgroundImage: "url(../wp-content/uploads/2022/05/7.jpg)" }}
    >
      <div className="auto-container">
        <ul className="page-breadcrumb">
          <li>
            <a href="../index.html">Inicio</a>
          </li>
          <li>Contacto</li>
        </ul>
        <h2> Contacto</h2>
      </div>
    </section>
    {/* <!-- End Page Title --> */}

    <section
      className="elementor-section elementor-top-section elementor-element  elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c9b4fa"
          data-id="7c9b4fa"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-c7a57d5 elementor-widget elementor-widget-montro_contact_us_v2"
              data-id="c7a57d5"
              data-element_type="widget"
              data-widget_type="montro_contact_us_v2.default"
            >
              <div className="elementor-widget-container">
                {/* <!-- Contact Page Section --> */}
                <section className="contact-page-section">
                  <div className="auto-container">
                    <div className="row clearfix">
                      {/* <!-- Form Column --> */}
                      <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                          {/* <!-- Sec Title --> */}
                          <div className="sec-title">
                            <div className="title">
                              <span className="separator"></span>Contact Now
                            </div>
                            <h2>Get in touch</h2>
                          </div>

                          {/* <!-- Default Form --> */}
                          <div className="default-form contact-form">
                            <div
                              role="form"
                              className="wpcf7"
                              lang="en-US"
                              dir="ltr"
                            >
                              <div className="screen-reader-response">
                                <p
                                  role="status"
                                  aria-live="polite"
                                  aria-atomic="true"
                                ></p>
                                <ul></ul>
                              </div>
                              <CallToActionBtn />
                            </div>
                          </div>
                          {/* <!--End Default Form--> */}
                        </div>
                      </div>

                      {/* <!-- Info Column --> */}
                      <div className="info-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                          {/* <!-- Sec Title --> */}
                          <div className="sec-title">
                            <div className="title">
                              <span className="separator"></span>Our Info
                            </div>
                            <h2>Contact Information</h2>
                          </div>

                          <ul className="contact-info">
                            <li>
                              <span className="icon flaticon-telephone"></span>
                              <strong>Phone :</strong>
                              <a href="tel:">+9 (000) 999-9999</a>
                            </li>

                            <li>
                              <span className="icon flaticon-email-4"></span>
                              <strong>Email :</strong>
                              <a href="mailto:info@themerange.net">
                                info@themerange.net
                              </a>
                            </li>

                            <li>
                              <span className="icon flaticon-maps-and-flags"></span>
                              <strong>Address :</strong>
                              Portfolio Technology 14, Capetown <br /> 12 Road,
                              Chicago, 9999, USA
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!-- End Contact Page Section --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
