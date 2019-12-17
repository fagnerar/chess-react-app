import React from 'react';

import Sprite from '../../../Sprite/Sprite';

import './Square.css';

const Square = ({ isSelected, clicked, position, pieceType }) => {
  const classes = new Array(3);
  classes.push('sq');
  classes.push(isSelected ? 'selected' : null);

  const chessPiece = pieceType
    ? <Sprite type={pieceType} />
    : null;

  return (
    <button className={classes.join(' ').trim()}
      position={position}
      onClick={() => clicked(position)}
    >
      {chessPiece}
    </button>
  );
}

export default Square;