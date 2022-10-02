// import $ from "jquery"

// //Hide Loading Box (Preloader)
// function handlePreloader() {
//   if ($(".preloader").length) {
//     $(".preloader").delay(200).fadeOut(500)
//   }
// }

// //Hidden Sidebar
// if ($(".hidden-bar").length) {
//   var hiddenBar = $(".hidden-bar")
//   var hiddenBarOpener = $(".nav-toggler")
//   var hiddenBarCloser = $(".hidden-bar-closer")
//   $(".hidden-bar-wrapper").mCustomScrollbar()

//   //Show Sidebar
//   hiddenBarOpener.on("click", function () {
//     hiddenBar.addClass("visible-sidebar")
//   })

//   //Hide Sidebar
//   hiddenBarCloser.on("click", function () {
//     hiddenBar.removeClass("visible-sidebar")
//   })
// }

// //Hidden Bar Menu Config
// function hiddenBarMenuConfig() {
//   var menuWrap = $(".hidden-bar .side-menu")
//   // appending expander button
//   menuWrap
//     .find(".dropdown")
//     .children("a")
//     .append(function () {
//       return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>'
//     })
//   // hidding submenu
//   menuWrap.find(".dropdown").children("ul").hide()
//   // toggling child ul
//   menuWrap.find(".btn.expander").each(function () {
//     $(this).on("click", function () {
//       $(this)
//         .parent() // return parent of .btn.expander (a)
//         .parent() // return parent of a (li)
//         .children("ul")
//         .slideToggle()

//       // adding class to expander container
//       $(this).parent().toggleClass("current")
//       // toggling arrow of expander
//       $(this).find("i").toggleClass("fa-angle-right fa-angle-down")

//       return false
//     })
//   })
// }

// hiddenBarMenuConfig()

// //Tabs Box
// if ($(".tabs-box").length) {
//   $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
//     e.preventDefault()
//     var target = $($(this).attr("data-tab"))

//     if ($(target).is(":visible")) {
//       return false
//     } else {
//       target
//         .parents(".tabs-box")
//         .find(".tab-buttons")
//         .find(".tab-btn")
//         .removeClass("active-btn")
//       $(this).addClass("active-btn")
//       target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0)
//       target
//         .parents(".tabs-box")
//         .find(".tabs-content")
//         .find(".tab")
//         .removeClass("active-tab")
//       $(target).fadeIn(300)
//       $(target).addClass("active-tab")
//     }
//   })
// }

// // Sponsors Carousel
// if ($(".sponsors-carousel").length) {
//   $(".sponsors-carousel").owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: true,
//     rtl: true,
//     smartSpeed: 500,
//     autoplay: 4000,
//     navText: [
//       '<span class="fa fa-angle-left"></span>',
//       '<span class="fa fa-angle-right"></span>',
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       480: {
//         items: 2,
//       },
//       600: {
//         items: 3,
//       },
//       800: {
//         items: 4,
//       },
//       1024: {
//         items: 5,
//       },
//     },
//   })
// }

// //Tabs Box
// if ($(".tabs-box").length) {
//   $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
//     e.preventDefault()
//     var target = $($(this).attr("data-tab"))

//     if ($(target).is(":visible")) {
//       return false
//     } else {
//       target
//         .parents(".tabs-box")
//         .find(".tab-buttons")
//         .find(".tab-btn")
//         .removeClass("active-btn")
//       $(this).addClass("active-btn")
//       target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0)
//       target
//         .parents(".tabs-box")
//         .find(".tabs-content")
//         .find(".tab")
//         .removeClass("active-tab")
//       $(target).fadeIn(300)
//       $(target).addClass("active-tab")
//     }
//   })
// }

// /* ==========================================================================
//    When document is loading, do
//    ========================================================================== */

// $(window).on("load", function () {
//   handlePreloader()
// })
