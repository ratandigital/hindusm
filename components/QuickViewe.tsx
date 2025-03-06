import React from 'react'

export default function QuickViewe() {
  return (
    <div
    className="modal fade sigma_quick-view-modal"
    id="quickViewModal"
    role="dialog"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body">
          <div className="close-btn close-dark close" data-bs-dismiss="modal">
            <span />
            <span />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="sigma_product-single-thumb">
                <img src="assets/img/products/new/1.jpg" alt="product" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sigma_product-single-content">
                <h4 className="entry-title">
                  {" "}
                  Koobay 14" Wooden Trousers Bottom Clips Hangers w Rose Gold.{" "}
                </h4>
                <div className="sigma_product-price">
                  <span>352$</span>
                  <span>245$</span>
                </div>
                <div className="sigma_rating-wrapper">
                  <div className="sigma_rating">
                    <i className="far fa-star active" />
                    <i className="far fa-star active" />
                    <i className="far fa-star active" />
                    <i className="far fa-star active" />
                    <i className="far fa-star" />
                  </div>
                  <span>255 Reviews</span>
                </div>
                <p>
                  {" "}
                  <strong className="me-2">
                    Interested: <span>05</span>
                  </strong>{" "}
                  <strong>
                    Availablity: <span>In Stock</span>
                  </strong>{" "}
                </p>
                <p className="sigma_product-excerpt">
                  All Religious Books are available in Temple Stores. Our
                  mission is to share the Good of Hinduism, Loving, Faith and
                  Serving.
                </p>
                <form className="sigma_product-atc-form">
                  <div className="sigma_product-variation-wrapper">
                    <div className="sigma_product-radio form-group">
                      <label>
                        <input
                          type="radio"
                          name="size"
                          defaultValue=""
                          
                        />
                        <span>XS</span>
                      </label>
                      <label>
                        <input type="radio" name="size" defaultValue="" />
                        <span>S</span>
                      </label>
                      <label>
                        <input type="radio" name="size" defaultValue="" />
                        <span>M</span>
                      </label>
                      <label>
                        <input type="radio" name="size" defaultValue="" />
                        <span>L</span>
                      </label>
                      <label>
                        <input type="radio" name="size" defaultValue="" />
                        <span>XL</span>
                      </label>
                    </div>
                  </div>
                  <div className="qty-outter">
                    <a
                      href="product-single.html"
                      className="sigma_btn-custom secondary"
                    >
                      Buy Now
                    </a>
                    <div className="qty-inner">
                      <h6>Qty:</h6>
                      <div className="qty">
                        <span className="qty-subtract">
                          <i className="fa fa-minus" />
                        </span>
                        <input type="text" name="qty" defaultValue={1} />
                        <span className="qty-add">
                          <i className="fa fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Post Meta Start */}
                <div className="sigma_post-single-meta">
                  <div className="sigma_post-single-meta-item sigma_post-share">
                    <h6>Share</h6>
                    <ul className="sigma_sm">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sigma_post-single-meta-item">
                    <div className="sigma_product-controls">
                      <a href="#" data-toggle="tooltip" title="Compare">
                        {" "}
                        <i className="far fa-signal-4" />{" "}
                      </a>
                      <a href="#" data-toggle="tooltip" title="Wishlist">
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Post Meta End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
