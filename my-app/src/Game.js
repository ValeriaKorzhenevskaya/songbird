import React from 'react';
import Categories from './Categories';
import Question from './Question';
import Options from './Options';
import Description from './Description';

function Game() {
  return (
    <div className="game">
      <div className="header">
        <div className="wrapper">
          <div className="header__inner">
            <h1 className="heading">Songbird</h1>
            <div className="score">Score:</div>
          </div>
          <Categories/>
        </div>
      </div>

      <Question/>

      <div className="control-block">
        <div className="column-2">
          <Options/>
          <Description/>
        </div>
      </div>

      <div className="button next-level-button">Next Level</div>
    </div>
    
  )
}

export default Game;