import React from 'react'

export default function HoliSection() {
  return (
    <div className="section section-padding pattern-squares dark-bg-2">
    <div className="container">
      <div className="section-title text-start">
        <p className="subtitle">service</p>
        <h4 className="title text-white">How We Can Help</h4>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <a href="services.html" className="sigma_service style-1 primary-bg">
            <div className="sigma_service-thumb">
              <i className="text-white flaticon-temple" />
            </div>
            <div className="sigma_service-body">
              <h5 className="text-white">About Temple</h5>
              <p className="text-white">
                Temple is place where hindu worship consectetur adipisicing
                elit, sed do{" "}
              </p>
            </div>
            <span className="btn-link text-white">
              Learn More <i className="text-white far fa-arrow-right" />{" "}
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mt-negative-sm">
          <a
            href="services.html"
            className="sigma_service style-1 secondary-bg"
          >
            <div className="sigma_service-thumb">
              <i className="custom-primary flaticon-hindu-1" />
            </div>
            <div className="sigma_service-body">
              <h5 className="text-white">Our Pandit</h5>
              <p className="text-white">
                Temple is place where hindu worship consectetur adipisicing
                elit, sed do{" "}
              </p>
            </div>
            <span className="text-white btn-link">
              Learn More <i className="text-white far fa-arrow-right" />{" "}
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 mt-negative-sm">
          <a href="services.html" className="sigma_service style-1 bg-white">
            <div className="sigma_service-thumb">
              <i className="flaticon-pooja" />
            </div>
            <div className="sigma_service-body">
              <h5>Prayers</h5>
              <p>
                Temple is place where hindu worship consectetur adipisicing
                elit, sed do{" "}
              </p>
            </div>
            <span className="btn-link">
              Learn More <i className="far fa-arrow-right" />{" "}
            </span>
          </a>
        </div>
      </div>
      <div className="text-end">
        <a href="services.html" className="btn-link text-white">
          {" "}
          Get Started Now <i className="custom-primary far fa-arrow-right" />{" "}
        </a>
      </div>
    </div>
  </div>
  )
}
