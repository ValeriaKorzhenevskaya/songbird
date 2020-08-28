import React from 'react';
import Audio from './Audio';

class Description extends React.Component {

  render() {
    return (
      <div className="description">
      <div className="wrapper">
        <div className="column-2">
          <div className="description__image">
            {this.props.activeBird === undefined ? '' : <img src={this.props.activeBird.image} alt="bird"/>}
          </div>
          <div className="description__name">
            <h3 className="description__bird-name">
              {this.props.activeBird === undefined ? "Выберите птицу" : this.props.activeBird.name}
            </h3>
            <h6 className="description__bird-species">
              {this.props.activeBird === undefined ? "" : this.props.activeBird.species}
            </h6>
            <div className="description__audio-player">
              {this.props.activeBird === undefined ? '' : <Audio source={this.props.activeBird.audio}/>}
            </div>
          </div>
        </div>
        <div className="description__info">{this.props.activeBird === undefined ? "" : this.props.activeBird.description}</div>   
      </div>
    </div>
    )
  }
  
}

export default Description;