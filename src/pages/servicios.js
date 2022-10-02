import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import PageTitle from "../components/PageTitle"
import ServiceBlock from "../components/ServiceBlock"

const ServicesPage = ({ data }) => (
  <Layout>
    <PageTitle title="Servicios" />
    <section
      className="elementor-section elementor-top-section elementor-element  elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element "
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element  elementor-widget elementor-widget-montro_services_v4"
              data-element_type="widget"
              data-widget_type="montro_services_v4.default"
            >
              <div className="elementor-widget-container">
                {/* <!-- Services Section Two --> */}
                <section className="services-section-two">
                  <div
                    className="pattern-layer"
                    style={{
                      backgroundImage:
                        "url(../wp-content/uploads/2022/05/pattern-18.png)",
                    }}
                  ></div>

                  <div className="side-icon">
                    <StaticImage
                      src="../images/content/service-icon.png"
                      alt="Awesome"
                    />
                  </div>
                  <div className="auto-container">
                    {/* <!-- Sec Title --> */}
                    <div className="sec-title centered">
                      <div className="title">
                        <span className="separator"></span>What We Do
                        <span className="separator-two"></span>
                      </div>
                      <h2>
                        We will satisfy you by our <br /> servicing plan
                      </h2>
                    </div>
                    <div className="row clearfix">
                      <ServiceBlock
                        title="General Contracting"
                        text="We produce positive results growing Industrial estates, we have established corporate economy."
                        icon="icon flaticon-industrial-robot"
                        image={data.img1.edges[0].node.childImageSharp}
                      />

                      <ServiceBlock
                        title="Apartment Design"
                        text="We produce positive results growing Industrial estates, we have established corporate economy."
                        icon="icon flaticon-project"
                        image={data.img1.edges[0].node.childImageSharp}
                      />

                      <ServiceBlock
                        title="Metrial Managment"
                        text="We produce positive results growing Industrial estates, we have established corporate economy."
                        icon="icon flaticon-wheelbarrow"
                        image={data.img1.edges[0].node.childImageSharp}
                      />
                    </div>
                  </div>
                </section>
                {/* <!-- End Services Section Two --> */}
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
    img1: allFile(filter: { name: { eq: "about-2" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ServicesPage
