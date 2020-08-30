import React from 'react';


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxScore: 30,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startNewGame()
  }

  render() {
    return (
      <div className={this.props.endOfTheGame ? "modal" : "modal none"}>
        <div className="wrapper">
          <h1 className="modal__title">ПОЗДРАВЛЯЕМ!</h1>
          <h2 className="modal__text">Вы набрали {this.props.score} из {this.state.maxScore} баллов</h2>
          <div className="modal__button">
            {this.props.score === this.state.maxScore ? "" : <button onClick={this.handleClick} className="button close-button">Новая игра</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;