import React, { useEffect } from 'react';
import $ from 'jquery';
// Import slick-carousel styles

// Import slick-carousel JavaScript
import 'slick-carousel';

export default function VolunteerSlider() {
  useEffect(() => {
    // Initialize slick slider when the component mounts
    $(".basic-dot-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
    });

    // Clean up on component unmount
    return () => {
      $(".basic-dot-slider").slick('unslick');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="basic-dot-slider light-dots">
      <div className="slide-item">
        <p className="mb-0">
          You need to be sure there isn’t anything embarrassing hidden in the
          middle of text. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; generators on the Internet tend We are a
          Hindu that believe in Ram.
        </p>
      </div>
      <div className="slide-item">
        <p className="mb-0">
          You need to be sure there isn’t anything embarrassing hidden in the
          middle of text. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; generators on the Internet tend We are a
          Hindu that believe in Ram.
        </p>
      </div>
      <div className="slide-item">
        <p className="mb-0">
          You need to be sure there isn’t anything embarrassing hidden in the
          middle of text. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; generators on the Internet tend We are a
          Hindu that believe in Ram.
        </p>
      </div>
    </div>
  );
}
