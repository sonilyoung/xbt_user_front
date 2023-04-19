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
            name: 'level 1',
            data: [22, 60, 90],
            color:'#C3E0FC'
          }, {
            name: 'level 2',
            data: [20, 57, 87],
            color:'#A2C4E5'
          }, {
            name: 'level 3',
            data: [18, 52, 83],
            color:'#C8D7E7'
          }, {
            name: 'level 4',
            data: [16, 49, 80],
            color:'#7EA4CA'
          }, {
            name: 'level 5',
            data: [14, 46, 79],
            color:'#9FBCD7'
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: false
              },
            },                        
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: true,
              offsetY: -20,
              style: {
                colors: ['#5A687B']
              },            
            },
            stroke: {
              show: true,
              width: 10,
              colors: ['transparent']
            },
            xaxis: {
              //categories: ['2023년 1차', '2023년 2차', '2023년 3차']
              categories: ['2021year 1Batch', '2022year 2Batch', '2023year 3Batch']
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
