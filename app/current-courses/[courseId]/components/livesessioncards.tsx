import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  {
    id: 1,
    title: "Live Session - Intermediate",
    heading: "Modernizing ABAP Code",
    description: "This live session will show how to transform your legacy ABAP code based on clean core principles."
  },
  {
    id: 2,
    title: "Live Session - Beginner",
    heading: "Introduction to ABAP",
    description: "A beginner's guide to ABAP, covering the fundamentals to get you started with SAP programming."
  },
  {
    id: 3,
    title: "Live Session - Advanced",
    heading: "Optimizing ABAP Performance",
    description: "Learn advanced techniques to optimize the performance of your ABAP programs for maximum efficiency."
  }
];

function LiveSectionCards() {
  return (
    <div className="live-session-cards">
      <div className="container">
        <h1 id='related-live-session-heading'>Related live sessions</h1>
        <div className="row">
          {cardData.map((card) => (
            <div className="col-md-4" key={card.id}>
              <div className="card">
                <div className="card-body mt-3">
                  <h5 className="card-title">
                    <b>{card.title.split(" - ")[0]}</b> - <span>{card.title.split(" - ")[1]}</span>
                  </h5>
                  <h1 className="card-text">{card.heading}</h1>
                  <p>{card.description}</p>
                  <button className="btn mt-5">Get Started</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveSectionCards;
