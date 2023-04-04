/* eslint-disable*/
import React, { useState, useEffect, Component } from 'react';

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';


class StopWatch extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        curTime: 0,
        curTimeStr: '00:00:00.000',
        isStarted: false,
        recordsId: 0,
        records: []
      };

      this.toggleSwitch = this.toggleSwitch.bind(this);
      this.recordsTime = this.recordsTime.bind(this);
      this.resetTime = this.resetTime.bind(this);
    }

    toggleSwitch() {
      if(!this.state.isStarted) {
        this.setState({isStarted: true}, () => {
          this.startTick();
        });
      }
      else {
        this.setState({isStarted: false}, () => {
          this.endTick();
        });
      }
    }

    recordsTime() {
      let time = new Date(this.state.curTime).toISOString().substr(11, 8) + "." + this.state.curTime%1000;
      this.setState({
        records: this.state.records.concat({id:this.state.recordsId, time: time})
      }, ()=>{
        this.setState({recordsId: this.state.recordsId+1});
      });
    }

    resetTime() {
      this.setState({records: [], curTime: 0, curTimeStr: '00:00:00.000'})
    }

    //Event
    startTick() {
      this.tick = setInterval(() => {
        this.setState({
          curTime: this.state.curTime + 1,
        }, () => {
          this.setState({
            curTimeStr: new Date(this.state.curTime).toISOString().substr(11, 8) + "." + this.state.curTime%1000
          })
        })
      }, 1)
    }

    endTick() {
      clearInterval(this.tick)
    }

    render() {
      return(
        <>
        <div id="stopwatch"></div>
        <div>
          <div>{this.state.curTimeStr}</div>
          <button onClick={this.toggleSwitch}>{this.state.isStarted?"STOP":"START"}</button>
          <button onClick={this.recordsTime}>RECORDS</button>
          <button onClick={this.resetTime}>RESET</button>
          <div>RECORDS HISTORY</div>
          <div>{this.state.records.map((element)=><div key={element.id}>{element.time}</div>)}</div>
        </div>
        </>
      );
    }
  }
  export default StopWatch;