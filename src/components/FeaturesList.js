import React from 'react';
import FeatureOption from './FeatureOption';
import FeatureHeader from './FeatureHeader';

export default (props) => {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

    return (
      <fieldset className='feature' key={featureHash}>
        <FeatureHeader feature={feature} />
        <FeatureOption
          features={props.features}
          feature={feature}
          selected={props.selected}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
        />
      </fieldset>
    );
  });

  return <>{features}</>;
};
