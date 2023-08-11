import React from "react";
import "./Graph.css";
import Button from "@mui/material/Button";

import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chart from 'react-apexcharts'


const Graph = () => {

    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
        series: [{ // Replace this with your actual series data
          name: "Series Name",
          data: [30, 40, 35, 50, 49, 60, 70], // Example data
        }],
      };
    
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green["A400"]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A400"],
    },
  }));

  return (
    <div className="Main_graph">
      <div className="Graph_Header">
        <div className="Main_Box">

        
        <Box sx={{ borderColor: "secondary.main" }} />
        <Box sx={{ borderColor: "error.main" }} />
        <Box sx={{ borderColor: "grey.500" }} />
        <span>Earnings</span>
        <div className="p">
          46.5%
          <div className="Button_One">
            <ColorButton size="small">+6.9%</ColorButton>
          </div>
        </div>
        </div>
     
      <div className="Graph_Secondary_Header">
      <div className="Main_Box">
        <span>Sales Value</span>
        <div className="p">
          $95,000
          <div className="Button_One">
            <ColorButton size="small">+10.9%</ColorButton>
          </div>
        </div>
      </div>
      </div>
      </div>





      <Chart options={data.options} series={data.series} type="area" />

    </div>
  );
};

export default Graph;




