import React from 'react'

export default function Sidebar() {
  return (
    <div className="col-lg-4">
    <div className="sidebar">
      {/* About Author Start */}
      <div className="sidebar-widget widget-about-author">
        <h5 className="widget-title">About Me</h5>
        <div className="widget-about-author-inner">
          <img src="assets/img/blog/author.jpg" alt="author" />
          <h5>Rosalina D. Willaimson</h5>
          <p>
            "Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Donec sollicitudin molestie malesuada. Mauris
            blandit aliquet elit"
          </p>
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
      </div>
      {/* About Author End */}
      {/* Search Widget Start */}
      <div className="sidebar-widget widget-search">
        <h5 className="widget-title">Search</h5>
        <form method="post">
          <div className="sigma_search-adv-input">
            <input
              type="text"
              className="form-control"
              placeholder="Search Posts"
              name="search"
              defaultValue=""
            />
            <button type="submit" name="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
      {/* Search Widget End */}
      {/* Popular Feed Start */}
      <div className="sidebar-widget widget-recent-posts">
        <h5 className="widget-title">Recent Posts</h5>
        <article className="sigma_recent-post">
          <a href="blog-details.html">
            <img src="assets/img/blog/md/1.jpg" alt="post" />
          </a>
          <div className="sigma_recent-post-body">
            <h6>
              {" "}
              <a href="blog-details.html">
                As we've all discovered by now, the world can change
              </a>{" "}
            </h6>
            <a href="blog-details.html">
              {" "}
              <i className="far fa-calendar" /> May 20, 2024
            </a>
          </div>
        </article>
        <article className="sigma_recent-post">
          <a href="blog-details.html">
            <img src="assets/img/blog/md/2.jpg" alt="post" />
          </a>
          <div className="sigma_recent-post-body">
            <h6>
              {" "}
              <a href="blog-details.html">
                Testimony love offering so blessed
              </a>{" "}
            </h6>
            <a href="blog-details.html">
              {" "}
              <i className="far fa-calendar" /> May 20, 2024
            </a>
          </div>
        </article>
        <article className="sigma_recent-post">
          <a href="blog-details.html">
            <img src="assets/img/blog/md/3.jpg" alt="post" />
          </a>
          <div className="sigma_recent-post-body">
            <h6>
              {" "}
              <a href="blog-details.html">
                As we've all discovered by now, the world can change
              </a>{" "}
            </h6>
            <a href="blog-details.html">
              {" "}
              <i className="far fa-calendar" /> May 20, 2024
            </a>
          </div>
        </article>
      </div>
      {/* Popular Feed End */}
      {/* Categories Start */}
      <div className="sidebar-widget widget-categories">
        <h5 className="widget-title"> Our Categories </h5>
        <ul className="sidebar-widget-list">
          <li>
            {" "}
            <a href="#">
              {" "}
              Avatars <span>32</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Festivals <span>22</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Mahabharat <span>17</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Mythology <span>05</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Religion <span>32</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Uncategorized <span>12</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Ramayan <span>42</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              Bhagwat Gita <span>04</span>{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      {/* Categories End */}
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
              Bloggers available on @Themeforest https://t.co/2r1POkkgVC
              ...{" "}
            </p>
            <strong>November 25, 2024</strong>
          </div>
        </div>
        <div className="twitter-item d-flex align-items-start">
          <i className="fab fa-twitter custom-primary me-4 mt-2" />
          <div className="twitter-item-content">
            <p>
              Rescue - #Gutenberg ready @ HTML Template for Creative
              Bloggers available on @Themeforest https://t.co/2r1POkkgVC
              ...{" "}
            </p>
            <strong>November 25, 2024</strong>
          </div>
        </div>
        <div className="twitter-item d-flex align-items-start">
          <i className="fab fa-twitter custom-primary me-4 mt-2" />
          <div className="twitter-item-content">
            <p>
              Rescue - #Gutenberg ready @ HTML Template for Creative
              Bloggers available on @Themeforest https://t.co/2r1POkkgVC
              ...{" "}
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
      {/* Popular Tags Start */}
      <div className="sidebar-widget">
        <h5 className="widget-title">Popular Tags</h5>
        <div className="tagcloud">
          <a href="#">Isabella</a>
          <a href="#">Samantha</a>
          <a href="#">Emily</a>
          <a href="#">June</a>
          <a href="#">Grace</a>
          <a href="#">Madison</a>
          <a href="#">Heather</a>
          <a href="#">Micheal</a>
        </div>
      </div>
      {/* Popular Tags End */}
      {/* Ad banner Start */}
      <div className="sidebar-widget widget-ad p-0 border-0">
        <a href="#">
          <img src="assets/img/blog/ad.jpg" alt="ad" />
          <div>
            <span>Add a Custom Text</span>
            Add Banner here
          </div>
        </a>
      </div>
      {/* Ad banner End */}
    </div>
  </div>
  )
}
