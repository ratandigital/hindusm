import React from 'react'

export default function PopularFeed() {
  return (
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
  )
}
