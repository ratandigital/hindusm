import React from 'react'

export default function AdditionalInformation() {
  return (
<>
  {/* Additional Information Start */}
  <div className="section pt-0">
    <div className="container">
      <div className="sigma_product-additional-info">
        <ul className="nav" id="bordered-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="tab-product-desc-tab"
              data-bs-toggle="pill"
              href="#tab-product-desc"
              role="tab"
              aria-controls="tab-product-desc"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-info-tab"
              data-bs-toggle="pill"
              href="#tab-product-info"
              role="tab"
              aria-controls="tab-product-info"
              aria-selected="false"
            >
              Additional Information
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-reviews-tab"
              data-bs-toggle="pill"
              href="#tab-product-reviews"
              role="tab"
              aria-controls="tab-product-reviews"
              aria-selected="false"
            >
              Reviews{" "}
            </a>
          </li>
        </ul>
        <div className="tab-content" id="bordered-tabContent">
          <div
            className="tab-pane fade show active"
            id="tab-product-desc"
            role="tabpanel"
            aria-labelledby="tab-product-desc-tab"
          >
            <h4>Description</h4>
            <p>
              {" "}
              All Religious Books are available in Temple Stores. Our mission is
              to share the Good of Hinduism, Loving, Faith and Serving., non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica
            </p>
            <p>
              {" "}
              All Religious Books are available in Temple Stores. Our mission is
              to share the Good of Hinduism, Loving, Faith and Serving., non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="tab-product-info"
            role="tabpanel"
            aria-labelledby="tab-product-info-tab"
          >
            <h4>Additional Information</h4>
            <table>
              <thead>
                <tr>
                  <th scope="col">Attributes</th>
                  <th scope="col">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <strong>Color</strong>{" "}
                  </td>
                  <td>blue, red, yellow, green</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <strong>Material</strong>{" "}
                  </td>
                  <td>wood, plastic, stainless steel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="tab-product-reviews"
            role="tabpanel"
            aria-labelledby="tab-product-reviews-tab"
          >
            <h4>Leave a Review</h4>
            <div className="sigma_rating-wrapper">
              <div className="sigma_rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <span>Your Review</span>
            </div>
            {/* Review Form start */}
            <div className="comment-form">
              <form method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="fname"
                      defaultValue=""
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      defaultValue=""
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your comment..."
                      name="comment"
                      rows={7}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="sigma_btn-custom"
                  name="button"
                >
                  Post Review
                </button>
              </form>
            </div>
            {/* Review Form End */}
            {/* Reviews Start */}
            <div className="comments-list">
              <ul>
                <li className="comment-item">
                  <img src="assets/img/volunteers/1.jpg" alt="comment author" />
                  <div className="comment-body">
                    <h5>Robert John</h5>
                    <div className="sigma_rating">
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star" />
                    </div>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition.
                    </p>
                    <a href="#" className="btn-link">
                      {" "}
                      Reply <i className="far fa-reply" />{" "}
                    </a>
                    <span>
                      <i className="far fa-clock" /> January 13 2024
                    </span>
                  </div>
                </li>
                <li className="comment-item">
                  <img src="assets/img/volunteers/2.jpg" alt="comment author" />
                  <div className="comment-body">
                    <h5>Christine Hill</h5>
                    <div className="sigma_rating">
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                      <i className="fa fa-star active" />
                    </div>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches
                    </p>
                    <a href="#" className="btn-link">
                      {" "}
                      Reply <i className="far fa-reply" />{" "}
                    </a>
                    <span>
                      <i className="far fa-clock" /> January 13 2024
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Reviews End */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Additional Information End */}
</>

  )
}
