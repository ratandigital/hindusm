import React from 'react';

interface SubHeaderProps {
  title: string;
}

export default function SubHeader({ title }: SubHeaderProps) {
  return (
    <>
      {/* partial:partia/__subheader.html */}
      <div
        className="sigma_subheader dark-overlay dark-overlay-2"
        style={{ backgroundImage: "url(assets/img/subheader.jpg)" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <div className="sigma_subheader-text">
              <h1>{title}</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="btn-link" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* partial */}
    </>
  );
}
