import React from 'react';
import ReactDom from 'react-dom';
import Aa, { Abc } from './funcom';
import { Appln, Fname } from './samplecom';
import Indust from './samplecom2';
import { Imgapp } from './style';
//import Indust from './samplecom2';
ReactDom.render(
    <>
      <h1>Java fullstack</h1>
      <Abc/>
      <Aa/>
      <Appln/>
      <Indust/>
      <Fname/>
      <Imgapp/>
    </>
    ,document.getElementById("root")  
) 