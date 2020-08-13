import React from 'react';

function Options() {
  return (
    <div className="options">
      <div className="wrapper">
        <ul className="item-list">
          <li className="possible-answer"><span className="checkbox correctly"></span>Синица</li>
          <li className="possible-answer"><span className="checkbox"></span>Кукушка</li>
          <li className="possible-answer"><span className="checkbox incorrectly"></span>Журавль</li>
          <li className="possible-answer"><span className="checkbox"></span>Ласточка</li>
          <li className="possible-answer"><span className="checkbox"></span>Ворон</li>
          <li className="possible-answer"><span className="checkbox"></span>Сойка</li>
        </ul>
      </div>
    </div>
  )
}

export default Options;