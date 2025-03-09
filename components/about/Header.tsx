import React from 'react'

export default function Header() {
  return (
    <>
    {/* partial:partia/__header.html */}
    <header className="sigma_header header-3 can-sticky header-absolute">
      {/* Middle Header Start */}
      <div className="sigma_header-middle">
        <nav className="navbar">
          {/* Logo Start */}
          <div className="sigma_logo-wrapper">
            <a className="navbar-brand" href="/">
              <img src="assets/img/logo.png" alt="logo" />
            </a>
          </div>
          {/* Logo End */}
          {/* Menu */}
          <div className="sigma_header-inner">
            <div className="sigma_header-top">
              <div className="sigma_header-top-inner">
                <ul className="sigma_header-top-links">
                  <li className="menu-item">
                    {" "}
                    <a href="tel:+123456789">
                      {" "}
                      <i className="fal fa-phone" /> (+xxx) xxx xxxx xxx
                    </a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="ratanjs:info@example.com">
                      {" "}
                      <i className="fal fa-envelope" /> info@ratanjs.com
                    </a>{" "}
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Event</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <a href="/event">Event</a>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/event-details">Event Detail</a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Holis</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <a href="/holi">Holi</a>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/holi-details">Holi Details</a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Puja</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <a href="/puja">Puja</a>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/puja-details">Puja Details</a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="sigma_header-top-links">
                  <li className="d-flex align-items-center">
                    <a href="/broadcast" className="live">
                      <i className="fa fa-circle" />
                      Live
                    </a>
                  </li>
                  <li className="menu-item menu-item-has-children d-flex align-items-center">
                    <img src="assets/img/flag.png" alt="img" />
                    <a href="#" className="m-0">
                      {" "}
                      Language
                    </a>
                    <ul className="sub-menu sub-menu-left">
                      <li>
                        {" "}
                        <a href="#">English</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">German</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">French</a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-between">
              <ul className="navbar-nav">
                <li className="menu-item">
                  <a href="/">Home</a>
               
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="/about-us">About</a>{" "}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="/blog-grid">Blog</a>
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/blog-details">Blog Details</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="/broadcast">Broadcast</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/volunteers">Volunteers</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/volunteers-details">Volunteer Details</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/faq">FAQ</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Service</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="/services">Service</a>{" "}
                    </li>
                  
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Donation</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="/donation">Donation</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/donation-archive">Donation Archive</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="/shop">Shop</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/product-details">Product Details</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/cart">Cart</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/checkout">Checkout</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="/wishlist">Wishlist</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <div className="sigma_header-controls style-2 p-0 border-0">
                <ul className="sigma_header-controls-inner pe-3">
                  <li className="sigma_header-cart style-2">
                    <a href="/cart">
                      {" "}
                      <i className="fal fa-shopping-bag" />{" "}
                    </a>
                    <span className="number">1</span>
                    <ul className="cart-dropdown">
                      <li>
                        <a href="#" className="sigma_cart-product-wrapper">
                          <img src="assets/img/products/1.jpg" alt="prod1" />
                          <div className="sigma_cart-product-body">
                            <h6>Gita Book</h6>
                            <div className="sigma_product-price justify-content-start">
                              <span>29$</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sigma_cart-product-wrapper">
                          <img src="assets/img/products/5.jpg" alt="prod1" />
                          <div className="sigma_cart-product-body">
                            <h6>Ramayana Book</h6>
                            <div className="sigma_product-price justify-content-start">
                              <span>35$</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sigma_cart-product-wrapper">
                          <img src="assets/img/products/4.jpg" alt="prod1" />
                          <div className="sigma_cart-product-body">
                            <h6>Mahabharat Book</h6>
                            <div className="sigma_product-price justify-content-start">
                              <span>50$</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sigma_header-wishlist style-2">
                    <a href="/wishlist">
                      {" "}
                      <i className="fal fa-heart" />{" "}
                    </a>
                    <ul className="cart-dropdown">
                      <li>
                        <p className="mb-0">You don't have any items</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Controls */}
          <div className="sigma_header-controls style-2">
            <a href="donation.html" className="sigma_btn-custom">
              {" "}
              Donate Here
            </a>
            <ul className="sigma_header-controls-inner">
              {/* Mobile Toggler */}
              <li className="aside-toggler style-2 aside-trigger-left">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Middle Header End */}
    </header>
    {/* partial */}
  </>
  
  )
}
