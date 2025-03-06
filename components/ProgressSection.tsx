"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";

const ProgressSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jquery-countto").then(() => {
        function isElementInViewport(el: HTMLElement): boolean {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }

        function startCounter() {
          $(".counter").each(function (this: HTMLElement) {
            const $this = $(this);
            if (isElementInViewport(this) && !$this.hasClass("counted")) {
              $this.addClass("counted");
              $this.countTo({ speed: 2000 });
            }
          });
        }

        $(window).on("scroll", startCounter);
        startCounter();

        return () => {
          $(window).off("scroll", startCounter);
        };
      }).catch(err => console.error("Error loading jquery-countto:", err));
    }
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img src="assets/img/progress-bar/1.jpg" alt="Progress Image" />
          </div>
          <div className="col-lg-4 p-3 p-lg-0">
            <div className="sigma_box sigma_box-absolute sigma_box-lg m-0 sigma_box-progress">
              <i className="flaticon-hindu" />
              <div className="sigma_round-button mb-4">
                <span>
                  <b className="counter" data-from="0" data-to="75">0</b>
                  <span className="custom-primary">%</span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 197 197">
                  <circle className="sigma_round-button-stroke" cx="98.5" cy="98.6" r="97.5" />
                  <circle className="sigma_progress-round sigma_round-button-circle" cx="98.5" cy="98.6" r="97.5" />
                </svg>
              </div>
              <h6>Donation Success Rate</h6>
              <p className="m-0 blockquote bg-transparent">
                Design better websites and spend less time without restricting
              </p>
            </div>
          </div>
          <div className="col-lg-4 z-index-3">
            <img src="assets/img/progress-bar/2.jpg" alt="Progress Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProgressSection), { ssr: false });
