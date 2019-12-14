import React from 'react';

import { ReactComponent as IconSprites } from '../../resources/chess-pieces.svg';

import './Icons.css';

const Icons = () => {
  return (
    <React.Fragment>
      <IconSprites />
      <svg className="icon">
        <use xlinkHref="#icon-b-queen" />
      </svg>
    </React.Fragment>
  );
}

export default Icons;