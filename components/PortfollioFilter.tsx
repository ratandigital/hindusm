import React from 'react'

export default function PortfollioFilter() {
  return (
   <>
     <div className="text-center filter-items left">
        <h5 className="active portfolio-trigger" data-filter="*">
          All
        </h5>
        <h5 className="portfolio-trigger" data-filter=".coaching">
          Durga Puja
        </h5>
        <h5 className="portfolio-trigger" data-filter=".stakeholder">
          Raksha Bandhan
        </h5>
        <h5 className="portfolio-trigger" data-filter=".strategy">
          Holi
        </h5>
        <h5 className="portfolio-trigger" data-filter=".relations">
          Diwali
        </h5>
      </div>
      <div className="portfolio-filter row">
        <div className="col-lg-4 coaching">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/1.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Deepavali Diwalli </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 strategy">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/2.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Janmashtmi </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 coaching strategy">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/3.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Navarathri Celebrations </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 relations coaching">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/4.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Vinayaka Chathurthy </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 stakeholder">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/5.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Durga Mahastami </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 stakeholder">
          <div className="sigma_portfolio-item style-2">
            <img src="assets/img/puja/style-2/6.jpg" alt="portfolio" />
            <div className="sigma_portfolio-item-content">
              <div className="sigma_portfolio-item-content-inner">
                <h5>
                  {" "}
                  <a href="puja-details.html"> Holi-Colour Festival </a>{" "}
                </h5>
              </div>
              <a href="puja-details.html">
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
