import React from "react";

export default function SideNavbar() {
  return (
    <aside className="sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg">
      <div className="sidebar">
        <div className="sidebar-widget widget-logo">
          <img src="assets/img/logo.png" className="mb-30" alt="img" />
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Donec rutrum congue leo eget malesuada. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi.
          </p>
        </div>
        {/* Instagram Section */}
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
          </div>
        </div>
        {/* Social Media Links */}
        <div className="sidebar-widget">
          <h5 className="widget-title">Follow Us</h5>
          <div className="sigma_post-share">
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
        </div>
      </div>
    </aside>
  );
}
