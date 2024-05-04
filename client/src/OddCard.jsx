import React from "react";

const OddCard = ({ title, description, icon }) => {
  return (
    <div className="service-card service-card-left">
        <img
        src={icon}
        alt={title}
        className="service-image"
      />
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default OddCard;
