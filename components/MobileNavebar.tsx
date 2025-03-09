import React from 'react'

export default function MobileNavebar() {
  return (
    <aside className="sigma_aside sigma_aside-left">
    <a className="navbar-brand" href="index-2.html">
      {" "}
      <img src="assets/img/logo.png" alt="logo" />{" "}
    </a>
    {/* Menu */}
    <ul>
      <li className="menu-item ">
        <a href="/">Home</a>
      
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Blog</a>
        <ul className="sub-menu">
          <li className="menu-item">
            <a href="/blog-grid">Blog Archive</a>
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
            <a href="/about-us">About Us</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="/broadcast">Broadcast</a>{" "}
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Volunteers</a>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="/volunteers">Volunteers</a>
              </li>
              <li className="menu-item">
                {" "}
                <a href="/volunteer-detail">Volunteer Details</a>{" "}
              </li>
            </ul>
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
      <li className="menu-item menu-item-has-children">
        <a href="#">Shop</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="/shop">Shop</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="/product-single">Product Details</a>{" "}
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
        <a href="/contact-us">Contact</a>
      </li>
    </ul>
  </aside>
  )
}
