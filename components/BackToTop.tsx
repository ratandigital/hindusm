'use client'

import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery

export default function BackToTop() {
  useEffect(() => {
    function stickBackToTop() {
      if ($(window)?.scrollTop()! > 400) {
        $(".sigma_top").addClass("active");
      } else {
        $(".sigma_top").removeClass("active");
      }
    }

    // Ensure DOM is fully loaded before attaching events
    $(document).ready(() => {
      $(window).on("scroll", stickBackToTop);

      $("body").on("click", ".sigma_top", function (e) {
        e.preventDefault(); // Prevent default behavior
        $("html, body").animate({ scrollTop: 0 }, 600);
      });

      // Run the function initially to check scroll position
      stickBackToTop();
    });

    // Cleanup event listeners on unmount
    return () => {
      $(window).off("scroll", stickBackToTop);
      $("body").off("click", ".sigma_top");
    };
  }, []);

  return (
    <div className="sigma_top style-5">
      <i className="far fa-angle-double-up" />
    </div>
  );
}
