import React from 'react'

export default function AboutSidebar() {
  return (
    <div className="sidebar-widget event-info">
    <h5 className="widget-title"> Information </h5>
    <ul className="sidebar-widget-list">
      <li>
        <span>Date:</span> 25 September, 2018
      </li>
      <li>
        <span>Time:</span> (8:00 am - 9:00 am)
      </li>
      <li>
        <span>Event Category:</span> Temple
      </li>
      <li>
        <span>Organizer:</span> Event Planer
      </li>
      <li>
        <span>Phone:</span> +02 1565 1236
      </li>
      <li>
        <span>Email:</span> supportmail@gmail.com
      </li>
    </ul>
    <a href="#" className="sigma_btn-custom d-block w-100 mt-4">
      Book Now
    </a>
  </div>
  )
}
