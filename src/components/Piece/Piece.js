import React from 'react';

import Sprite from '../Sprite/Sprite'

import './Piece.css';

const Piece = ({ type, position }) => {
  return (
    <button className="Piece">
      <Sprite type={type} />
    </button>
  );
}

export default Piece;