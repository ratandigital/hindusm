import React from 'react'

export default function AboutSection() {
  return (
    <section className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <div className="img-group">
            <div className="img-group-inner">
              <img src="assets/img/about-group1/1.jpg" alt="about" />
              <span />
              <span />
            </div>
            <img src="assets/img/about-group1/2.jpg" alt="about" />
            <img src="assets/img/about-group1/3.jpg" alt="about" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="me-lg-30">
            <div className="section-title mb-0 text-start">
              <p className="subtitle">EDUCATION FOR ALL RURAL CHILDREN</p>
              <h4 className="title">We are a Hindu that believe in Ram</h4>
            </div>
            <ul className="sigma_list list-2 mb-0">
              <li>Peace of Mind</li>
              <li>Set For Pastor</li>
              <li>100% Satisfaction</li>
              <li>Trusted Company</li>
            </ul>
            <p className="blockquote bg-transparent">
              {" "}
              We are a Hindu that belives in Lord Rama and Vishnu Deva the
              followers and We are a Hindu that belives in Lord Rama and Vishnu
              Deva.{" "}
            </p>
            <a href="about-us.html" className="sigma_btn-custom light">
              Learn More <i className="far fa-arrow-right" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
