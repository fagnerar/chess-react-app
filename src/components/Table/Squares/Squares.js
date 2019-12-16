import React, { useState } from 'react';

import Square from './Square/Square';

import initialPositions from '../../../utilities/initialPiecesPositions';
import { ReactComponent as ChessSprites } from '../../../resources/chess-pieces.svg';

import './Squares.css'

const Squares = () => {
  const squares = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const [pieces, setPieces] = useState(initialPositions);

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

      squares.push(
        <Square key={position}
          isDark={isDark}
          position={position}
          pieceType={pieceType} />
      );
    }

    return squares;
  }


  return (
    <section className="Squares">
      <ChessSprites />
      {createSquares()}
    </section>
  );
}

export default Squares;