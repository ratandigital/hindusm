import React from 'react'

export default function ContactSection() {
  return (
    <div
    className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat"
    style={{ backgroundImage: "url(assets/img/bg1.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <form method="post">
            <div className="form-row">
              <div className="col-lg-6">
                <div className="form-group">
                  <i className="far fa-user" />
                  <input
                    type="text"
                    className="form-control transparent"
                    placeholder="First Name"
                    name="fname"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <i className="far fa-user" />
                  <input
                    type="text"
                    className="form-control transparent"
                    placeholder="Last Name"
                    name="lname"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <i className="far fa-pencil" />
                  <input
                    type="text"
                    className="form-control transparent"
                    placeholder="Subject"
                    name="subject"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <i className="far fa-envelope" />
                  <input
                    type="text"
                    className="form-control transparent"
                    placeholder="Email Address"
                    name="email"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control transparent"
                    placeholder="Enter Message"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="sigma_btn-custom d-block w-100"
                  name="button"
                >
                  {" "}
                  Get a Quote <i className="far fa-arrow-right" />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/1.png" alt="client" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/2.png" alt="client" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/3.png" alt="client" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/4.png" alt="client" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/5.png" alt="client" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sigma_client">
                <img src="assets/img/clients/6.png" alt="client" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
