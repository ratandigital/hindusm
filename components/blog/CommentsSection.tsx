import React from 'react'

export default function CommentsSection() {
  return (
<>
<div className="section">
              <h5>03 Comments</h5>
              <div className="comments-list">
                <ul>
                  <li className="comment-item">
                    <img
                      src="assets/img/blog/details/7.jpg"
                      alt="comment author"
                    />
                    <div className="comment-body">
                      <h5>Robert John</h5>
                      <span>
                        {" "}
                        <i className="far fa-clock" /> January 13 2024
                      </span>
                      <p>
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foster collaborative thinking to
                        further the overall value proposition.
                      </p>
                      <a href="#" className="btn-link">
                        {" "}
                        Reply <i className="far fa-reply" />{" "}
                      </a>
                    </div>
                  </li>
                  <li className="comment-item">
                    <img
                      src="assets/img/blog/details/8.jpg"
                      alt="comment author"
                    />
                    <div className="comment-body">
                      <h5>Christine Hill</h5>
                      <span>
                        {" "}
                        <i className="far fa-clock" /> December 27 2024
                      </span>
                      <p>
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches
                      </p>
                      <a href="#" className="btn-link">
                        {" "}
                        Reply <i className="far fa-reply" />{" "}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section">
              <h5>Leave a Comment</h5>
              <div className="comment-form">
                <form method="post">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Enter your Message"
                      name="comment"
                      rows={7}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <i className="far fa-user custom-primary" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                      name="fname"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <i className="far fa-envelope custom-primary" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      name="email"
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <i className="far fa-globe custom-primary" />
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                      name="website"
                      defaultValue=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="sigma_btn-custom"
                    name="button"
                  >
                    Post Comment <i className="far fa-comments" />{" "}
                  </button>
                </form>
              </div>
            </div>
</>
  )
}
