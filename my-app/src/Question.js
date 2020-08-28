import React from 'react';
import defaultImg from './img/bird1.jpg';
import Audio from './Audio';

class Question extends React.Component {
  render() {
    const selectedBird = this.props.selectedBird

    return (
      <div className="current-question">
          <div className="wrapper">
            <div className="current-question__column">
              <div className="current-bird__image">
                <img src={this.props.isCorrect ? selectedBird.image : defaultImg} alt="bird"/>
              </div>
              <div className="current-bird__info">
                <h3 className="bird-name">{this.props.isCorrect ? selectedBird.name : "*****"}</h3>
                <div className="audio-player">
                  <Audio source={selectedBird.audio}/>
                </div>
              </div>
            </div> 
          </div>
      </div>
    )
  }
}

export default Question;