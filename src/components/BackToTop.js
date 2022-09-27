import React, { useEffect } from "react"

import $ from "jquery"

const BackToTop = () => {
  useEffect(() => {
    // Scroll to a Specific Div
    if ($(".scroll-to-target").length) {
      $(".scroll-to-target").on("click", function () {
        var target = $(this).attr("data-target")
        // animate
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1500
        )
      })
    }
  })

  return (
    <>
      {/* <!--Scroll to top--> */}
      <div
        className="back-to-top scroll-to-target show-back-to-top"
        data-target="html"
      >
        TOP
      </div>
    </>
  )
}

export default BackToTop
