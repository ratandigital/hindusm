import React from 'react'
import Product from './Product'
import ProductSidebar from './ProductSidebar'

export default function MainShop() {
  return (
    <>
    {/* Products Start */}
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
           <Product/>
            {/* Pagination Start */}
            <ul className="pagination">
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
            </ul>
            {/* Pagination End */}
          </div>
          {/* Sidebar Start */}
       <ProductSidebar/>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
    {/* Products End */}
  </>
  
  )
}
