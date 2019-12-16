import React from 'react';

import Sprite from '../Sprite/Sprite'

import './Piece.css';

const Piece = ({ type }) => {
  return (
    <div className="Piece">
      <Sprite type={type} />
    </div>
  );
}

export default Piece;