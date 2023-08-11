import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import "@fontsource/roboto/500.css";
import Grid from '@mui/material/Grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './MainBoard.css'
import Table from '../Table/Table';
import LinearProgress from '@mui/material/LinearProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Chart from 'react-apexcharts'



import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Graph from '../Graph/Graph';

const MainBoard = () => {
  
  const data = {
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };



  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green["A400"]),
    backgroundColor: green["A400"],
    "&:hover": {
      backgroundColor: green["A400"],
    },
  }));

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (


<div className="Main">
<Grid container spacing={10}>


<Grid item xs={4}>

      <Card sx={{ minWidth: 400  }}>
   
     <div className="Main_Balance">
      <div className="Main_Header">
        Total Income
        <Button startIcon={ <MoreHorizIcon/>}></Button>
      </div>
      <div className="Main_Middle">     
      $120,500.90
      <>
      <ColorButton
          size="small"
        >
          +6.9%
          
        </ColorButton>
        
        </>
      </div>
      <div className="Progress">
      <LinearProgress color='secondary' variant="determinate" value={70} />
      </div>
       
      <div className="Main_Bottom">
      Yearly Goal
      </div>
     
    
  
     </div>
    </Card>
    
   <div className="gap">
      <Card sx={{ minWidth: 400 ,minHeight:340}}>
      <div className="Main_Balance">
      <div className="Main_Header">
        New User
        <Button startIcon={ <MoreHorizIcon/>}></Button>
      </div>
      <div className="Main_Middle">     
      90.0%
      <>
      <ColorButton
          size="small"
        >
          +7.9%
          
        </ColorButton>
        </>
      </div>
      

      <Chart options={data.options} series={data.series} type="bar" />


      </div>
    </Card>
    </div>

    </Grid>



    <Grid item xs={4}>
      <Card sx={{ minWidth: 500 ,minHeight:500}}>
      <div className="Main_Earnings">
      <div className="Earnings_Header">
        Balance
        <FormControl sx={{ m: 1 , minWidth:100 }} size="small">
        <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          width="2"
          onChange={handleChange}
        >
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Monthly</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Divider />
<div className="Earnings_Middle">
<Graph/>

</div>
      
 
      </div>
    </Card>
    </Grid>



     
    <Grid item xs={10}>
      <Card sx={{ minWidth:200}}>
        <Table />
    </Card>
    </Grid>
     </Grid>
       
     </div>
  )
}

export default MainBoard