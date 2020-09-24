import React from 'react';
import { FEATURES } from '../FeaturesObj';

import FeatureOption from './FeatureOption';
import FeatureHeader from './FeatureHeader';
import './Features.css';

export default (props) => {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <fieldset className='feature' key={featureHash}>
        <FeatureHeader feature={feature} />
        <FeatureOption
          features={FEATURES}
          feature={feature}
          selected={props.selected}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
        />
      </fieldset>
    );
  });
  return (
    <>
      <h2>Customize your laptop</h2>
      {features}
    </>
  );
};
