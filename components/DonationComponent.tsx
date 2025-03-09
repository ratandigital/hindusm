"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import Popovers from "./Popovers";

const DonationSection = () => {
  const [prov, setProv] = useState(false); // Fixed the state variable name

  useEffect(() => {
    $(".sigma_progress").each(function () {
      const progressBar = $(this).find(".progress-bar");
      $(progressBar).one("inview", function (event, isInView) {
        if (isInView) {
          $(progressBar).animate(
            { width: $(progressBar).attr("aria-valuenow") + "%" },
            1000
          );
        }
      });
    });
  }, []);

  const handleProvFun = () => setProv(true); // Renamed function to avoid conflict with the state variable name
  const handleProvOut = () => setProv(false); // Renamed function to avoid conflict with the state variable name

  return (
    <div className="section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <p className="subtitle" onMouseOver={handleProvFun} onMouseOut={handleProvOut}>Make a Donation</p>
          {prov && <Popovers />}
          <h4 className="title">Donate Us To Help</h4>
        </div>
        <div className="row">
          {donations.map((donation, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  <img src={donation.image} alt="img" />
                </div>
                <div className="sigma_service-body">
                  <h5>
                    <a href="donation.html">{donation.title}</a>
                  </h5>
                  <p>{donation.description}</p>
                  <div className="sigma_service-progress">
                    <div className="progress-content">
                      <p>Raised: ${donation.raised.toLocaleString()}</p>
                      <p>Goal: ${donation.goal.toLocaleString()}</p>
                    </div>
                    <div className="sigma_progress">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={donation.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: `${donation.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <a href="donation.html" className="sigma_btn-custom">
                    Donate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const donations = [
  {
    title: "Protecting Children",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    image: "assets/img/donation/5.jpg",
    raised: 52384,
    goal: 85000,
    progress: 84,
  },
  {
    title: "Donate NGOs",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    image: "assets/img/donation/6.jpg",
    raised: 49444,
    goal: 78000,
    progress: 65,
  },
  {
    title: "Feed Poors",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    image: "assets/img/donation/7.jpg",
    raised: 78334,
    goal: 96400,
    progress: 94,
  },
];

export default DonationSection;
