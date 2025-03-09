import React from 'react'

export default function EventCategory() {
  return (
    <div className="sidebar-widget widget-upcoming-events">
    <h5 className="widget-title"> Upcoming Donation </h5>
    <ul>
      <li>
        <div className="date">
          <span>20</span>
          Aug'21
        </div>
        <div className="event-name">
          <h6>Weekly Evening Prayer</h6>
          <p>Wednesday | 6:00 pm</p>
        </div>
      </li>
      <li>
        <div className="date">
          <span>12</span>
          Sep'21
        </div>
        <div className="event-name">
          <h6>Staff Members Meet</h6>
          <p>Thursday | 8:00 pm</p>
        </div>
      </li>
      <li>
        <div className="date">
          <span>20</span>
          Nov'15
        </div>
        <div className="event-name">
          <h6>Weekly Evening Prayer</h6>
          <p>Monday | 4:00 pm</p>
        </div>
      </li>
    </ul>
    <div className="text-center">
      <a href="events.html" className="sigma_btn-custom mt-4">
        See All
      </a>
    </div>
  </div>
  )
}
