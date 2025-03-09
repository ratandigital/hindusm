"use client";

import Slider from "react-slick";
import React from 'react'
import VolunteerSlider from "./VolunteerSlider";
import VolunterrSocialTegger from "./VolunterrSocialTegger";
import dynamic from "next/dynamic";

// Dynamically import VolunteerSlider with SSR disabled
const VolunteerSlider = dynamic(() => import("./VolunteerSlider"), { ssr: false });

export default function VolunteerSection() {
   
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
