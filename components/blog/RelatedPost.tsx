import React from 'react'

export default function RelatedPost() {
  return (
    <div className="section">
    <h5>Related Posts</h5>
    <div className="row">
      {/* Article Start */}
      <div className="col-md-6">
        <article className="sigma_post">
          <div className="sigma_post-thumb">
            <a href="blog-details.html">
              <img src="assets/img/blog/details/4.jpg" alt="post" />
            </a>
          </div>
          <div className="sigma_post-body">
            <div className="sigma_post-meta">
              <a href="blog-details.html" className="sigma_post-date">
                {" "}
                <i className="far fa-calendar" /> May 20, 2024
              </a>
            </div>
            <h5>
              {" "}
              <a href="blog-details.html">
                Education for all rural children are necessary.
              </a>{" "}
            </h5>
            <p>
              I Will Not Reject My Faith in Rama, Shiva, Vishnu,
              Krishna etc.
            </p>
          </div>
        </article>
      </div>
      {/* Article End */}
      {/* Article Start */}
      <div className="col-md-6">
        <article className="sigma_post">
          <div className="sigma_post-thumb">
            <a href="blog-details.html">
              <img src="assets/img/blog/details/5.jpg" alt="post" />
            </a>
          </div>
          <div className="sigma_post-body">
            <div className="sigma_post-meta">
              <a href="blog-details.html" className="sigma_post-date">
                {" "}
                <i className="far fa-calendar" /> May 20, 2024
              </a>
            </div>
            <h5>
              {" "}
              <a href="blog-details.html">
                Ensure child safety &amp; health in World.
              </a>{" "}
            </h5>
            <p>
              I Will Not Reject My Faith in Rama, Shiva, Vishnu,
              Krishna etc.
            </p>
          </div>
        </article>
      </div>
      {/* Article End */}
    </div>
  </div>
  )
}
