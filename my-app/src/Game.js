import React from 'react';
import Categories from './Categories';
import Question from './Question';
import Options from './Options';
import Description from './Description';
import dataBirds from './birds';
import Modal from './Modal';
import succesAudio from './audio/succes.mp3';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: getRandomIntInclusive(0, 5),
      score: 0,
      currentLevel: 0,
      isCorrect: false,
      activeBird: undefined,
      endOfTheGame: false,
      checkboxs: new Array(6).fill(false)
    };
    this.isCorrectOnChange = this.isCorrectOnChange.bind(this);
    this.updateActiveBird = this.updateActiveBird.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.updateScore = this.updateScore.bind(this)
    this.succesAudio = new Audio(succesAudio);
  }

  updateScore(mark) {
    this.setState({ score: mark});
  }

  isCorrectOnChange(value) {
    this.setState({ isCorrect: value });
  }

  updateActiveBird(value) {
    const {checkboxs} = this.state;
    if(!this.state.isCorrect){
      checkboxs[value.id - 1] = true;
    }
    this.setState({ activeBird: value, checkboxs: checkboxs });
  }

  buttonClick() {
    this.setState({
      currentLevel: this.state.currentLevel + 1,
      randomNumber: getRandomIntInclusive(0, 5),
      checkboxs: new Array(6).fill(false),
      isCorrect: false,
      activeBird: undefined
    });
  }

  openModal() {
    this.setState({
      endOfTheGame: true,
      currentLevel: 0,
      randomNumber: getRandomIntInclusive(0, 5),
      activeBird: undefined,
    });
    this.isCorrectOnChange(false);
    this.succesAudio.play();
  }

  startNewGame() {
    this.setState({ 
      endOfTheGame: false,
      score: 0, 
      checkboxs: new Array(6).fill(false),
    });
  }

  render() {
    return (
      <div className="game">
        <div className="header">
          <div className="wrapper">
            <div className="header__inner">
              <h1 className="heading">
                Song<span style={{ color: 'teal' }}>bird</span>
              </h1>
              <div className="score">Score: {this.state.score}</div>
            </div>
            <Categories currentLevel={this.state.currentLevel} />
          </div>
        </div>

        <div
          className={
            this.state.endOfTheGame ? 'game-controls none' : 'game-controls'
          }
        >
          <Question
            isCorrect={this.state.isCorrect}
            selectedBird={
              dataBirds[this.state.currentLevel][this.state.randomNumber]
            }
          />

          <div className="control-block">
            <div className="column-2">
              <Options
                checkboxs = {this.state.checkboxs}
                isCorrectOnChange={this.isCorrectOnChange}
                selectedBird={
                  dataBirds[this.state.currentLevel][this.state.randomNumber]
                }
                updateActiveBird={this.updateActiveBird}
                answers={dataBirds[this.state.currentLevel]}
                score={this.state.score}
                updateScore={this.updateScore}
              />
              <Description activeBird={this.state.activeBird} />
            </div>
          </div>

          <div
            onClick={
              this.state.currentLevel === 5 ? this.openModal : this.buttonClick
            }
            className={
              this.state.isCorrect
                ? 'button next-level-button active-btn'
                : 'button next-level-button'
            }
          >
            Next Level
          </div>
        </div>

        <Modal
          startNewGame={this.startNewGame}
          endOfTheGame={this.state.endOfTheGame}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default Game;
