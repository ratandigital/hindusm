import React from 'react'

export default function ProductSidebar() {
  return (
    <div className="col-lg-4">
    <div className="sidebar">
      {/* Search Start */}
      <div className="sidebar-widget widget-search">
        <h6 className="widget-title">Search</h6>
        <form method="post">
          <div className="sigma_search-adv-input">
            <input
              type="text"
              className="form-control"
              placeholder="Look for Products"
              name="search"
              defaultValue=""
            />
            <button type="submit" name="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
      {/* Search End */}
      {/* Filter: Price Start */}
      <div className="sidebar-widget">
        <h5 className="widget-title"> Price </h5>
        <input
          type="text"
          className="js-range-slider"
          name="freshness_range"
          defaultValue=""
          data-type="double"
          data-min={0}
          data-max={500}
          data-from={10}
          data-to={100}
          data-grid="true"
          data-postfix=" $"
        />
      </div>
      {/* Filter: Price End */}
      {/* Tags Start */}
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
        </ul>
      </div>
      {/* Tags End */}
      {/* Ad banner Start */}
      <div className="sidebar-widget widget-ad p-0 border-0">
        <a href="#">
          <img src="assets/img/blog/ad2.jpg" alt="ad" />
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
