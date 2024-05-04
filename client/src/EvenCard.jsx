import React from "react";

const EvenCard = ({ title, description, icon }) => {
  return (
    <div className="service-card service-card-right">
      
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
      <img
        src={icon}
        alt={title}
        className="service-image"
      />
    </div>
  );
};

export default EvenCard;
