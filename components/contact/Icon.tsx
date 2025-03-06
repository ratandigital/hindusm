import React from 'react'

export default function Icon() {
  return (
<>
  {/* Icons Start */}
  <div className="section section-padding pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-email" />
            <div className="sigma_icon-block-content">
              <span>
                Send Email <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Email Address</h5>
              <p>info@example.com</p>
              <p>info@support.com</p>
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-email" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-call" />
            <div className="sigma_icon-block-content">
              <span>
                Call Us Now <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Phone Number </h5>
              <p> +123 478 390 </p>
              <p> +489 472 928 </p>
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-call" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-location" />
            <div className="sigma_icon-block-content">
              <span>
                Find Us Here <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Location </h5>
              <p>16/A Daddy Yankee Tower</p>
              <p>New York, US</p>
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-location" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Icons End */}
</>

  )
}
