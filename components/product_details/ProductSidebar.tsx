import React from 'react'

export default function ProductSidebar() {
  return (
    <div className="col-lg-4">
    <div className="sidebar">
      {/* Categories */}
      <div className="sidebar-widget widget-categories">
        <h5 className="widget-title">Our Categories</h5>
        <ul className="sidebar-widget-list">
          {[{ name: "Avatars", count: 32 }, { name: "Festivals", count: 22 }, { name: "Mahabharat", count: 17 }, { name: "Mythology", count: 5 }].map((category) => (
            <li key={category.name}>
              <a href="#">{category.name} <span>{category.count}</span></a>
            </li>
          ))}
        </ul>
      </div>
      {/* Price Filter */}
      <div className="sidebar-widget">
        <h5 className="widget-title">Price</h5>
        <input
          type="text"
          className="js-range-slider"
          name="freshness_range"
          data-type="double"
          data-min={0}
          data-max={500}
          data-from={10}
          data-to={100}
          data-grid="true"
          data-postfix=" $"
        />
      </div>
    </div>
  </div>
  )
}
