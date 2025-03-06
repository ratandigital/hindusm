import React from 'react'
import Audio from './Audio'

export default function HoliDetails() {
  return (
    <>
    {/* Post Content Start */}
    <div className="section">
      <div className="container">
        <div className="entry-content">
          <div className="sigma_post-single-thumb">
            <img src="assets/img/service/details/1.jpg" alt="post" />
            <div className="sigma_sermon-box">
         <Audio/>
            </div>
          </div>
          <p>
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
            Krishna etc. Proin eget tortor industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type, People
            ask questions related to Hinduism. specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </p>
          <p>
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
            Krishna etc. Proin eget tortor industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type, People
            ask questions related to Hinduism. specimen book. It has survived{" "}
            <a href="#">not only five centuries</a> , but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <div className="sigma_box pb-0 m-0">
            <div className="row">
              <div className="col-md-4">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="flaticon-temple" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5> Temple </h5>
                    <p>
                      It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="flaticon-powder" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5> Holis </h5>
                    <p>
                      It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="flaticon-arti" />
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
          <div className="section">
            <div className="row">
              <div className="col-lg-6">
                <div className="sigma_img-box">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src="assets/img/service/details/2.jpg" alt="service" />
                    </div>
                    <div className="col-lg-6 mt-5">
                      <img src="assets/img/service/details/3.jpg" alt="service" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="me-lg-30">
                  <div className="section-title text-start">
                    <p className="subtitle">Features</p>
                    <h4 className="title">Check it Out Our Privacy Policy</h4>
                  </div>
                  <ul className="sigma_list list-2">
                    <li>Peace of Mind</li>
                    <li>Set For Pastor</li>
                    <li>100% Satisfaction</li>
                    <li>Trusted Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-padding pt-0">
            <div className="row">
              <div className="col-lg-6">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {" "}
                      <i className="fas fa-om" /> Holi{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="far fa-church" /> Temple
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="far fa-user" /> Pastor
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="custom-form">
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Email Address"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-envelope" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="sigma_btn-custom d-block w-100"
                            name="button"
                          >
                            Start Saving Today
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-lock" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <h6>Already a Member?</h6>
                                <a href="#">Sign In</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-star" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <div className="sigma_rating">
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                </div>
                                <span className="custom-primary">
                                  100k+ Reviews
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="custom-form">
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Email Address"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-envelope" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="sigma_btn-custom d-block w-100"
                            name="button"
                          >
                            Start Saving Today
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-lock" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <h6>Already a Member?</h6>
                                <a href="#">Sign In</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-star" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <div className="sigma_rating">
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                </div>
                                <span className="custom-primary">
                                  100k+ Reviews
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="custom-form">
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Email Address"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-envelope" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control"
                            name="name"
                            defaultValue=""
                          />
                          <i className="far fa-user" />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="sigma_btn-custom d-block w-100"
                            name="button"
                          >
                            Start Saving Today
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-lock" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <h6>Already a Member?</h6>
                                <a href="#">Sign In</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="sigma_icon-block icon-block-8">
                              <div className="icon-wrapper">
                                <i className="fas fa-star" />
                              </div>
                              <div className="sigma_icon-block-content">
                                <div className="sigma_rating">
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                  <i className="far fa-star active" />
                                </div>
                                <span className="custom-primary">
                                  100k+ Reviews
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="assets/img/service/details/4.jpg" alt="service" />
              </div>
            </div>
          </div>
          <p>
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
            Krishna etc. Proin eget tortor industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type, People
            ask questions related to Hinduism. specimen book. It has survived{" "}
            <a href="#">not only five centuries</a> , but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <p>
            Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
            Krishna etc. Proin eget tortor industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type, People
            ask questions related to Hinduism. specimen book. It has survived{" "}
            <a href="#">not only five centuries</a> , but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
      </div>
    </div>
    {/* Post Content End */}
  </>
  
  )
}
