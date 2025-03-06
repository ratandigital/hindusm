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
      <li className="menu-item menu-item-has-children">
        <a href="#">Home</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="index-2.html">Home v1</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="home-v2.html">Home v2</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="home-v3.html">Home v3</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Blog</a>
        <ul className="sub-menu">
          <li className="menu-item">
            <a href="blog-grid.html">Blog Archive</a>
          </li>
          <li className="menu-item">
            {" "}
            <a href="blog-details.html">Blog Details</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Pages</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="about-us.html">About Us</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="broadcast.html">Broadcast</a>{" "}
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Volunteers</a>
            <ul className="sub-menu">
              <li className="menu-item">
                <a href="volunteers.html">Volunteers</a>
              </li>
              <li className="menu-item">
                {" "}
                <a href="volunteer-detail.html">Volunteer Details</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item">
            {" "}
            <a href="faq.html">FAQ</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Service</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="services.html">Service Style 1</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="services-2.html">Service Style 2</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Donation</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="donation.html">Donation</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="donation-archive.html">Donation Archive</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Event</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="events.html">Event</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="event-details.html">Event Detail</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Holis</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="holi.html">Holi</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="holi-details.html">Holi Details</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Puja</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="puja.html">Puja</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="puja-details.html">Puja Details</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item menu-item-has-children">
        <a href="#">Shop</a>
        <ul className="sub-menu">
          <li className="menu-item">
            {" "}
            <a href="shop.html">Shop</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="product-single.html">Product Details</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="cart.html">Cart</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="checkout.html">Checkout</a>{" "}
          </li>
          <li className="menu-item">
            {" "}
            <a href="wishlist.html">Wishlist</a>{" "}
          </li>
        </ul>
      </li>
      <li className="menu-item">
        <a href="contact-us.html">Contact</a>
      </li>
    </ul>
  </aside>
  )
}
