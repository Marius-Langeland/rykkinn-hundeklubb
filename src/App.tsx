import React from 'react';
import './App.scss';
import './theme.css';
import Dog from "./images/Dog_profile_2.png"
import {ReactComponent as Bridge} from "./images/Untitled.svg";

function App() {
  return (
    <>
      <div id="background"></div>
      <h1><span>Rykkinn</span> <span>hunde-</span> <span>klubb</span></h1>
      <img id='dog-sideview' src={Dog} alt="" />
      <section id="content">
        <Bridge id='bridge'/>
        <div id="main"></div>
      </section>
    </>
  );
}

export default App;
