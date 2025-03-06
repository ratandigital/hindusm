import React from 'react'

export default function Cart() {
  return (
    <>
    {/*Cart Start */}
    <div className="section">
      <div className="container">
        {/* Cart Table Start */}
        <table className="sigma_responsive-table">
          <thead>
            <tr>
              <th className="remove-item" />
              <th>Product</th>
              <th>Price</th>
              <th>Qunantity</th>
              <th>Total</th>
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
                      <a href="#">Gita Book</a>{" "}
                    </h6>
                    <p>2 Pieces</p>
                  </div>
                </div>
              </td>
              <td data-title="Price">
                {" "}
                <strong>12.99$</strong>{" "}
              </td>
              <td className="quantity" data-title="Quantity">
                <input
                  type="number"
                  className="qty form-control"
                  defaultValue={1}
                />
              </td>
              <td data-title="Total">
                {" "}
                <strong>12.99$</strong>{" "}
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
                      <a href="#">Ramayana Book</a>{" "}
                    </h6>
                    <p>1 Piece</p>
                  </div>
                </div>
              </td>
              <td data-title="Price">
                {" "}
                <strong>9.99$</strong>{" "}
              </td>
              <td className="quantity" data-title="Quantity">
                <input
                  type="number"
                  className="qty form-control"
                  defaultValue={1}
                />
              </td>
              <td data-title="Total">
                {" "}
                <strong>9.99$</strong>{" "}
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
              <td className="quantity" data-title="Quantity">
                <input
                  type="number"
                  className="qty form-control"
                  defaultValue={1}
                />
              </td>
              <td data-title="Total">
                {" "}
                <strong>13.99$</strong>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        {/* Cart Table End */}
        {/* Coupon Code Start */}
        <div className="row">
          <div className="col-lg-5">
            <div className="form-group mb-0">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Coupon Code"
                  aria-label="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="sigma_btn-custom shadow-none" type="button">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Coupon Code End */}
      </div>
    </div>
    {/* Cart End */}
  </>
  
  )
}
