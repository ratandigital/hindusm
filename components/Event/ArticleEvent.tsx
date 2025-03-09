import React from 'react';

export default function ArticleEvent() {
  const events = [
    {
      img: "assets/img/events/1.jpg",
      date: "20",
      monthYear: "Aug'21",
      title: "People ask questions related to Hinduism",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      time: "Sunday (8:00 am -9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      img: "assets/img/events/2.jpg",
      date: "16",
      monthYear: "Sep'21",
      title: "Temple is a place where Hindu worship",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      time: "Sunday (8:00 am -9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      img: "assets/img/events/3.jpg",
      date: "20",
      monthYear: "Aug'21",
      title: "Should I Believe in Rebirth?",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      time: "Sunday (8:00 am -9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      img: "assets/img/events/4.jpg",
      date: "20",
      monthYear: "Apr'21",
      title: "Serving the needs of the Hindu Community is untram.",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      time: "Sunday (8:00 am -9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
    {
      img: "assets/img/events/2.jpg",
      date: "18",
      monthYear: "June'21",
      title: "Some Hindu teachers insist that believing in rebirth",
      description:
        "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
      time: "Sunday (8:00 am -9:00 am)",
      location: "56 Thatcher Avenue River Forest",
    },
  ];

  return (
    <>
      {events.map((event, index) => (
        <article key={index} className="sigma_post sigma_post-list event-list">
          <div className="sigma_post-thumb">
            <a href="/event-details">
              <img src={event.img} alt="post" />
            </a>
            <div className="event-date-wrapper">
              <span>{event.date}</span>
              {event.monthYear}
            </div>
          </div>
          <div className="sigma_post-body">
            <h5>
              <a href="/event-details">{event.title}</a>
            </h5>
            <p>{event.description}</p>
            <div className="sigma_post-meta">
              <a href="/event-details">
                <i className="far fa-clock" /> {event.time}
              </a>
              <a href="/event-details">
                <i className="far fa-map-marker-alt" /> {event.location}
              </a>
            </div>
            <div className="section-button d-flex align-items-center">
              <a href="/event-details" className="sigma_btn-custom">
                Join Now <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
