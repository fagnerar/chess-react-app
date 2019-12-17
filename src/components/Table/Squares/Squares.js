import React, { useState } from 'react';

import Square from './Square/Square';
import initialState from './initialState';

import './Squares.css'

const Squares = () => {
  const [squares, setSquares] = useState(initialState);
  const squareList = [];

  const clickHandler = (position) => {
    const sqs = {...squares};
    const positionIsSelected = sqs[position].isSelected;
    
    for (const pos in sqs) {
      sqs[pos].isSelected = false;
    }

    sqs[position].isSelected = !positionIsSelected;

    setSquares(sqs)
  }

  const renderSquareList = () => {
    for (let position in squares) {
      const sqInfo = squares[position];

      const squareComponent = <Square key={position}
        isSelected={sqInfo.isSelected}
        position={position}
        pieceType={sqInfo.piece}
        clicked={() => {
          return sqInfo.piece
            ? clickHandler(position)
            : null
        }} />;

      squareList.push(squareComponent);
    }

    return squareList;
  }

  return (
    <section className="Squares">
      {renderSquareList()}
    </section>
  );
}

export default Squares;