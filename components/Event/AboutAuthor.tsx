import React from 'react'

export default function AboutAuthor() {
  return (
    <div className="sidebar-widget widget-about-author">
    <h5 className="widget-title">About Me</h5>
    <div className="widget-about-author-inner">
      <img src="assets/img/blog/author.jpg" alt="author" />
      <h5>Rosalina D. Willaimson</h5>
      <p>
        "Praesent sapien massa, convallis a pellentesque nec, egestas
        non nisi. Donec sollicitudin molestie malesuada. Mauris blandit
        aliquet elit"
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
  )
}
