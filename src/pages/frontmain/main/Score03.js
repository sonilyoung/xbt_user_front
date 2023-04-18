/* eslint-disable */
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 10,
            left: 5,
            blur: 5,
            opacity: 0.1
        },
        zoom:{
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#52c41a', '#6D9DCC', '#faad14'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3, 3, 3],
        curve: 'straight',
        dashArray: [0, 5, 0],
        curve: 'smooth'
    },
    yaxis: {
        min: -10,
        max: 40,
        tickAmount: 3
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.7
        }
    },
    legend: {
        tooltipHoverFormatter: function (val, opts) {
            return (
                val +
                ' : ' +
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' '
            );
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    }
};

// ==============================|| INCOME AREA CHART ||============================== //
export const Score03 = () => {
    const [options, setOptions] = useState(areaChartOptions);
    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            // colors: [theme.palette.primary.main, theme.palette.primary[400]],
            xaxis: {
                categories: [
                    'Firearms'
                    , 'Explosives'
                    , 'ammunitions'
                    , 'Knifes and swords'
                    , 'General weapons'
                    , 'Camouflage weapon'
                    , 'Tools or supplies category'
                    , 'Inflammable substances'
                    , 'Hazardous materials'
                    , 'Liquids or gel-type item'
                ]
                //categories: ['average', 'Total Count', 'Error Count']
            },
            yaxis: {
                title: {
                    text: 'count'
                }
            }
        }));
    }, []);

    const [series, setSeries] = useState([
        {
            name: 'Average',
            data: [3, 17, 7, 9, 7, 15, 12, 18, 5, 30]
        },        
        {
            name: 'Total Count',
            data: [20, 30, 10, 10, 17, 15, 30, 20, 15, 30]
        },
        {
            name: 'Error Count',
            data: [3, 10, 4, 8, 4, 9, 7, 10, 1, 9]
        },
    ]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" width={'100%'} height={400} />
        </div>
    );
};
