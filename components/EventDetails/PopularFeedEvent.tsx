import React from 'react'

export default function PopularFeedEvent() {
  return (
    <div className="sidebar-widget widget-recent-posts widget widget-speakers">
    <h5 className="widget-title">Speakers</h5>
    <div className="accordion" id="generalFAQExample">
      <div className="card">
        <div
          className="card-header"
          data-bs-toggle="collapse"
          role="button"
          data-bs-target="#generalOne"
          aria-expanded="true"
          aria-controls="generalOne"
        >
          <article className="sigma_recent-post">
            <div className="speaker-image">
              <img
                src="assets/img/volunteers/speakers/1.jpg"
                alt="post"
              />
            </div>
            <div className="sigma_recent-post-body">
              <h6> Thomas Taylor</h6>
              <p className="m-0">2:00 - 4:00 pm</p>
            </div>
          </article>
        </div>
        <div
          id="generalOne"
          className="collapse show"
          data-bs-parent="#generalFAQExample"
        >
          <div className="card-body">
            Temple is a place where Hindu worship our Bhagwan Ram,
            Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
            Vivamus magna justo, .People ask questions related to
            Hinduism
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header"
          data-bs-toggle="collapse"
          role="button"
          data-bs-target="#generaltwo"
          aria-expanded="true"
          aria-controls="generaltwo"
        >
          <article className="sigma_recent-post">
            <div className="speaker-image">
              <img
                src="assets/img/volunteers/speakers/2.jpg"
                alt="post"
              />
            </div>
            <div className="sigma_recent-post-body">
              <h6> Aaron Williams</h6>
              <p className="m-0">4:00 - 6:00 pm</p>
            </div>
          </article>
        </div>
        <div
          id="generaltwo"
          className="collapse"
          data-bs-parent="#generalFAQExample"
        >
          <div className="card-body">
            Temple is a place where Hindu worship our Bhagwan Ram,
            Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
            Vivamus magna justo, .People ask questions related to
            Hinduism
          </div>
        </div>
      </div>
      <div className="card">
        <div
          className="card-header"
          data-bs-toggle="collapse"
          role="button"
          data-bs-target="#generalthree"
          aria-expanded="true"
          aria-controls="generalthree"
        >
          <article className="sigma_recent-post">
            <div className="speaker-image">
              <img
                src="assets/img/volunteers/speakers/3.jpg"
                alt="post"
              />
            </div>
            <div className="sigma_recent-post-body">
              <h6> John Doe</h6>
              <p className="m-0">8:00 - 9:00 pm</p>
            </div>
          </article>
        </div>
        <div
          id="generalthree"
          className="collapse"
          data-bs-parent="#generalFAQExample"
        >
          <div className="card-body">
            Temple is a place where Hindu worship our Bhagwan Ram,
            Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
            Vivamus magna justo, .People ask questions related to
            Hinduism
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
