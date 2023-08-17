import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader, Grid, Button} from '@mui/material';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    dark_blue: createColor('#2065d1'),
    yellow: createColor('#ffc107'),
    blue: createColor('#1890ff'),
    red: createColor('#ff4842'),
    green: createColor('#54d62c'),
    dark_green: createColor("#08660d")
  },
});



AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function AppConversionRates({ title, subheader, chartData, ...other }) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

//   const seriesData = [{
//     name: "Java",
//     data: [20,0,0,0],
//     library: ["a","b","c","d"]
//   },
//   {
//     name: "Python",
//     data: [0,10,0,0],
//     library: ["a","b","c","d"]
//   },
//   {
//     name: "JavaScript",
//     data: [0,0,0,0],
//     library: ["a","b","c","d"]
//   },
//   {
//     name:"C",
//     data: [0,0,0,0],
//     library: ["a","b","c","d"]
//   }

// ]

const seriesData = [{
  name: "Java",
  data: [20,0,0,0],
  library: ["a","b","c","d"]
},
{
  name: "Python",
  data: [0,10,0,0],
  library: ["a","b","c","d"]
},
{
  name: "JavaScript",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"C",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Ocaml",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Assembly",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"React.js",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Node.js",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Express.js",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"D3.js",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"MongoDB",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Numpy",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Scikit-Learn",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"Pandas",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
},
{
  name:"",
  data: [0,0,0,0],
  library: ["a","b","c","d"]
}






]


  const chartOptions = useChart({
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesData) => fNumber(seriesData),
        title: {
          formatter: () => "",
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '58%', borderRadius: 2 },
    },
    xaxis: {
      categories: ["Java","Python","JavaScript","C"],
    },
    chart: {
      stacked: true,
      stackType: '100%'
    }
  });

  return (
    <Card {...other}>
      <CardHeader title={"Programming languages"}/>

      <Box sx={{ mx: 3 }} dir="ltr">
        {/* <ReactApexChart type="bar"series={seriesData} options={chartOptions} height={135} /> */}
        <br/>
        <Grid container spacing={1}>
        <Grid item>
        <Button variant="outlined"  size="small">Python</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined"  color="warning" size="small">Java</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined"  color="error" size="small">JavaScript</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined"  color="success" size="small">C</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color ="error" size="small">HTML</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color ="info" size="small">OCaml</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color ="success" size="small">SQL</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" size="small">React.js</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color= "error"size="small">Node.js</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color= "success" size="small">Express.js</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined"  size="small">D3.js</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color= "error" size="small">MongoDB</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color= "warning" size="small">Numpy</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" size="small">Pandas</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color="success"size="small">Scikit-Learn</Button>
        </Grid>
        <Grid item>
        <Button variant="outlined" color="info" size="small">Matplotlib</Button>
        </Grid>
        
       
        </Grid>

      </Box>
      <br/>

      {/* <img alt="skills" src="/assets/images/covers/my_skills.png"/> */}
      
    </Card>
  );
}
