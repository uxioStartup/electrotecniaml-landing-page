import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ServiceBlock = ({ image, text, title, icon }) => {
  return (
    <>
      {/* <!-- Service Block Two --> */}
      <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <GatsbyImage image={getImage(image)} alt="" />
            <div className="overlay-box">
              <div className="overlay-inner">
                <div className="content">
                  <div className="text">{text}</div>
                  <a
                    href="general-contracting/index.html"
                    className="read-more theme-btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-box">
            <div className="box-inner">
              <div className={icon}></div>
              <h6>
                <a href="general-contracting/index.html">{title}</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceBlock
