import React from 'react';
import ProductSidebar from './ProductSidebar';

export default function ProductContent() {
  return (
    <>
      {/* Product Content Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            {/* Product Image Slider */}
            <div className="col-lg-4 col-md-6">
              <div className="sigma_product-single-thumb">
                <div className="slider">
                  {[0, 1, 2, 3].map((num) => (
                    <img key={num} src={`assets/img/products/${num}.jpg`} alt="product" />
                  ))}
                </div>
                <div className="slider-nav">
                  {[0, 1, 2, 3].map((num) => (
                    <img key={num} src={`assets/img/products/${num}.jpg`} alt="product" />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-4 col-md-6">
              <div className="sigma_product-single-content">
                <div className="sigma_rating-wrapper">
                  <div className="sigma_rating">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="far fa-star active" />
                    ))}
                    <i className="far fa-star" />
                  </div>
                  <span>255 Reviews</span>
                </div>
                <h4 className="entry-title">Gita Book</h4>
                <div className="sigma_product-price">
                  <span>352$</span>
                  <span>245$</span>
                </div>
                <p>
                  <strong className="me-2">Interested: <span>05</span></strong>
                  <strong>Availability: <span>In Stock</span></strong>
                </p>
                <p className="sigma_product-excerpt">
                  All Religious Books are available in Temple Stores. Our mission is to share the Good of Hinduism, Loving, Faith, and Serving.
                </p>
                <form className="sigma_product-atc-form">
                  <div className="sigma_product-variation-wrapper">
                    <div className="sigma_product-radio form-group">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <label key={size}>
                          <input type="radio" name="size" value={size} />
                          <span>{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="qty-outter">
                    <a href="product-single.html" className="sigma_btn-custom">Buy Now</a>
                    <div className="qty-inner">
                      <h6>Qty:</h6>
                      <div className="qty">
                        <span className="qty-subtract"><i className="fa fa-minus" /></span>
                        <input type="text" name="qty" defaultValue={1} />
                        <span className="qty-add"><i className="fa fa-plus" /></span>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Social Share & Wishlist */}
                <div className="sigma_post-single-meta">
                  <div className="sigma_post-single-meta-item sigma_post-share">
                    <h6>Share</h6>
                    <ul className="sigma_sm">
                      {["facebook-f", "linkedin-in", "twitter", "youtube"].map((social) => (
                        <li key={social}>
                          <a href="#"><i className={`fab fa-${social}`} /></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sigma_post-single-meta-item">
                    <div className="sigma_product-controls">
                      <a href="#" data-toggle="tooltip" title="Compare">
                        <i className="far fa-signal-4" />
                      </a>
                      <a href="#" data-toggle="tooltip" title="Wishlist">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <h6>Guaranteed Safe Checkout</h6>
                <img src="assets/img/payments.png" alt="payments" />
              </div>
            </div>

            {/* Sidebar */}
                <ProductSidebar/>
          </div>
        </div>
      </div>
      {/* Product Content End */}
    </>
  );
}
