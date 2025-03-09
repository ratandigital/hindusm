import React from 'react'
import TesttimonialSlider from './TesttimonialSlider'
import dynamic from "next/dynamic";


export default function TesttimonialSection() {
  return (
    <section className="section  bg-info p-3">
    <div
      className="container testimonial-section bg-contain bg-norepeat bg-center"
      style={{ backgroundImage: "url(assets/img/textures/map-2.png)" }}
    >
      <div className="section-title text-center">
        <p className="subtitle">Testimonials</p>
        <h4 className="title">What Our Congregation Say</h4>
      </div>
    <TesttimonialSlider/>
      <div className="text-center mt-4">
        <div className="sigma_arrows style-2">
          <i className="far fa-chevron-left slick-arrow slider-prev" />
          <i className="far fa-chevron-right slick-arrow slider-next" />
        </div>
      </div>
    </div>
  </section>
  )
}
