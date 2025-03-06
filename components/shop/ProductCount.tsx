import React from 'react'

export default function ProductCount() {
  return (
    <div className="sigma_shop-global">
    <p>
      Showing <b>20</b> of <b>320</b> products{" "}
    </p>
    <form method="post">
      <select className="form-control" name="orderby">
        <option value="default">Default sorting</option>
        <option value="latest">Latest release</option>
        <option value="price-down">Price: High - Low</option>
        <option value="price-up">Price: Low - High</option>
        <option value="popularity">Popularity Sorting</option>
      </select>
    </form>
  </div>
  )
}
