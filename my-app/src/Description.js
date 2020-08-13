import React from 'react';
import defaultImg from './img/bird1.jpg';
import Audio from './Audio';

function Description() {
  return (
    <div className="description">
    <div className="wrapper">
      <div className="column-2">
        <div className="description__image">
          <img src={defaultImg} alt="bird"/>
        </div>
        <div className="description__name">
          <h3 className="description__bird-name">Журавль</h3>
          <div className="description__audio-player">
            <Audio/>
          </div>
        </div>
      </div>
      <div className="description__info">
          Дрозд — лучший певец из отряда воробьиных. 
          Песня состоит только из красивых звучных свистов 
          и коротких трелей. Чаще всего её можно услышать в 
          утреннее и вечернее время. Поют дрозды в течении 
          всего периода гнездования.
      </div>   
    </div>
  </div>
  )
}

export default Description;