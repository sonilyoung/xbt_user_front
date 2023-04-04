/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Chart from "react-apexcharts";

import { Link, useNavigate, useParams } from 'react-router-dom'
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/tab.css';
import img from 'assets/images/score/tab_img01.png';

export class Score01 extends React.Component {    
    constructor(props) {
    super(props);

        this.state = {
        
          series: [{
            name: '초급',
            data: [44, 55, 57]
          }, {
            name: '초급심화',
            data: [76, 85, 60]
          }, {
            name: '중급',
            data: [76, 85, 20]
          }, {
            name: '중급심화',
            data: [35, 41, 10]
          }, {
            name: '고급',
            data: [35, 41, 30]
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
              enabled: false
            },
            stroke: {
              show: true,
              width: 10,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['2023년 1차', '2023년 2차', '2023년 3차'],
            },
            yaxis: {
              title: {
                text: '점수'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
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
