import React from 'react'

export default function About() {
  return (
    <>
    {/* About Start */}
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="sigma_img-box">
              <div className="row">
                <div className="col-lg-6">
                  <img src="assets/img/service/details/5.jpg" alt="service" />
                  <img
                    className="ms-0"
                    src="assets/img/service/details/6.jpg"
                    alt="service"
                  />
                </div>
                <div className="col-lg-6 mt-0 mt-lg-5">
                  <img src="assets/img/service/details/7.jpg" alt="service" />
                  <img
                    className="ms-0"
                    src="assets/img/service/details/8.jpg"
                    alt="service"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start">
                <p className="subtitle">EDUCATION FOR ALL RURAL CHILDREN</p>
                <h4 className="title">We are a Hindu that believe in Ram</h4>
              </div>
              <p className="blockquote bg-transparent">
                {" "}
                We are a Hindu that belives in Lord Rama and Vishnu Deva the
                followers and We are a Hindu that belives in Lord Rama and Vishnu
                Deva.{" "}
              </p>
              <div className="sigma_icon-block icon-block-3">
                <div className="icon-wrapper">
                  <img src="assets/img/textures/icons/1.png" alt="" />
                </div>
                <div className="sigma_icon-block-content">
                  <h5> Temple </h5>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
              <div className="sigma_icon-block icon-block-3">
                <div className="icon-wrapper">
                  <img src="assets/img/textures/icons/2.png" alt="" />
                </div>
                <div className="sigma_icon-block-content">
                  <h5> Puja </h5>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About End */}
  </>
  
  )
}
