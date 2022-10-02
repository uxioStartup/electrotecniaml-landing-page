import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import $ from "jquery"

const IndexPage = ({ data }) => {
  useEffect(() => {
    //Main Slider Carousel
    if ($(".main-slider-carousel").length) {
      $(".main-slider-carousel").addClass("active")
    }
  })

  return (
    <Layout>
      {/* 
<link rel='shortlink' href='https://themerange.net/wp/montro/' /> */}
      {/* <link rel="alternate" type="application/json+oembed" href="https://themerange.net/wp/montro/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fthemerange.net%2Fwp%2Fmontro%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://themerange.net/wp/montro/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fthemerange.net%2Fwp%2Fmontro%2F&#038;format=xml" /> */}
      {/* <noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript> */}

      {/* <html lang="en-US" className="no-js no-svg"> */}

      {/* <body className="home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1926 wp-embed-responsive theme-montro woocommerce-no-js menu-layer elementor-default elementor-kit-9 elementor-page elementor-page-1926">  */}

      {/* /*HEADER*/}

      <div data-elementor-type="wp-page" className="elementor elementor-1926">
        <section
          className="elementor-section elementor-top-section elementor-element  elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element  elementor-widget elementor-widget-montro_slider_v1">
                  <div className="elementor-widget-container">
                    {/* <!-- Main Slider Section --> */}
                    <section className="main-slider">
                      <div className="main-slider-carousel  ">
                        <div className="slide slide-tonmix">
                          <div className="auto-container">
                            <div className="row clearfix">
                              {/* <!-- Content Column --> */}
                              <div className="content-column col-lg-7 cl-md-12 col-sm-12">
                                <div className="inner-column">
                                  <div className="title">
                                    {
                                      data.allPagesJson.nodes[0].content
                                        .category
                                    }
                                  </div>
                                  <h1>
                                    {data.allPagesJson.nodes[0].content.title}
                                  </h1>
                                  <div className="text">
                                    {
                                      data.allPagesJson.nodes[0].content
                                        .description
                                    }
                                  </div>
                                  <div className="clearfix">
                                    <div className="btns-box">
                                      <a
                                        href="#"
                                        className="btn-style-three theme-btn"
                                      >
                                        <span className="txt">Read More</span>
                                      </a>
                                    </div>

                                    <div className="play-box">
                                      <a
                                        href="#"
                                        className="lightbox-video play-button"
                                      >
                                        <span className="flaticon-play-arrow">
                                          <i className="ripple"></i>
                                        </span>
                                      </a>
                                      See Our Achivity
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* <!-- End Main Slider Section --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="clearfix"></div>

      {/* <!-- Main Footer --> */}

      {/* (function() {function maybePrefixUrlField() {
	if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
		this.value = "http://" + this.value;
	}
}

var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
if (urlFields) {
	for (var j=0; j < urlFields.length; j++) {
		urlFields[j].addEventListener('blur', maybePrefixUrlField);
	}
}
})();
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})(); */}
      {/* <script type='text/javascript' src='https://themerange.net/wp/montro/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>

</script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.6' id='contact-form-7-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.6.6.1' id='jquery-blockui-js'></script>
<script type='text/javascript' id='wc-add-to-cart-js-extra'>
</script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=6.6.1' id='wc-add-to-cart-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.6.6.1' id='js-cookie-js'></script>
<script type='text/javascript' id='woocommerce-js-extra'>
</script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=6.6.1' id='woocommerce-js'></script>
<script type='text/javascript' id='wc-cart-fragments-js-extra'>
</script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=6.6.1' id='wc-cart-fragments-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1' id='jquery-ui-core-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/popper.min.js?ver=2.1.2' id='popper-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/bootstrap.min.js?ver=2.1.2' id='bootstrap-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/jquery.mCustomScrollbar.concat.min.js?ver=2.1.2' id='mCustomScrollbar.concat-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/magnific-popup.min.js?ver=2.1.2' id='magnific-popup-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/appear.js?ver=2.1.2' id='appear-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/isotope.js?ver=2.1.2' id='isotope-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/nav-tool.js?ver=2.1.2' id='nav-tool-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/mixitup.js?ver=2.1.2' id='mixitup-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/owl.js?ver=2.1.2' id='owl-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/wow.js?ver=2.1.2' id='wow-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/pagenav.js?ver=2.1.2' id='pagenav-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/tilt.jquery.min.js?ver=2.1.2' id='tilt.jquery-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/jquery-ui.js?ver=2.1.2' id='jquery-ui-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/jquery.countdown.js?ver=2.1.2' id='countdown-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/swiper.min.js?ver=2.1.2' id='swiper-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/color-settings.js?ver=6.0.1' id='montro-color-settings-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/themes/montro/assets/js/script.js?ver=6.0.1' id='montro-main-script-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-includes/js/comment-reply.min.js?ver=6.0.1' id='comment-reply-js'></script>
<script type='text/javascript' defer src='https://themerange.net/wp/montro/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.8.7' id='mc4wp-forms-api-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.6.6' id='elementor-webpack-runtime-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.6.6' id='elementor-frontend-modules-js'></script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2' id='elementor-waypoints-js'></script>
<script type='text/javascript' id='elementor-frontend-js-before'>
</script>
<script type='text/javascript' src='https://themerange.net/wp/montro/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.6.6' id='elementor-frontend-js'></script> */}
      {/* </body> */}
      {/* </html> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allPagesJson(filter: { idPage: { eq: "index" } }) {
      nodes {
        idPage
        content {
          category
          description
          title
        }
      }
    }
  }
`

export default IndexPage
