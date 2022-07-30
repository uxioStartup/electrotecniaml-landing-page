import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="main-header header-style-one">
  {/* <!--Header-Upper--> */}
  <div className="header-upper">
      <div className="auto-container">
          <div className="clearfix">
              
    {/* <!-- Logo Box --> */}
    <div className="pull-left logo-box">
      <div className="logo"><a href="https://themerange.net/wp/montro/" title="Montro"><img src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo.svg" alt="logo" style={{width:"200px", height:"70px"}} /></a></div>
    </div>
    
              <div className="pull-right upper-right clearfix">
                                          {/* <!--Info Box--> */}
                  <div className="upper-column info-box">
                      <div className="icon-box"><span className="flaticon-phone"></span></div>
                      <ul>
          <li>Requesting a Call:</li>
                          <li><strong><a href="tel:">(301) 357 1234</a></strong></li>
                      </ul>
                  </div>
                                          
                                          {/* <!--Info Box--> */}
                  <div className="upper-column info-box">
                      <div className="icon-box"><span className="flaticon-clock-1"></span></div>
                      <ul>
                        <li>Sunday - Friday:</li>
                          <li><strong>9am - 8pm</strong></li>
                      </ul>
                  </div>
                                          
                                          {/* <!--Info Box--> */}
                  <div className="upper-column info-box">
                      <div className="icon-box"><span className="flaticon-location-1"></span></div>
                      <ul>
          <li>1428 Callison Laney Building</li>
          <li><strong>California</strong></li>
                      </ul>
                  </div>
                                      </div>
          </div>
      </div>
  </div>
  {/* <!--End Header Upper--> */}
  
  {/* <!--Header Lower--> */}
  <div className="header-lower">
      <div className="auto-container">
  <div className="clearfix">
    <div className="nav-outer clearfix pad-left">
                            {/* <!-- Nav Btn --> */}

      {/* <!-- Mobile Navigation Toggler --> */}
      <div className="mobile-nav-toggler"><span className="icon flaticon-menu-2"></span></div>
      {/* <!-- Main Menu --> */}
      <nav className="main-menu show navbar-expand-md">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
          <ul className="navigation clearfix">
            <li id="menu-item-1940" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1940 dropdown current"><a title="Home" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Home</a>
<ul role="menu" className="submenu">
<li id="menu-item-1942" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1926 current_page_item menu-item-1942 active"><a title="Homepage One" href="https://themerange.net/wp/montro/">Homepage One</a></li>
<li id="menu-item-12" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12"><a title="Homepage Two" href="https://themerange.net/wp/montro/homepage-two/">Homepage Two</a></li>
<li id="menu-item-1941" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1941"><a title="Homepage Three" href="https://themerange.net/wp/montro/homepage-three/">Homepage Three</a></li>
<li id="menu-item-2979" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2979"><a title="Homepage Four" href="https://themerange.net/wp/montro/homepage-four/">Homepage Four</a></li>
<li id="menu-item-2978" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2978"><a title="Homepage Five" href="https://themerange.net/wp/montro/homepage-five/">Homepage Five</a></li>
<li id="menu-item-2977" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2977"><a title="Homepage Six" href="https://themerange.net/wp/montro/homepage-six/">Homepage Six</a></li>
<li id="menu-item-2976" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2976"><a title="Homepage Seven" href="https://themerange.net/wp/montro/homepage-seven/">Homepage Seven</a></li>
<li id="menu-item-2975" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2975"><a title="Homepage Eight" href="https://themerange.net/wp/montro/homepage-eight/">Homepage Eight</a></li>
<li id="menu-item-2117" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2117 dropdown"><a title="One Pager Style" href="#">One Pager Style</a>
<ul role="menu" className="submenu">
<li id="menu-item-2120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2120"><a title="One Page 01" href="https://themerange.net/wp/montro/one-page-01/">One Page 01</a></li>
<li id="menu-item-2119" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2119"><a title="One Page 02" href="https://themerange.net/wp/montro/one-page-02/">One Page 02</a></li>
<li id="menu-item-2118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2118"><a title="One Page 03" href="https://themerange.net/wp/montro/one-page-03/">One Page 03</a></li>
<li id="menu-item-2971" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2971"><a title="One Page 04" href="https://themerange.net/wp/montro/one-page-04/">One Page 04</a></li>
<li id="menu-item-2970" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2970"><a title="One Page 05" href="https://themerange.net/wp/montro/one-page-05/">One Page 05</a></li>
<li id="menu-item-2969" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2969"><a title="One Page 06" href="https://themerange.net/wp/montro/one-page-06/">One Page 06</a></li>
<li id="menu-item-2968" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2968"><a title="One Page 07" href="https://themerange.net/wp/montro/one-page-07/">One Page 07</a></li>
<li id="menu-item-2967" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2967"><a title="One Page 08" href="https://themerange.net/wp/montro/one-page-08/">One Page 08</a></li>
</ul>
</li>
<li id="menu-item-2108" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-2108 dropdown current"><a title="Header Styles" href="#">Header Styles</a>
<ul role="menu" className="submenu">
<li id="menu-item-2105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1926 current_page_item menu-item-2105 active"><a title="Header Style 1" href="https://themerange.net/wp/montro/">Header Style 1</a></li>
<li id="menu-item-2107" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2107"><a title="Header Style 2" href="https://themerange.net/wp/montro/homepage-two/">Header Style 2</a></li>
<li id="menu-item-2106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2106"><a title="Header Style 3" href="https://themerange.net/wp/montro/homepage-three/">Header Style 3</a></li>
<li id="menu-item-2927" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2927"><a title="Header Style 4" href="https://themerange.net/wp/montro/homepage-four/">Header Style 4</a></li>
<li id="menu-item-2926" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2926"><a title="Header Style 5" href="https://themerange.net/wp/montro/homepage-five/">Header Style 5</a></li>
<li id="menu-item-2925" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2925"><a title="Header Style 6" href="https://themerange.net/wp/montro/homepage-six/">Header Style 6</a></li>
<li id="menu-item-2924" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2924"><a title="Header Style 7" href="https://themerange.net/wp/montro/homepage-seven/">Header Style 7</a></li>
<li id="menu-item-2923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2923"><a title="Header Style 8" href="https://themerange.net/wp/montro/homepage-eight/">Header Style 8</a></li>
</ul>
</li>
</ul>
</li>
<li id="menu-item-1533" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1533 dropdown"><a title="About Us" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">About Us</a>
<ul role="menu" className="submenu">
<li id="menu-item-1532" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1532"><a title="About Us" href="https://themerange.net/wp/montro/about-us/">About Us</a></li>
<li id="menu-item-1583" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1583"><a title="FAQs" href="https://themerange.net/wp/montro/faqs/">FAQs</a></li>
<li id="menu-item-1582" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1582"><a title="Price" href="https://themerange.net/wp/montro/price/">Price</a></li>
<li id="menu-item-1581" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1581"><a title="Team" href="https://themerange.net/wp/montro/team/">Team</a></li>
<li id="menu-item-1619" className="menu-item menu-item-type-post_type menu-item-object-team menu-item-1619"><a title="Team Detail" href="https://themerange.net/wp/montro/team/nelson-mecoy/">Team Detail</a></li>
<li id="menu-item-1655" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1655"><a title="Testimonial" href="https://themerange.net/wp/montro/testimonial/">Testimonial</a></li>
<li id="menu-item-1631" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1631"><a title="Coming Soon" href="https://themerange.net/wp/montro/coming-soon/">Coming Soon</a></li>
<li id="menu-item-1629" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1629"><a title="Privacy &#038; Policy" href="https://themerange.net/wp/montro/privacy-policy/">Privacy &#038; Policy</a></li>
<li id="menu-item-1656" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656"><a title="Terms &#038; Condition" href="https://themerange.net/wp/montro/terms-condition/">Terms &#038; Condition</a></li>
</ul>
</li>
<li id="menu-item-1632" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1632 dropdown"><a title="Services" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Services</a>
<ul role="menu" className="submenu">
<li id="menu-item-1685" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1685"><a title="Services" href="https://themerange.net/wp/montro/services/">Services</a></li>
<li id="menu-item-1746" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1746"><a title="General Contracting" href="https://themerange.net/wp/montro/services/general-contracting/">General Contracting</a></li>
<li id="menu-item-1747" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1747"><a title="Apartment Design" href="https://themerange.net/wp/montro/services/apartment-design/">Apartment Design</a></li>
<li id="menu-item-1751" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1751"><a title="Metrial Management" href="https://themerange.net/wp/montro/services/metrial-management/">Metrial Management</a></li>
<li id="menu-item-1750" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1750"><a title="Building Renovation" href="https://themerange.net/wp/montro/services/building-renovation/">Building Renovation</a></li>
<li id="menu-item-1749" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1749"><a title="Building Construction" href="https://themerange.net/wp/montro/services/building-construction/">Building Construction</a></li>
<li id="menu-item-1748" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1748"><a title="Architecture Design" href="https://themerange.net/wp/montro/services/architecture-design/">Architecture Design</a></li>
</ul>
</li>
<li id="menu-item-1752" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1752 dropdown"><a title="Projects" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Projects</a>
<ul role="menu" className="submenu">
<li id="menu-item-1775" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1775"><a title="Our Projects" href="https://themerange.net/wp/montro/our-projects/">Our Projects</a></li>
<li id="menu-item-2071" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2071"><a title="Projects 02" href="https://themerange.net/wp/montro/projects-02/">Projects 02</a></li>
<li id="menu-item-2070" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2070"><a title="Projects 03" href="https://themerange.net/wp/montro/projects-03/">Projects 03</a></li>
<li id="menu-item-1787" className="menu-item menu-item-type-post_type menu-item-object-project menu-item-1787"><a title="Project Details" href="https://themerange.net/wp/montro/project/reliable-building-7/">Project Details</a></li>
</ul>
</li>
<li id="menu-item-1796" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1796 dropdown"><a title="Blog" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Blog</a>
<ul role="menu" className="submenu">
<li id="menu-item-2093" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2093"><a title="Our Blog" href="https://themerange.net/wp/montro/our-blog/">Our Blog</a></li>
<li id="menu-item-1801" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1801"><a title="Blog Classic" href="https://themerange.net/wp/montro/blog-classic/">Blog Classic</a></li>
<li id="menu-item-2092" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2092"><a title="Blog Left Sidebar" href="https://themerange.net/wp/montro/blog-left-sidebar/">Blog Left Sidebar</a></li>
<li id="menu-item-2091" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2091"><a title="Blog Right Sidebar" href="https://themerange.net/wp/montro/blog-right-sidebar/">Blog Right Sidebar</a></li>
<li id="menu-item-1830" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1830"><a title="Blog Details" href="https://themerange.net/wp/montro/industrial-business-global-company-meeting/">Blog Details</a></li>
<li id="menu-item-1798" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1798"><a title="Error Page" href="https://themerange.net/wp/montro/404/">Error Page</a></li>
</ul>
</li>
<li id="menu-item-2231" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2231 dropdown"><a title="Shop" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Shop</a>
<ul role="menu" className="submenu">
<li id="menu-item-2230" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2230"><a title="Shop" href="https://themerange.net/wp/montro/shop/">Shop</a></li>
<li id="menu-item-2915" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-2915"><a title="Shop Details" href="https://themerange.net/wp/montro/product/drill-set/">Shop Details</a></li>
<li id="menu-item-2229" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2229"><a title="Cart" href="https://themerange.net/wp/montro/cart/">Cart</a></li>
<li id="menu-item-2228" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2228"><a title="Checkout" href="https://themerange.net/wp/montro/checkout/">Checkout</a></li>
<li id="menu-item-2227" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2227"><a title="My Account" href="https://themerange.net/wp/montro/my-account/">My Account</a></li>
</ul>
</li>
<li id="menu-item-1797" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1797 dropdown"><a title="Contact" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Contact</a>
<ul role="menu" className="submenu">
<li id="menu-item-1839" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1839"><a title="Contact Us 01" href="https://themerange.net/wp/montro/contact-us-01/">Contact Us 01</a></li>
<li id="menu-item-1838" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1838"><a title="Contact Us 02" href="https://themerange.net/wp/montro/contact-us-02/">Contact Us 02</a></li>
<li id="menu-item-1837" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1837"><a title="Contact Us 03" href="https://themerange.net/wp/montro/contact-us-03/">Contact Us 03</a></li>
</ul>
</li>
           </ul>
        </div>
      </nav>
      {/* <!-- Main Menu End--> */}

      {/* <!-- Options Box --> */}
      <div className="options-box clearfix">


                                    
                                    <div className="btn-box">
          <a href="https://themerange.net/wp/montro/contact-us-01/" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></a>
        </div>
                                  </div>
    </div>
  </div>
      </div>
  </div>
  {/* <!-- End Header Lower --> */}
  
{/* <!-- Sticky Header  --> */}
  <div className="sticky-header">
      <div className="auto-container clearfix">
          {/* <!--Logo--> */}
          <div className="logo pull-left">
              <a href="https://themerange.net/wp/montro/" title="Montro"><img src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo-small.svg" alt="logo" style={{ width:"135px", height:"50px"}} /></a>                </div>
          {/* <!--Right Col--> */}
          <div className="pull-right">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu">
                  {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </nav>
              {/* <!-- Main Menu End--> */}
    
    {/* <!-- Options Box --> */}
    <div className="options-box clearfix">
                            {/* <!--Search Box--> */}
      <div className="search-box-outer">
        <div className="search-box-btn"><span className="fa fa-search"></span></div>
      </div>
                              
                              <div className="btn-box">
        <a href="https://themerange.net/wp/montro/contact-us-01/" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></a>
      </div>
                            </div>
          </div>
      </div>
  </div>{/* <!-- End Sticky Menu --> */}

  {/* <!-- Mobile Menu  --> */}
  <div className="mobile-menu">
      <div className="menu-backdrop"></div>
      <div className="close-btn"><span className="icon flaticon-multiply"></span></div>
      
      <nav className="menu-box">
          <div className="nav-logo"><a href="https://themerange.net/wp/montro/" title="Montro"><img src="https://themerange.net/wp/montro/wp-content/uploads/2022/05/logo.svg" alt="logo" style={{width:"200px", height:"70px"}} /></a></div>
          <div className="menu-outer">
    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
  </div>
      </nav>
  </div>{/* <!-- End Mobile Menu --> */}

</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
