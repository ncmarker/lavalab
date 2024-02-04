import React, { useState } from 'react';
import './Card.css';

function Card(props) {

  const [buttonText, setButtonText] = useState('Connect');
  const [buttonClassName, setButtonClassName] = useState('disconnected');

  // if connect button clicked, turns green and says connected (and back to normal if reclicked)
  function handleConnect() {
    if (buttonText === "Connect") {
      setButtonText("Connected")
      setButtonClassName('connected')
    } else if (buttonText === "Connected") {
      setButtonText("Connect")
      setButtonClassName('connect')

    }
  };

  
  return (
    <div id={props.showHide} className="card">
        <div className="logo-btn-container">
            <img className="card-logo" src={props.imgsrc} alt={props.alttxt}/>
            <button 
            onClick={() => handleConnect()}
            className ={buttonClassName}
            >{buttonText}</button>
        </div>
        <h6 className="card-name">{props.cardName}</h6>
        <p className="card-description">{props.cardDescription}</p>
    </div>
  );
}

export default Card;
