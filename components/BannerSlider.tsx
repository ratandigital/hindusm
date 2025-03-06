"use client";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-prev custom-arrow" onClick={onClick}>
      <i className="far fa-arrow-left"></i>
    </button>
  );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slick-next custom-arrow" onClick={onClick}>
      <i className="far fa-arrow-right"></i>
    </button>
  );
};

const BannerSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Some Important Life Lessons From Gita",
      description:
        "We are a Hindu that believes in Lord Rama and Vishnu Deva. This is where you should start.",
      image: "/assets/img/banner/3.jpg",
    },
    {
      id: 2,
      title: "We are a Hindu that believe in Ram",
      description:
        "We are a Hindu that believes in Lord Rama and Vishnu Deva. This is where you should start.",
      image: "/assets/img/banner/5.jpg",
    },
  ];

  return (
    <div className="sigma_banner ">
      <Slider {...settings} className="sigma_banner-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="sigma_banner-slider-inner">
            <div
              className="light-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "500px", // Adjust height as needed
              }}
            >
              <div className="sigma_banner-text">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h1 className="title">{slide.title}</h1>
                      <p className="blockquote mb-0 bg-transparent">{slide.description}</p>
                      <div className="section-button d-flex align-items-center">
                        <a href="/contact-us" className="sigma_btn-custom">
                          Join Today <i className="far fa-arrow-right" />
                        </a>
                        <a href="/services" className="ms-3 sigma_btn-custom white">
                          View Services <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
