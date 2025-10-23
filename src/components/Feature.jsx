
import React from 'react';
import { Col } from 'react-bootstrap';

const Feature = ({ icon, title, children }) => {
  return (
    <Col md={4} className="mb-4">
      <div className="text-center">
        <div className="mb-3">
          <img src={icon} alt={title} style={{ height: '50px' }} />
        </div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </Col>
  );
};

export default Feature;
