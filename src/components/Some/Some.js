import './Some.scss';

import React from 'react';

const urls = {
  github: 'https://github.com/onzfonz',
  youtube: 'https://www.youtube.com/channel/UCqQWXa8a1oClAo8Kcc3Q2uA/',
};

export const Some = ({ iconName }) => (
  <a target="__blank" href={urls[iconName]} className="some-logo__link">
    <img
      className="some-logo__image"
      alt={iconName}
      src={require(`../../images/some-logo__${iconName}.svg`)}
    />
  </a>
);
