import React from 'react';

const ServiceCardLeft = ({ title, description, icon }) => {
  return (
    <div className="service-card-left">
      <img src={icon} alt={title} className="service-image" />
      <h3>{title}</h3>
      <div className="service-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCardLeft;
