import React from 'react';

const events = [
  { id: 1, image: '1.jpg', subtitle: 'Latest Holis', title: 'Holi- The Colour Festival', link: '/holi-details' },
  { id: 2, image: '2.jpg', subtitle: 'Chaar Dhaam', title: 'Chaar Dhaam Yatra', link: '/holi-details' },
  { id: 3, image: '3.jpg', subtitle: 'Diwali', title: 'Deepawali', link: '/holi-details' },
  { id: 4, image: '4.jpg', subtitle: 'Dusseshra', title: 'Durga Puja', link: '/holi-details' },
  { id: 5, image: '5.jpg', subtitle: 'RamNavmi', title: 'Janmashtami', link: '/holi-details' },
  { id: 6, image: '6.jpg', subtitle: 'Basaant Panchami', title: 'Basaant Panchami', link: '/holi-details' },
];

export default function MainHoli() {
  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            {events.map(event => (
              <div className="col-lg-6" key={event.id}>
                <div className="sigma_sermon-box">
                  <div className="sigma_sermon-image">
                    <img src={`assets/img/holi/${event.image}`} alt="holi" />
                  </div>
                  <div className="sigma_box">
                    <span className="subtitle">{event.subtitle}</span>
                    <h4 className="title mb-0">
                      <a href={event.link}>{event.title}</a>
                    </h4>
                    <ul className="sigma_sermon-info mb-0">
                      <li>
                        <i className="far fa-user" />
                        Message From
                        <a href="#" className="ms-2">
                          <u>Yeshvant Parsad</u>
                        </a>
                      </li>
                      <li className="mt-0 ms-4">
                        <i className="far fa-calendar-check" />
                        Aug 12, 2024
                      </li>
                    </ul>
                    <ul className="sigma_sm square">
                      <li><a href="#"><i className="fas fa-music" /></a></li>
                      <li><a href="#"><i className="fab fa-youtube" /></a></li>
                      <li><a href="#"><i className="far fa-file-pdf" /></a></li>
                      <li><a href="#"><i className="fas fa-share-alt" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination mb-0">
            <li className="page-item"><a className="page-link" href="#"><i className="far fa-chevron-left" /></a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#"><i className="far fa-chevron-right" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
