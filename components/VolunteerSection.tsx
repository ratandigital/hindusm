"use client";

import Slider from "react-slick";
import React from 'react'
import VolunteerSlider from "./VolunteerSlider";
import VolunterrSocialTegger from "./VolunterrSocialTegger";
// Custom Previous Arrow
// const PrevArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button className="slick-prev custom-arrow" onClick={onClick}>
//         <i className="far fa-arrow-left"></i>
//       </button>
//     );
//   };
  
//   // Custom Next Arrow
//   const NextArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <button className="slick-next custom-arrow" onClick={onClick}>
//         <i className="far fa-arrow-right"></i>
//       </button>
//     );
//   };

export default function VolunteerSection() {
    // const settings = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     autoplay: false,
    //     prevArrow: <PrevArrow />,
    //     nextArrow: <NextArrow />,
    //     responsive: [
    //       {
    //         breakpoint: 991,
    //         settings: {
    //           arrows: false,
    //         },
    //       },
    //     ],
    //   };
  return (
    <section className="section section-padding light-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <div className="section-title mb-0 text-start">
            <p className="subtitle">volunteers</p>
            <h4 className="title">Our Volunteers Achievments</h4>
          </div>
          <p className="blockquote bg-transparent">
            {" "}
            We are a Hindu that belives in Lord Rama and Vishnu Deva the
            followers and We are a Hindu that belives in Lord Rama and Vishnu
            Deva.{" "}
          </p>
          <VolunteerSlider/>
        </div>
     <VolunterrSocialTegger/>
      </div>
    </div>
  </section>
  )
}
