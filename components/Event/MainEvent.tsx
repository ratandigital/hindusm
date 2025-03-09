import React from 'react'
import ArticleEvent from './ArticleEvent'
import AboutAuthor from './AboutAuthor'
import EventSearch from './EventSearch'
import PopularFeed from './PopularFeed'
import CategoriesEvent from './CategoriesEvent'
import EventFeed from './EventFeed'
import AdBanner from './AdBanner'
import PopularTag from './PopularTag'

export default function MainEvent() {
  return (
    <div className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        {/* Article Start */}
     <ArticleEvent/>
        {/* Article End */}
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
      <div className="col-lg-4">
        <div className="sidebar">
          {/* About Author Start */}
    <AboutAuthor/>
          {/* About Author End */}
          {/* Search Widget Start */}
     <EventSearch/>
          {/* Search Widget End */}
          {/* Popular Feed Start */}
      <PopularFeed/>
          {/* Popular Feed End */}
          {/* Categories Start */}
      <CategoriesEvent/>
          {/* Categories End */}
       <EventFeed/>
          <PopularTag/>
          {/* Popular Tags End */}
          {/* Ad banner Start */}
        <AdBanner/>
          {/* Ad banner End */}
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
