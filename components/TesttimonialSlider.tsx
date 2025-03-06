'use client'

import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

import 'slick-carousel'; // Import Slick carousel JS

const TestimonialSlider = () => {
  useEffect(() => {
    // Initialize the first testimonial slider
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

    // Initialize the second testimonial slider
    $(".sigma_testimonial-slider-1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
    });

    // Clean up when the component unmounts
    return () => {
      $(".sigma_testimonial-slider").slick('unslick');
      $(".sigma_testimonial-slider-1").slick('unslick');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

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
        {/* Testimonial 2 */}
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/2.jpg" alt="testimonial" />
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
                <cite>Das Gupta</cite>
                <span>Executive</span>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="sigma_testimonial-inner">
          <div className="sigma_testimonial-thumb">
            <img src="assets/img/testimonials/3.jpg" alt="testimonial" />
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
      </div>
      {/* Second slider for testimonials */}
      <div className="sigma_testimonial-slider-1">
        {/* Testimonial content */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
