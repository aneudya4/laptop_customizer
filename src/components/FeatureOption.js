import React from 'react';
import slugify from 'slugify';

const FeatureOption = ({
  feature,
  features,
  selected,
  updateFeature,
  USCurrencyFormat,
}) => {
  const options = features[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className='feature__item'>
        <input
          type='radio'
          id={itemHash}
          className='feature__option'
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className='feature__label'>
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
  return <>{options}</>;
};

export default FeatureOption;
