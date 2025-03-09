import React from 'react'

export default function FooterSection() {
  return (
    <footer className="sigma_footer footer-2">
    {/* Middle Footer */}
    <div className="sigma_footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
            <h5 className="widget-title">About Us</h5>
            <p className="mb-4">
              You need to be sure there isn’t anything embarrassing hidden in
              the middle of text.{" "}
            </p>
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <i className="far fa-phone custom-primary me-3" />
              <span>987-987-930-302</span>
            </div>
            <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
              <i className="far fa-envelope custom-primary me-3" />
              <span>info@example.com</span>
            </div>
            <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
              <i className="far fa-map-marker custom-primary me-3" />
              <span>14/A, Poor Street City Tower, New York USA</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
            <h5 className="widget-title">Information</h5>
            <ul>
              <li>
                <i className="fas fa-om" />
                <a href="/puja">Puja</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/services">Services</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/about-us">Temple</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/holi">Holis</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/volunteers">Volunteers</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/event">Donation</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
            <h5 className="widget-title">Others</h5>
            <ul>
              <li>
                <i className="fas fa-om" />
                <a href="/shop">Shop</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/checkout">Checkout</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/donation">Donation</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <i className="fas fa-om" />
                <a href="/blog-grid">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
            <h5 className="widget-title">Recent Posts</h5>
            <article className="sigma_recent-post">
              <a href="/blog-details">
                <img src="assets/img/blog/sm/1.jpg" alt="post" />
              </a>
              <div className="sigma_recent-post-body">
                <a href="/blog-details">
                  {" "}
                  <i className="far fa-calendar" /> May 20, 2024
                </a>
                <h6>
                  {" "}
                  <a href="/blog-details">
                    Temple companies are being so transparent with their work
                  </a>{" "}
                </h6>
              </div>
            </article>
            <article className="sigma_recent-post">
              <a href="/blog-details">
                <img src="assets/img/blog/sm/2.jpg" alt="post" />
              </a>
              <div className="sigma_recent-post-body">
                <a href="/blog-details">
                  {" "}
                  <i className="far fa-calendar" /> May 20, 2024
                </a>
                <h6>
                  {" "}
                  <a href="/blog-details">
                    Testimony love offering so blessed
                  </a>{" "}
                </h6>
              </div>
            </article>
            <article className="sigma_recent-post">
              <a href="/blog-details">
                <img src="assets/img/blog/sm/3.jpg" alt="post" />
              </a>
              <div className="sigma_recent-post-body">
                <a href="/blog-details">
                  {" "}
                  <i className="far fa-calendar" /> May 20, 2024
                </a>
                <h6>
                  {" "}
                  <a href="/blog-details">
                    As we've all discovered by now, the world can change
                  </a>{" "}
                </h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="sigma_footer-bottom">
      <div className="container-fluid">
        <div className="sigma_footer-copyright">
          <p>
            {" "}
            Copyright © Maharatri -{" "}
            <a href="#" className="custom-primary">
              2024
            </a>{" "}
          </p>
        </div>
        <div className="sigma_footer-logo">
          <img src="assets/img/logo.png" alt="logo" />
        </div>
        <ul className="sigma_sm square">
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
    </div>
  </footer>
  )
}
