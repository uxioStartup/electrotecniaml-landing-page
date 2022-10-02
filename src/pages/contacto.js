import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import CallToActionBtn from "../components/CallToActionBtn"
import PageTitle from "../components/PageTitle"

const ContactPage = ({ data }) => (
  <Layout>
    <PageTitle title="Contacto" />
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
                              <span className="separator"></span>
                              {data.allPagesJson.nodes[0].block1.category}
                            </div>
                            <h2>{data.allPagesJson.nodes[0].block1.title}</h2>
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
                              <span className="separator"></span>
                              {data.allPagesJson.nodes[0].block2.category}
                            </div>
                            <h2>{data.allPagesJson.nodes[0].block2.title}</h2>
                          </div>

                          <ul className="contact-info">
                            {data.allPagesJson.nodes[0].contactInformation.map(
                              (item, i) => {
                                return (
                                  <li key={"ci" + i}>
                                    <span className={item.icon}></span>
                                    <strong>{item.title}</strong>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.data,
                                      }}
                                    ></div>
                                  </li>
                                )
                              }
                            )}
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

export const query = graphql`
  query {
    allPagesJson(filter: { idPage: { eq: "contacto" } }) {
      nodes {
        idPage
        contactInformation {
          data
          icon
          title
        }
        block1 {
          category
          title
        }
        block2 {
          category
          title
        }
      }
    }
  }
`

export default ContactPage
