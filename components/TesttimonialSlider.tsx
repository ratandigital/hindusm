'use client'

import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

const TestimonialSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state to true only on the client-side

    if (isClient) {
      import("slick-carousel").then(() => {
        $(".sigma_testimonial-slider").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: $('.testimonial-section .slider-prev'),
          nextArrow: $('.testimonial-section .slider-next'),
          dots: false,
          autoplay: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });

        $(".sigma_testimonial-slider-1").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
        });
      }).catch(err => console.error("Error loading Slick:", err));
    }

    return () => {
      if (isClient) {
        $(".sigma_testimonial-slider").slick("unslick");
        $(".sigma_testimonial-slider-1").slick("unslick");
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null; // Prevent rendering the component during SSR
  }

  return (
    <div className="sigma_testimonial style-2">
      <div className="sigma_testimonial-slider">
        {/* Testimonial 1 */}
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/1.jpg" alt="testimonial" />
          </div>
          <div>
            <div className="sigma_testimonial-body">
              <div className="sigma_rating-wrapper">
                <div className="sigma_rating">
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="far fa-star" />
                </div>
              </div>
              <p>
                If money helps a man to do well to others, it is of some value;
                but if not, it is simply a mass of evil, and the sooner it is
                got rid of, the better.
              </p>
            </div>
            <div className="sigma_testimonial-footer">
              <div className="sigma_testimonial-author">
                <cite>Mukesh Singh</cite>
                <span>Pandit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/1.jpg" alt="testimonial" />
          </div>
          <div>
            <div className="sigma_testimonial-body">
              <div className="sigma_rating-wrapper">
                <div className="sigma_rating">
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="far fa-star" />
                </div>
              </div>
              <p>
                If money helps a man to do well to others, it is of some value;
                but if not, it is simply a mass of evil, and the sooner it is
                got rid of, the better.
              </p>
            </div>
            <div className="sigma_testimonial-footer">
              <div className="sigma_testimonial-author">
                <cite>Mukesh Singh</cite>
                <span>Pandit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/1.jpg" alt="testimonial" />
          </div>
          <div>
            <div className="sigma_testimonial-body">
              <div className="sigma_rating-wrapper">
                <div className="sigma_rating">
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="far fa-star" />
                </div>
              </div>
              <p>
                If money helps a man to do well to others, it is of some value;
                but if not, it is simply a mass of evil, and the sooner it is
                got rid of, the better.
              </p>
            </div>
            <div className="sigma_testimonial-footer">
              <div className="sigma_testimonial-author">
                <cite>Mukesh Singh</cite>
                <span>Pandit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/1.jpg" alt="testimonial" />
          </div>
          <div>
            <div className="sigma_testimonial-body">
              <div className="sigma_rating-wrapper">
                <div className="sigma_rating">
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="fas fa-star active" />
                  <i className="far fa-star" />
                </div>
              </div>
              <p>
                If money helps a man to do well to others, it is of some value;
                but if not, it is simply a mass of evil, and the sooner it is
                got rid of, the better.
              </p>
            </div>
            <div className="sigma_testimonial-footer">
              <div className="sigma_testimonial-author">
                <cite>Mukesh Singh</cite>
                <span>Pandit</span>
              </div>
            </div>
          </div>
        </div>
        {/* Additional testimonials */}
      </div>
    </div>
  );
};

// ✅ Prevents SSR errors by ensuring this component only runs in the browser
export default dynamic(() => Promise.resolve(TestimonialSlider), { ssr: false });
