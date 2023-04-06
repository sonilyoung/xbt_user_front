/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Chart from "react-apexcharts";

import { Link, useNavigate, useParams } from 'react-router-dom'
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/frontMain.css';

export class Score01 extends React.Component {    
    constructor(props) {
    super(props);

        this.state = {
          //colors: ['#C3E0FC','#A2C4E5','#C8D7E7','#7EA4CA','#9FBCD7','#DAE1E7','#6D9DCC']              
          series: [{
            name: '초급',
            data: [44, 55, 57],
            color:'#C3E0FC'
          }, {
            name: '초급심화',
            data: [76, 85, 60],
            color:'#A2C4E5'
          }, {
            name: '중급',
            data: [76, 85, 20],
            color:'#C8D7E7'
          }, {
            name: '중급심화',
            data: [35, 41, 10],
            color:'#7EA4CA'
          }, {
            name: '고급',
            data: [35, 41, 30],
            color:'#9FBCD7'
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 10,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['2023년 1차', '2023년 2차', '2023년 3차']
            },
            yaxis: {
              title: {
                text: 'score'
              }
            },
            fill: {
              opacity: 1,
              colors: ['#C3E0FC','#A2C4E5','#C8D7E7','#7EA4CA','#9FBCD7','#DAE1E7','#6D9DCC']              
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val
                }
              }
            }
          },
        
        
        };
    }

    render() {
        return (
            <>
                <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="bar" height={600} />
                </div>
            </>
        );
    }
};
