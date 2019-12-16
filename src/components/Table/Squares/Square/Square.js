import React from 'react';

import Piece from '../../../Piece/Piece';

import './Square.css';

const Square = ({ isDark, position, pieceType }) => {
  const classes = isDark ? 'sq dark' : 'sq';

  const chessPiece = pieceType
    ? <Piece type={pieceType} position={position} />
    : null;

  return (
    <div className={classes} position={position}>
      {chessPiece}
    </div>
  );
}

export default Square;