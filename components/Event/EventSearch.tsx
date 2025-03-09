import React from 'react'

export default function EventSearch() {
  return (
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
  )
}
