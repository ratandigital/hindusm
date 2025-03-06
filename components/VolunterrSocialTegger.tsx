'use client'
import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

const VolunterrSocialTegger = () => {
  useEffect(() => {
    // jQuery functionality to toggle visibility of social media icons
    $("a.trigger-volunteers-socials").on('click', function (e) {
      e.preventDefault();  // Prevent the default action
      $(this).closest('.sigma_sm').toggleClass('visible'); // Toggle the 'visible' class
    });

    // Clean up the event listener when the component unmounts
    return () => {
      $("a.trigger-volunteers-socials").off('click');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="col-lg-6">
      <div className="me-lg-30">
        <div className="row">
          {/* Volunteer 1 */}
          <div className="col-lg-6 col-md-6">
            <div className="sigma_volunteers volunteers-5">
              <div className="sigma_volunteers-thumb">
                <img src="assets/img/volunteers/1.jpg" alt="volunteers" />
                <ul className="sigma_sm">
                  <li>
                    <a href="#" className="trigger-volunteers-socials">
                      <i className="fal fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sigma_volunteers-body">
                <div className="sigma_volunteers-info">
                  <p>Temple Member</p>
                  <h5>
                    <a href="volunteer-detail.html">Yesh Chopra</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer 2 */}
          <div className="col-lg-6 col-md-6">
            <div className="sigma_volunteers volunteers-5">
              <div className="sigma_volunteers-thumb">
                <img src="assets/img/volunteers/2.jpg" alt="volunteers" />
                <ul className="sigma_sm">
                  <li>
                    <a href="#" className="trigger-volunteers-socials">
                      <i className="fal fa-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sigma_volunteers-body">
                <div className="sigma_volunteers-info">
                  <p>Temple Member</p>
                  <h5>
                    <a href="volunteer-detail.html">Mukesh Singh</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunterrSocialTegger;
