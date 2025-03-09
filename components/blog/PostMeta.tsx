import React from 'react'

export default function PostMeta() {
  return (
    <div className="sigma_post-single-meta">
    <div className="sigma_post-single-meta-item">
      <h6>Tags</h6>
      <div className="tagcloud">
        <a href="#">Portfolio</a>
        <a href="#">Creative</a>
        <a href="#">Intuitive</a>
      </div>
    </div>
    <div className="sigma_post-single-meta-item sigma_post-share">
      <h6>Share</h6>
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
  )
}
