/* eslint-disable*/
import React, { useState, useEffect, Component, useRef  } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';


import learning_01 from 'assets/images/learning/learning_01.jpg';
import learning_02 from 'assets/images/learning/learning_02.jpg';
import learning_03 from 'assets/images/learning/learning_03.jpg';
import learning_04 from 'assets/images/learning/learning_04.jpg';
import learning_05 from 'assets/images/learning/learning_05.jpg';

import learning_01_1 from 'assets/images/learning/learning_01_1.jpg';
import learning_02_1 from 'assets/images/learning/learning_02_1.jpg';
import learning_03_1 from 'assets/images/learning/learning_03_1.jpg';
import learning_04_1 from 'assets/images/learning/learning_04_1.jpg';
import learning_05_1 from 'assets/images/learning/learning_05_1.jpg';


export const ImageSize=()=>{


  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
          <img src={learning_01} data-thum={learning_01_1} className="image" alt="image" />
            <div>Example text</div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  )
}