import React from 'react';
import correctAudio from './audio/correct.mp3';
import incorrectAudio from './audio/incorrect.mp3';
import classNames from "classnames";

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.correctAudio = new Audio(correctAudio);
    this.incorrectAudio = new Audio(incorrectAudio);
  }

  handleClick(answer, e) {
    this.props.updateActiveBird(answer)
    if (this.props.selectedBird === answer) {
      this.correctAudio.play();
      this.props.isCorrectOnChange(true)
      const arr = this.props.checkboxs.filter((item) => item === false);
      const mark = this.props.score + arr.length;
      this.props.updateScore(mark);
    } else {
      this.incorrectAudio.play();
    }
  }
  
  render() {
    const answers = this.props.answers;
    const listAnswers = answers.map((answer) => 
      <li onClick={(e) => {this.handleClick(answer, e)}} className="possible-answer" key={answer.id.toString()}>
        <span className={classNames(
            "checkbox",
            {
              correctly:
              answer === this.props.selectedBird && this.props.checkboxs[answer.id - 1]
            },
            {
              incorrectly:
              answer !== this.props.selectedBird && this.props.checkboxs[answer.id - 1]
            }
          )}></span>
        {answer.name}
      </li>
    );
    return (
      <div className="options">
        <div className="wrapper">
          <ul className="item-list">
            {listAnswers}
          </ul>
        </div>
      </div>
    )
  }
}

export default Options;