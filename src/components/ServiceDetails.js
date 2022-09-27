import * as React from "react"

const ServiceDetails = () => (
  <>
    {/* <!-- Sidebar Page Container --> */}
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          {/* <!-- Sidebar Side --> */}
          <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
            <aside className="sidebar sticky-top">
              <div
                id="nav_menu-3"
                className="sidebar-widget service-sidebar widget_nav_menu"
              >
                <div className="widget-content">
                  <div className="sidebar-title">
                    <h4>Other Services</h4>
                  </div>
                  <div className="menu-services-menu-container">
                    <ul id="menu-services-menu" className="menu">
                      <li
                        id="menu-item-1753"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1723 current_page_item menu-item-1753"
                      >
                        <a href="index.html" aria-current="page">
                          General Contracting
                        </a>
                      </li>
                      <li
                        id="menu-item-1754"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1754"
                      >
                        <a href="../apartment-design/index.html">
                          Apartment Design
                        </a>
                      </li>
                      <li
                        id="menu-item-1755"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1755"
                      >
                        <a href="../metrial-management/index.html">
                          Metrial Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="montro_add_banner-2"
                className="sidebar-widget service-sidebar widget_montro_add_banner"
              >
                <div className="widget-content">
                  {/* <!-- Banner Widget --> */}
                  <div
                    className="banner-widget"
                    style={{
                      backgroundImage:
                        "url(../../wp-content/themes/montro/assets/images/resource/banner-widget.jpg)",
                    }}
                  >
                    <div className="inner-box">
                      <div className="title">Add Your Banner</div>
                      <h3>
                        How to Increase <br /> Your Profit in{" "}
                      </h3>

                      <a
                        href="../../contact-us-01/index.html"
                        className="btn-style-six theme-btn"
                      >
                        <span className="txt">Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </aside>
          </div>

          {/* <!-- Content Side --> */}
          <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
            <div className="service-detail">
              <div className="inner-box">
                <div className="image">
                  <img
                    src="../../wp-content/uploads/2022/05/service-7.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <div className="lower-content">
                  <h3>Automotive parts and system build</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been industry's standard dummy text ever since the
                    1500s Lorem Ipsum is simply dummy text of the printing.
                  </p>

                  <h4>Our Process</h4>
                  <div className="row clearfix">
                    {/* <!-- Feature Column --> */}
                    <div className="feature-column col-lg-4 col-md-4 col-md-12">
                      <div className="inner-column">
                        <span className="icon flaticon-industrial-robot"></span>
                        <h5>Research &amp; Analysis</h5>
                      </div>
                    </div>
                    {/* <!-- Feature Column --> */}
                    <div className="feature-column col-lg-4 col-md-4 col-md-12">
                      <div className="inner-column">
                        <span className="icon flaticon-factory"></span>
                        <h5>Industry Development</h5>
                      </div>
                    </div>
                    {/* <!-- Feature Column --> */}
                    <div className="feature-column col-lg-4 col-md-4 col-md-12">
                      <div className="inner-column">
                        <span className="icon flaticon-electric-car"></span>
                        <h5>Production Launch</h5>
                      </div>
                    </div>
                  </div>

                  <div className="two-column">
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-6 col-sm-12">
                        <div className="image">
                          <img
                            src="../../wp-content/uploads/2022/05/service-9.jpg"
                            alt="Signature"
                          />
                        </div>
                      </div>
                      <div className="content-column col-lg-6 col-md-6 col-sm-12">
                        <h4>
                          We are giving you a chance <br /> to build your dream
                        </h4>
                        <p>
                          At vero eos et accusamus et iusto odio digni goi
                          kussimos ducioip mus qui blanditiis praese. Ntium
                          voluum deleniti atque corrupti to quosto rica.
                        </p>
                        <p>
                          Lorem Ipsum has been industry's standard dummy text
                          ever since the 1500s Lorem Ipsum is simply dummy text
                          of the printing.
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <h4>What You Receive?</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been industry's standard dummy text ever since the
                    1500s Lorem Ipsum is simply dummy text of the printing.
                  </p>

                  {/* <!-- Service Info Tabs --> */}
                  <div className="service-info-tabs">
                    {/* <!-- Service Tabs --> */}
                    <div className="service-tabs tabs-box">
                      {/* <!--Tab Btns--> */}
                      <ul className="tab-btns tab-buttons clearfix">
                        <li data-tab="#prod-1" className="tab-btn active-btn">
                          Personal Care
                        </li>
                        <li data-tab="#prod-2" className="tab-btn ">
                          Super Support
                        </li>
                        <li data-tab="#prod-3" className="tab-btn ">
                          Guaranteed
                        </li>
                      </ul>

                      {/* <!--Tabs Container--> */}
                      <div className="tabs-content">
                        {/* <!-- Tab / Active Tab --> */}
                        <div className="tab active-tab" id="prod-1">
                          <div className="content">
                            <div className="text">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s Lorem Ipsum is simply dummy text of
                                the printing. Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry.
                              </p>
                              <p>
                                Lorem Ipsum has been industry's standard dummy
                                text ever since the 1500s Lorem Ipsum is simply
                                dummy text of the printing.
                              </p>{" "}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Tab / Active Tab --> */}
                        <div className="tab " id="prod-2">
                          <div className="content">
                            <div className="text">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s Lorem Ipsum is simply dummy text of
                                the printing. Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry.
                              </p>
                              <p>
                                Lorem Ipsum has been industry's standard dummy
                                text ever since the 1500s Lorem Ipsum is simply
                                dummy text of the printing.
                              </p>{" "}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Tab / Active Tab --> */}
                        <div className="tab " id="prod-3">
                          <div className="content">
                            <div className="text">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s Lorem Ipsum is simply dummy text of
                                the printing. Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry.
                              </p>
                              <p>
                                Lorem Ipsum has been industry's standard dummy
                                text ever since the 1500s Lorem Ipsum is simply
                                dummy text of the printing.
                              </p>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ServiceDetails
