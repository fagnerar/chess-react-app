import React, { useState } from 'react';

import Square from './Square/Square';

import initialPositions from '../../../utilities/initialPiecesPositions';
import { ReactComponent as ChessSprites } from '../../../resources/chess-pieces.svg';

import './Squares.css'

const Squares = () => {
  const [pieces, setPieces] = useState(initialPositions);
  const [positionSelected, setPositionSelected] = useState(null);

  const squares = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


  const getLetterNumber = (index) => {
    const num = index < 8
      ? 8 : index < 16
        ? 7 : index < 24
          ? 6 : index < 32
            ? 5 : index < 40
              ? 4 : index < 48
                ? 3 : index < 56
                  ? 2 : index < 64
                    ? 1 : 0;

    const letter = letters[index - (8 * (8 - num))];
    return [letter, num];
  }

  const createSquares = () => {
    for (let i = 0; i < 64; i++) {
      const p = getLetterNumber(i);
      const evenLine = p[1] % 2 === 0;
      const isDark = (evenLine && i % 2 === 1) || (!evenLine && i % 2 === 0);
      const position = p[0] + p[1];
      const pieceType = pieces[position];

      const isSelected = position === positionSelected;

      squares.push(
        <Square key={position}
          isDark={isDark}
          isSelected={isSelected}
          position={position}
          pieceType={pieceType}
          clicked={() => {
            return pieceType
              ? clickHandler(position)
              : null
          }} />
      );
      console.log(squares.length);
    }

    return squares;
  }

  const clickHandler = (position) => {
    setPositionSelected(position === positionSelected ? null : position);
  }

  return (
    <section className="Squares">
      <ChessSprites />
      {createSquares()}
    </section>
  );
}

export default Squares;