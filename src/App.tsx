import React from 'react';
import './App.scss';
import './theme.css';
import Dog from "./images/Dog_Calm.png"
import {ReactComponent as Bridge} from "./images/Untitled.svg";

function App() {
  return (
    <>
      <h1><span>Rykkinn</span> <span>hunde-</span> <span>klubb</span></h1>
      <img id='dog-sideview' src={Dog} alt="" />
      <Bridge id='bridge'/>
      <div id="follow"></div>
    </>
  );
}

export default App;
