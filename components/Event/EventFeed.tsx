import React from 'react'

export default function EventFeed() {
  return (
    <>
       {/* Social Media Start */}
       <div className="sidebar-widget">
            <h5 className="widget-title">Never Miss Out</h5>
            <ul className="sigma_sm square light">
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
          {/* Social Media End */}
          {/* Twitter Feed Start */}
          <div className="sidebar-widget widget-twitter">
            <h5 className="widget-title">Twitter Feed</h5>
            <div className="twitter-item d-flex align-items-start">
              <i className="fab fa-twitter custom-primary me-4 mt-2" />
              <div className="twitter-item-content">
                <p>
                  Rescue - #Gutenberg ready @ HTML Template for Creative
                  Bloggers available on @Themeforest https://t.co/2r1POkkgVC ...{" "}
                </p>
                <strong>November 25, 2024</strong>
              </div>
            </div>
            <div className="twitter-item d-flex align-items-start">
              <i className="fab fa-twitter custom-primary me-4 mt-2" />
              <div className="twitter-item-content">
                <p>
                  Rescue - #Gutenberg ready @ HTML Template for Creative
                  Bloggers available on @Themeforest https://t.co/2r1POkkgVC ...{" "}
                </p>
                <strong>November 25, 2024</strong>
              </div>
            </div>
            <div className="twitter-item d-flex align-items-start">
              <i className="fab fa-twitter custom-primary me-4 mt-2" />
              <div className="twitter-item-content">
                <p>
                  Rescue - #Gutenberg ready @ HTML Template for Creative
                  Bloggers available on @Themeforest https://t.co/2r1POkkgVC ...{" "}
                </p>
                <strong>November 25, 2024</strong>
              </div>
            </div>
          </div>
          {/* Twitter Feed End */}
          {/* Instagram Start */}
          <div className="sidebar-widget widget-ig">
            <h5 className="widget-title">Instagram</h5>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/1.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/2.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/3.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/4.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/5.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/6.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/7.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/8.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/9.jpg" alt="ig" />
                </a>
              </div>
            </div>
          </div>
          {/* Instagram End */}
    </>
  )
}
