import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default function AppWebsiteVisits({ title, subheader, chartLabels, chartData, ...other }) {
  // const chartOptions = useChart({
  //   plotOptions: { bar: { columnWidth: '16%' } },
  //   fill: { type: chartData.map((i) => i.fill) },
  //   labels: chartLabels,
  //   xaxis: { type: 'datetime' },
  //   tooltip: {
  //     shared: true,
  //     intersect: false,
  //     y: {
  //       formatter: (y) => {
  //         if (typeof y !== 'undefined') {
  //           return `${y.toFixed(0)} visits`;
  //         }
  //         return y;
  //       },
  //     },
  //   },
  // });

  // return (
  //   <Card {...other}>
  //     <CardHeader title={title} subheader={subheader} />

  //     <Box sx={{ p: 3, pb: 1 }} dir="ltr">
  //       <ReactApexChart type="bar" series={chartData} options={chartOptions} height={364} />
  //     </Box>
  //   </Card>
  // );


  const chartSeries = chartData.map((i) => i.value);
 

//   const seriesData = [{
//     name: "Bachelors",
//     data: [1,1,1,1,0,1,1,1,1,1,0,0,0,
//       1,1,1,1,0,1,1,1,1,1,0,0,0,
//       1,1,1,1,0,1,1,1,1,1,0,0,0,
//       1,1,1,1,0,1,1,1,1,1,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]
//   },
//    {
//     name: "internship",
//     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,1,1,1,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]
//   },
//    {name: "Masters",
//     data: [ 0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       1,1,1,1,0,1,1,1,1,1,0,0,0,
//       1,1,1,1
//       ],
//     library: ["a","b","c","d"]
//   },
 
//   {
//     name: "TA",
//     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       1,1,1,1,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,1,1,1,1,1,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]
//   },
//   {
//     name:"research",
//     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       1,1,1,1,1,1,1,1,1,1,1,1,1,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]
//   },
//   {
//     name:"Leadership",
//     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       1,1,1,1,1,1,1,1,1,1,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]

//   },
//    {
//     name:"Certificates",
//     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,1,1,1,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,
//       0,0,0,0,0,0,0,0,0,0,1,1,1,
//       0,0,0,0
//       ],
//     library: ["a","b","c","d"]

//   },

// ]

const seriesData = [{
  name: "Bachelors",
  data: [1,1,0,1,1,0,1,1,0,1,1,0,0,
    0,0,
    ],
  description: "Graduated with honors in a bachelors degree in computer science and applied mathematics and statistics from Stony Brook University"
},
 {
  name: "Internship",
  data: [0,0,0,0,0,0,0,0,0,0,0,1,0,
    0,0,
    ],
  description: "Interned as a Junior Data Scientist Intern at Akai Kaeru and gained hands on experience in Data Analytics and Machine Learning "
},
 {name: "Masters",
  data: [0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,
    ],
  description: "Pursuing a graduate degree in computer science at Stony Brook University with a graduation date of December 2023"
},

{
  name: "TA",
  data: [0,0,0,0,0,0,1,0,0,0,1,0,0,
    0,0,
    ],
  description: "Served as a Teaching Assistant for Multivariable Calculus in Fall 2020 and Differential Equations in Spring 2022"
},
{
  name:"Research",
  data: [0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,
    ],
    description: "Served as a Graduate Research Assistant under Prof. I.V Ramakrishnan at Stony Brook University"
},
{
  name:"Leadership",
  data: [0,0,0,0,0,0,0,0,0,1,1,0,0,
    0,0,
    ],
  description: "Served as the Treasurer for the National Society of Leadership and Success "

},
 {
  name:"Certificates",
  data: [0,0,0,0,0,0,0,0,1,0,0,0,0,
    0,1,
    ],
  description: "Completed online coursework from Coursera with certficates from companies such as Google, IBM, etc."

},

]


  const chartOptions = useChart({
   
    tooltip: {
     
      y: {
        title: 
        {
          formatter: (value, { series, seriesIndex, dataPointIndex, w })=>{
          const data = w.globals.initialSeries[seriesIndex].name;
          return renderToString(
            <title>{}</title>
          )
        }

        },

        formatter: (value, { series, seriesIndex, dataPointIndex, w })=>{
          const data = w.globals.initialSeries[seriesIndex];
          return renderToString(
          <>
          <h1 style={{display:"inline"}}>{data.name}</h1>
          <hr/>
          <p style={{
          maxWidth: "250px",
          whiteSpace: "initial",
          overflow: "hidden",
          textOverflow: "ellipsis" ,  
         
          }}>{data.description}</p>
         </>
          
          )

        },
       
      }
    },
    plotOptions: {
      bar: { horizontal: false, barHeight: '80%', borderRadius: 2, columnWidth: '95%' },
    },
    xaxis: {
  //     categories: ['08/18', '09/18', '10/18', '11/18','12/18', 
  //     '01/19','02/19','03/19','04/19','05/19','06/19','07/19','08/19','09/19','10/19','11/19','12/19',
  //   '01/20','02/20','03/20','04/20','05/20','06/20','07/20','08/20','09/20','10/20','11/20','12/20',
  //   '01/21','02/21','03/21','04/21','05/21','06/21','07/21','08/21','09/21','10/21','11/21','12/21',
  //   '01/22','02/22','03/22','04/22','05/22','06/22','07/22','08/22','09/22','10/22','11/22','12/22',
  //   '01/23','02/23','03/23','04/23','05/23','06/23','07/23','08/23','09/23','10/23','11/23','12/23',
  // ]
      categories: ['Fall2018','Spring2019','Summer2019', 'Fall2019','Spring2020','Summer2020','Fall2020','Spring2021','Summer2021',
      'Fall2021','Spring2022','Summer2022','Fall2022','Spring2023','Summer2023']
    },
    chart: {
      stacked: true,
      stackType: '100%'
    }
  });

  return (
    <Card {...other}>
      <CardHeader title={"Timeline"}/>

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={seriesData} options={chartOptions} height={380} />
      </Box>
    </Card>
  );

}
