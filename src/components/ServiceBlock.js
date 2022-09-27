import * as React from "react"

const ServiceBlock = ({ image, text, title, icon }) => (
  <>
    {/* <!-- Service Block Two --> */}
    <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <img
            loading="lazy"
            width="330"
            height="240"
            src={image}
            className="attachment-montro_330x240 size-montro_330x240 wp-post-image"
            alt=""
          />{" "}
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

export default ServiceBlock
