import React from 'react';
import './FeatureHeader.css';
const FeatureHeader = ({ feature }) => {
  return (
    <legend className='feature__name'>
      <h3>{feature}</h3>
    </legend>
  );
};

export default FeatureHeader;
