/* eslint-disable*/
import React, { useState, useEffect, Component, useRef  } from 'react';

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';


export const StopWatch=()=>{

  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(!isActive)
    {
      !isActive ?
      (increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 10))
      :
      (clearInterval(increment.current))
    }
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}.${getSeconds}`
  }

  return (
    <div>
        {formatTime()}
        <input type="button" onClick={handleStart} value={!isActive ? "Start" : "Stop"}/>
        <input type="button" onClick={handleReset} value ="Reset"/>
    </div>
  )
}