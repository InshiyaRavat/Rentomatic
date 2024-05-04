import React from 'react';

const ServiceCardRight = ({ title, description, icon }) => {
  return (
    <div className="service-card-right">
      <img src={icon} alt={title} className="service-image" />
      <h3>{title}</h3>
      <div className="service-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCardRight;
