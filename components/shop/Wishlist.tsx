import React from 'react'

export default function Wishlist() {
  return (
    <>
  {/* Wishlist Start */}
  <div className="section">
    <div className="container">
      {/* Wishlist Table Start */}
      <table className="sigma_responsive-table">
        <thead>
          <tr>
            <th className="remove-item" />
            <th>Product</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="remove">
              <button
                type="button"
                className="close-btn close-danger remove-from-cart"
              >
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="sigma_cart-product-wrapper">
                <img src="assets/img/products/1.jpg" alt="prod1" />
                <div className="sigma_cart-product-body">
                  <h6>
                    {" "}
                    <a href="#">Ramayana Book</a>{" "}
                  </h6>
                  <p>2 Pieces</p>
                </div>
              </div>
            </td>
            <td data-title="Price">
              {" "}
              <strong>12.99$</strong>{" "}
            </td>
            <td data-title="Availability">
              <span className="sigma_product-stock instock">In Stock</span>
            </td>
            <td data-title="Total">
              {" "}
              <strong>12.99$</strong>{" "}
            </td>
            <td data-title="Actions">
              {" "}
              <a href="#" className="sigma_btn-custom btn-sm shadow-none">
                Add to Cart
              </a>{" "}
            </td>
          </tr>
          <tr>
            <td className="remove">
              <button
                type="button"
                className="close-btn close-danger remove-from-cart"
              >
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="sigma_cart-product-wrapper">
                <img src="assets/img/products/5.jpg" alt="prod1" />
                <div className="sigma_cart-product-body">
                  <h6>
                    {" "}
                    <a href="#">Gita Book</a>{" "}
                  </h6>
                  <p>1 Piece</p>
                </div>
              </div>
            </td>
            <td data-title="Price">
              {" "}
              <strong>9.99$</strong>{" "}
            </td>
            <td data-title="Availability">
              <span className="sigma_product-stock instock">In Stock</span>
            </td>
            <td data-title="Total">
              {" "}
              <strong>9.99$</strong>{" "}
            </td>
            <td data-title="Actions">
              {" "}
              <a href="#" className="sigma_btn-custom btn-sm shadow-none">
                Add to Cart
              </a>{" "}
            </td>
          </tr>
          <tr>
            <td className="remove">
              <button
                type="button"
                className="close-btn close-danger remove-from-cart"
              >
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="sigma_cart-product-wrapper">
                <img src="assets/img/products/4.jpg" alt="prod1" />
                <div className="sigma_cart-product-body">
                  <h6>
                    {" "}
                    <a href="#">Mahabharat Book</a>{" "}
                  </h6>
                  <p>3 Pieces</p>
                </div>
              </div>
            </td>
            <td data-title="Price">
              {" "}
              <strong>13.99$</strong>{" "}
            </td>
            <td data-title="Availability">
              <span className="sigma_product-stock outofstock">
                Out of Stock
              </span>
            </td>
            <td data-title="Total">
              {" "}
              <strong>13.99$</strong>{" "}
            </td>
            <td data-title="Actions">
              {" "}
              <a href="#" className="sigma_btn-custom btn-sm shadow-none">
                Add to Cart
              </a>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      {/* Wishlist Table End */}
      {/* Share Wishlist Start */}
      <div className="text-center">
        <h5>Share Your Wishlist</h5>
        {/* Post Share Start */}
        <div className="sigma_post-share">
          <ul className="sigma_sm justify-content-center">
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
        {/* Post Share End */}
      </div>
      {/* Share Wishlist End */}
    </div>
  </div>
  {/*  Wishlist End */}
</>

  )
}
