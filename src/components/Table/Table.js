import React from 'react';

import Squares from './Squares/Squares'

import './Table.css';

const Table = () => {
  return (
    <section className="Table">
      <section className="frame">
        <div className="letters">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>F</div>
          <div>G</div>
          <div>H</div>
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <Squares />
      </section>
    </section>
  );
}

export default Table;