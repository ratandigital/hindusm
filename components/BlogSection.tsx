import React from 'react'
import SideNavebar from './SideNavebar'

export default function BlogSection() {
  return (
    <div className="section section-padding">
    <div className="container">
      <div className="section-title text-center">
        <p className="subtitle">Blog</p>
        <h4 className="title">News Feed</h4>
      </div>
      <div className="row">
        {/* Article Start */}
        <div className="col-lg-4 col-md-6">
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
                  <a href="/blog-details" className="sigma_post-category">
                    Temple
                  </a>
                  ,
                  <a href="/blog-details" className="sigma_post-category">
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
                <a href="/blog-details">
                  Temple companies are being so transparent with their work
                </a>{" "}
              </h5>
              <div className="sigma_post-single-author">
                <img src="assets/img/people/1.jpg" alt="author" />
                <div className="sigma_post-single-author-content">
                  By <p>Miha Boukor</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* Article End */}
        {/* Article Start */}
        <div className="col-lg-4 col-md-6">
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
                  <a href="/blog-details" className="sigma_post-category">
                    Temple
                  </a>
                  ,
                  <a href="/blog-details" className="sigma_post-category">
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
                <a href="/blog-details">
                  How to abide by Puja rules without any risks
                </a>{" "}
              </h5>
              <div className="sigma_post-single-author">
                <img src="assets/img/people/2.jpg" alt="author" />
                <div className="sigma_post-single-author-content">
                  By <p>Aime Bill</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* Article End */}
        {/* Article Start */}
        <div className="col-lg-4 col-md-6">
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
                  <a href="/blog-details" className="sigma_post-category">
                    Temple
                  </a>
                  ,
                  <a href="/blog-details" className="sigma_post-category">
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
                <a href="/blog-details">
                  Education for all rural children are necessary.
                </a>{" "}
              </h5>
              <div className="sigma_post-single-author">
                <img src="assets/img/people/1.jpg" alt="author" />
                <div className="sigma_post-single-author-content">
                  By <p>Yesh Chopra</p>
                </div>/blog-details
              </div>
            </div>
          </article>
        </div>
        {/* Article End */}
      </div>
    </div>
    <div className="spacer spacer-bottom spacer-lg light-bg pattern-triangles" />

  </div>

  )
}
