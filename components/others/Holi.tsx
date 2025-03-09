import React from 'react'

export default function Holi() {
  return (
    <>
  {/* holi Start */}
  <div className="section section-padding light-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="section-title text-end">
            <p className="subtitle">WAYS WE CAN HELP</p>
            <h4 className="title">Angels Ready To Help</h4>
          </div>
        </div>
        <div className="col-md-2 d-none d-md-block">
          {" "}
          <span className="vertical-seperator" />{" "}
        </div>
        <div className="col-md-5 d-none d-md-block">
          <p className="fw-600 mb-0 custom-secondary">
            Our mission is to share the Good of Hinduism, Loving, Faith and
            Serving. People ask questions related to Hinduism.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <a href="/services" className="sigma_service style-3">
            <div className="sigma_service-thumb">
              <img src="assets/img/service/1.jpg" alt="img" />
              <i className="flaticon-temple" />
            </div>
            <div className="sigma_service-body">
              <h5>About Temple</h5>
              <p>
                Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                Vishnu, Krishna etc. Proin eget tortor risus.{" "}
              </p>
            </div>
          </a>
        </div>
        <div className="col-lg-6 col-md-6">
          <a href="/donation" className="sigma_service style-3">
            <div className="sigma_service-thumb">
              <img src="assets/img/service/2.jpg" alt="img" />
              <i className="flaticon-pooja" />
            </div>
            <div className="sigma_service-body">
              <h5>Why Hindu Temple</h5>
              <p>
                Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                Vishnu, Krishna etc. Proin eget tortor risus.{" "}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* holi End */}
</>

  )
}
