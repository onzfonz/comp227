import './Some.scss';

import React from 'react';

const urls = {
  github: 'https://github.com/onzfonz',
  youtube: 'https://www.youtube.com/channel/UCz0Tpo9Te7E4U6ukPU4aO1w',
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
