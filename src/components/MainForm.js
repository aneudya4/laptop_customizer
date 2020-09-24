import React from 'react';
import FeaturesList from './FeaturesList';

export default ({ USCurrencyFormat, selected, updateFeature }) => {
  return (
    <form className='main__form'>
      <FeaturesList
        selected={selected}
        USCurrencyFormat={USCurrencyFormat}
        updateFeature={updateFeature}
      />
    </form>
  );
};
