import React from 'react'
import EventContent from './EventContent'
import AboutSidebar from './AboutSidebar'
import PopularFeedEvent from './PopularFeedEvent'
import EventCategory from './EventCategory'
import SOcialEvent from './SOcialEvent'

export default function MainEventPage() {
  return (
    <>
    {/* Post Content Start */}
    <div className="section sigma_post-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
        <EventContent/>
          </div>
          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar">
              {/* About Author Start */}
         <AboutSidebar/>
              {/* About Author End */}
              {/* Popular Feed Start */}
        <PopularFeedEvent/>
              {/* Popular Feed End */}
              {/* Categories Start */}
      <EventCategory/>
              {/* Categories End */}
              {/* Social Media Start */}
         <SOcialEvent/>
              {/* Social Media End */}
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
    {/* Post Content End */}
  </>
  
  )
}
