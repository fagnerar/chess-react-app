import React from 'react';

import './Sprite.css';

const Sprite = ({ type }) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
}

export default Sprite;