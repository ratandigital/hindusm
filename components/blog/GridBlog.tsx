import React from 'react'

export default function GridBlog() {
  return (
    <>
    {/* partial */}
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar">
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
                  <a href="/blog-details">
                    <img src="assets/img/blog/md/1.jpg" alt="post" />
                  </a>
                  <div className="sigma_recent-post-body">
                    <h6>
                      {" "}
                      <a href="/blog-details">
                        As we've all discovered by now, the world can change
                      </a>{" "}
                    </h6>
                    <a href="/blog-details">
                      {" "}
                      <i className="far fa-calendar" /> May 20, 2024
                    </a>
                  </div>
                </article>
                <article className="sigma_recent-post">
                  <a href="/blog-details">
                    <img src="assets/img/blog/md/2.jpg" alt="post" />
                  </a>
                  <div className="sigma_recent-post-body">
                    <h6>
                      {" "}
                      <a href="/blog-details">
                        Testimony love offering so blessed
                      </a>{" "}
                    </h6>
                    <a href="/blog-details">
                      {" "}
                      <i className="far fa-calendar" /> May 20, 2024
                    </a>
                  </div>
                </article>
                <article className="sigma_recent-post">
                  <a href="/blog-details">
                    <img src="assets/img/blog/md/3.jpg" alt="post" />
                  </a>
                  <div className="sigma_recent-post-body">
                    <h6>
                      {" "}
                      <a href="/blog-details">
                        As we've all discovered by now, the world can change
                      </a>{" "}
                    </h6>
                    <a href="/blog-details">
                      {" "}
                      <i className="far fa-calendar" /> May 20, 2024
                    </a>
                  </div>
                </article>
              </div>
              {/* Popular Feed End */}
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
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/1.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Mahashivratri Temple</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/1.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/2.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Varanasi At Night</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/2.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/3.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">OM Mahashivratri</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/1.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/4.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Chaar Dhaam Yatra</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/1.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/5.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Mahashivratri</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/2.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/6.html" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Jagannath Yatra</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/1.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/7.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Ramleela</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/1.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
              {/* Article Start */}
              <div className="col-md-6">
                <article className="sigma_post">
                  <div className="sigma_post-thumb">
                    <a href="/blog-details">
                      <img src="assets/img/blog/8.jpg" alt="post" />
                    </a>
                  </div>
                  <div className="sigma_post-body">
                    <div className="sigma_post-meta">
                      <div className="me-3">
                        <i className="fas fa-om" />
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Temple
                        </a>
                        ,
                        <a
                          href="/blog-details"
                          className="sigma_post-category"
                        >
                          Love
                        </a>
                      </div>
                      <a href="/blog-details" className="sigma_post-date">
                        {" "}
                        <i className="far fa-calendar" /> May 20, 2024
                      </a>
                    </div>
                    <h5>
                      {" "}
                      <a href="/blog-details">Kumbh Mela</a>{" "}
                    </h5>
                    <div className="sigma_post-single-author">
                      <img src="assets/img/people/2.jpg" alt="author" />
                      <div className="sigma_post-single-author-content">
                        By <p>Yesh Chopra</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* Article End */}
            </div>
            {/* Pagination Start */}
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-left" />{" "}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-right" />{" "}
                </a>
              </li>
            </ul>
            {/* Pagination End */}
          </div>
        </div>
      </div>
    </div>
    {/* partial:partia/__footer.html */}
  </>
  
  )
}
