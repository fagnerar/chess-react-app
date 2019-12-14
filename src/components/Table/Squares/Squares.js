import React from 'react';

import Icons from '../../Icons/Icons'

import './Squares.css'

const Squares = () => {
  const squares = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const getSquarePosition = (index) => {
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
      const position = getSquarePosition(i);
      const evenLine = position[1] % 2 === 0;
      const darkSquare = (evenLine && i % 2 === 1) || (!evenLine && i % 2 === 0);

      const classes = darkSquare ? 'sq dark' : 'sq';

      squares.push(
        <div className={classes}
          key={position[0] + position[1]}>
          <Icons />
        </div>
      );
    }

    return squares;
  }


  return (
    <section className="Squares">
      {createSquares()}
    </section>
  );
}

export default Squares;