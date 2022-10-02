// import "wowjs"

// import Swiper from "swiper"

import $ from "jquery"

//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($(".preloader").length) {
    $(".preloader").delay(200).fadeOut(500)
  }
}

//Update Header Style and Scroll to Top
function headerStyle() {
  if ($(".main-header").length) {
    var windowpos = $(window).scrollTop()
    var siteHeader = $(".main-header")
    var scrollLink = $(".scroll-to-top")

    var HeaderHight = $(".main-header").height()
    if (windowpos >= HeaderHight) {
      siteHeader.addClass("fixed-header")
      scrollLink.fadeIn(300)
    } else {
      siteHeader.removeClass("fixed-header")
      scrollLink.fadeOut(300)
    }
  }

  if ($(".header-style-four").length) {
    var windowpos = $(window).scrollTop()
    var siteHeader = $(".header-style-four")
    var headerHeight = $(".header-style-four").height()
    //alert(headerHeight);
    var scrollLink = $(".scroll-to-top")
    if (windowpos >= headerHeight) {
      siteHeader.addClass("fixed-header")
      scrollLink.fadeIn(300)
    } else {
      siteHeader.removeClass("fixed-header")
      scrollLink.fadeOut(300)
    }
  }
}

headerStyle()

//Hidden Sidebar
if ($(".hidden-bar").length) {
  var hiddenBar = $(".hidden-bar")
  var hiddenBarOpener = $(".nav-toggler")
  var hiddenBarCloser = $(".hidden-bar-closer")
  $(".hidden-bar-wrapper").mCustomScrollbar()

  //Show Sidebar
  hiddenBarOpener.on("click", function () {
    hiddenBar.addClass("visible-sidebar")
  })

  //Hide Sidebar
  hiddenBarCloser.on("click", function () {
    hiddenBar.removeClass("visible-sidebar")
  })
}

//Hidden Bar Menu Config
function hiddenBarMenuConfig() {
  var menuWrap = $(".hidden-bar .side-menu")
  // appending expander button
  menuWrap
    .find(".dropdown")
    .children("a")
    .append(function () {
      return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>'
    })
  // hidding submenu
  menuWrap.find(".dropdown").children("ul").hide()
  // toggling child ul
  menuWrap.find(".btn.expander").each(function () {
    $(this).on("click", function () {
      $(this)
        .parent() // return parent of .btn.expander (a)
        .parent() // return parent of a (li)
        .children("ul")
        .slideToggle()

      // adding class to expander container
      $(this).parent().toggleClass("current")
      // toggling arrow of expander
      $(this).find("i").toggleClass("fa-angle-right fa-angle-down")

      return false
    })
  })
}

hiddenBarMenuConfig()

//Tabs Box
if ($(".tabs-box").length) {
  $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
    e.preventDefault()
    var target = $($(this).attr("data-tab"))

    if ($(target).is(":visible")) {
      return false
    } else {
      target
        .parents(".tabs-box")
        .find(".tab-buttons")
        .find(".tab-btn")
        .removeClass("active-btn")
      $(this).addClass("active-btn")
      target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0)
      target
        .parents(".tabs-box")
        .find(".tabs-content")
        .find(".tab")
        .removeClass("active-tab")
      $(target).fadeIn(300)
      $(target).addClass("active-tab")
    }
  })
}

//Add One Page nav
if ($(".scroll-nav").length) {
  $(".scroll-nav ul").onePageNav()
}

if ($(".clock-wrapper").length) {
  ;(function () {
    //generate clock animations
    var now = new Date(),
      hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
      minuteDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
      secondDeg = (now.getSeconds() / 60) * 360,
      stylesDeg = [
        "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
          hourDeg +
          "deg);}to{transform:rotate(" +
          (hourDeg + 360) +
          "deg);}}",
        "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
          minuteDeg +
          "deg);}to{transform:rotate(" +
          (minuteDeg + 360) +
          "deg);}}",
        "@-webkit-keyframes rotate-second{from{transform:rotate(" +
          secondDeg +
          "deg);}to{transform:rotate(" +
          (secondDeg + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-hour{from{transform:rotate(" +
          hourDeg +
          "deg);}to{transform:rotate(" +
          (hourDeg + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-minute{from{transform:rotate(" +
          minuteDeg +
          "deg);}to{transform:rotate(" +
          (minuteDeg + 360) +
          "deg);}}",
        "@-moz-keyframes rotate-second{from{transform:rotate(" +
          secondDeg +
          "deg);}to{transform:rotate(" +
          (secondDeg + 360) +
          "deg);}}",
      ].join("")
    document.getElementById("clock-animations").innerHTML = stylesDeg
  })()
}

//circular-menu
if ($(".circular-menu").length) {
  $(".circular-menu .floating-btn").on("click", function () {
    $(".circular-menu").toggleClass("active")
  })
}

//Custom Seclect Box
if ($(".custom-select-box").length) {
  $(".custom-select-box")
    .selectmenu()
    .selectmenu("menuWidget")
    .addClass("overflow")
}

//Sortable Masonary with Filters
function enableMasonry() {
  if ($(".sortable-masonry").length) {
    var winDow = $(window)
    // Needed variables
    var $container = $(".sortable-masonry .items-container")
    var $filter = $(".filter-btns")

    $container.isotope({
      filter: "*",
      masonry: {
        columnWidth: 1,
      },
      animationOptions: {
        duration: 1000,
        easing: "linear",
      },
    })

    // Isotope Filter
    $filter.find("li").on("click", function () {
      var selector = $(this).attr("data-filter")

      try {
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 1000,
            easing: "linear",
            queue: false,
          },
        })
      } catch (err) {}
      return false
    })

    winDow.bind("resize", function () {
      var selector = $filter.find("li.active").attr("data-filter")

      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: "linear",
          queue: false,
        },
      })
    })

    var filterItemA = $(".filter-btns li")

    filterItemA.on("click", function () {
      var $this = $(this)
      if (!$this.hasClass("active")) {
        filterItemA.removeClass("active")
        $this.addClass("active")
      }
    })
  }
}

enableMasonry()

//Accordion Box
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function () {
    var outerBox = $(this).parents(".accordion-box")
    var target = $(this).parents(".accordion")

    if ($(this).hasClass("active") !== true) {
      $(outerBox).find(".accordion .acc-btn").removeClass("active")
    }

    if ($(this).next(".acc-content").is(":visible")) {
      return false
    } else {
      $(this).addClass("active")
      $(outerBox).children(".accordion").removeClass("active-block")
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300)
      target.addClass("active-block")
      $(this).next(".acc-content").slideDown(300)
    }
  })
}

//Single Item Carousel
if ($(".single-item-carousel").length) {
  $(".single-item-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    //rtl: true,
    smartSpeed: 500,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  })
}

//Product Tabs
if ($(".project-tab").length) {
  $(".project-tab .product-tab-btns .p-tab-btn").on("click", function (e) {
    e.preventDefault()
    var target = $($(this).attr("data-tab"))

    if ($(target).hasClass("actve-tab")) {
      return false
    } else {
      $(".project-tab .product-tab-btns .p-tab-btn").removeClass("active-btn")
      $(this).addClass("active-btn")
      $(".project-tab .p-tabs-content .p-tab").removeClass("active-tab")
      $(target).addClass("active-tab")
    }
  })
}

// Sponsors Carousel
if ($(".sponsors-carousel").length) {
  $(".sponsors-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    rtl: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1024: {
        items: 5,
      },
    },
  })
}

//Tabs Box
if ($(".tabs-box").length) {
  $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
    e.preventDefault()
    var target = $($(this).attr("data-tab"))

    if ($(target).is(":visible")) {
      return false
    } else {
      target
        .parents(".tabs-box")
        .find(".tab-buttons")
        .find(".tab-btn")
        .removeClass("active-btn")
      $(this).addClass("active-btn")
      target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0)
      target
        .parents(".tabs-box")
        .find(".tabs-content")
        .find(".tab")
        .removeClass("active-tab")
      $(target).fadeIn(300)
      $(target).addClass("active-tab")
    }
  })
}

//Masonary
function enableMasonryy() {
  if ($(".masonry-items-container").length) {
    var winDow = $(window)
    // Needed variables
    var $container = $(".masonry-items-container")

    $container.isotope({
      itemSelector: ".masonry-item",
      masonry: {
        columnWidth: 1,
      },
      animationOptions: {
        duration: 500,
        easing: "linear",
      },
    })

    winDow.bind("resize", function () {
      $container.isotope({
        itemSelector: ".masonry-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false,
        },
      })
    })
  }
}

enableMasonryy()

//Fixed Right Top Consultation Form Toggle
if (
  $(
    ".header-style-four .header-upper .outer-box .info-btn, .header-style-four .header-lower .outer-box .info-btn"
  ).length
) {
  //Show Form
  $(
    ".header-style-four .header-upper .outer-box .info-btn, .header-style-four .header-lower .outer-box .info-btn"
  ).on("click", function (e) {
    e.preventDefault()
    $("body").addClass("background-visible")
  })

  //Hide Form
  $(".form-back-drop").on("click", function (e) {
    e.preventDefault()
    $("body").removeClass("background-visible")
  })

  $(".form-back-drop").on("click", function (e) {
    $(".hidden-bar").removeClass("visible-sidebar")
  })

  $(".hidden-bar .hidden-bar-closer").on("click", function (e) {
    $("body").removeClass("background-visible")
  })
}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

$(window).on("scroll", function () {
  headerStyle()
})

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

$(window).on("load", function () {
  handlePreloader()
  enableMasonry()
  enableMasonryy()
})

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
$(document).ready(function ($) {})
