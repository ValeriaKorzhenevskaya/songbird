import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: false
    }
  }

  render() {
    return (
    <audio controls className="player" preload="false">
      <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
    </audio>
    );
  }
}

export default Audio;
