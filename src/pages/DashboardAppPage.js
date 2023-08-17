import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Stack,Button,IconButton, Card} from '@mui/material';
// components
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import { update } from 'lodash';
import Iconify from '../components/iconify';
// sections



import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import POSTS from '../_mock/blog';
import { BlogPostCard} from '../sections/@dashboard/blog';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [left, updateLeft] = useState(0);
  const [right, updateRight] = useState(2);

  const repos = [{
    repo_link: "https://github.com/chellseacarmel/Protest-Data-Dashboard",
    img_src: "https://gh-card.dev/repos/chellseacarmel/Protest-Data-Dashboard.svg"
  },
  {
    repo_link: "https://github.com/chellseacarmel/Movie-Data-Dashboard",
    img_src: "https://gh-card.dev/repos/chellseacarmel/Movie-Data-Dashboard.svg"
  },
  {
    repo_link: "https://github.com/chellseacarmel/Airbnb-Price-Prediction",
    img_src: "https://gh-card.dev/repos/chellseacarmel/Airbnb-Price-Prediction.svg"
  },
  {
    repo_link: "https://github.com/chellseacarmel/Logo-Maker-Website",
    img_src: "https://gh-card.dev/repos/chellseacarmel/Logo-Maker-Website.svg"
  },
  {
    repo_link: "https://github.com/AhyoungOh/CSE416_QuizHub",
    img_src: "https://gh-card.dev/repos/AhyoungOh/CSE416_QuizHub.svg"
  }
  ]

  const awards =[{
    description: "Awarded from Fall 2018 to Spring 2022",
    image: "/assets/images/covers/sbu_logo.jpg",
    title: "Stony Brook University Dean's List ",
  }]

  const handleLeft = () => {
    console.log(left,right)
   if(left > 0 && (right - left)===2 ){
    updateLeft(left-1)
    updateRight(right-1)
   }
  };

  const handleRight = () => {
    console.log(left,right,repos.length)
   if(right < 10 && (repos.length-1-left)>=2 ){
    updateLeft(left+1)
    updateRight(right+1)
   }
  };

  const certs = [{
    description: "JPMC",
    image: "/assets/images/covers/jpmorgan-chase.png",
    title: "JPMC Virtual Experience ",
  },
  {description: "Google",
  image: "/assets/images/covers/google-logo.png",
  title: "Google Project Management",
},
{description: "IBM",
  image: "/assets/images/covers/ibm-logo.png",
  title: "IBM Data Science Certificate",
},
]
  
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Box>
        <Typography variant="h4" sx={{mt:0}}>
          Chellsea Robinson's Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Curious / Passionate / Problem Solver
        </Typography>
        </Box>

        <Grid container spacing={2} >
        
        <Grid item xs={6} sm={6} md={8} background-color="#FFF" wrap="nowrap" >
        
       
        <Grid container spacing={0} alignContent={'center'} wrap="nowrap" >
        <IconButton aria-label="delete" onClick={handleLeft}  sx={ { borderRadius: 100}}>
          <img width="30" height="30" src="https://img.icons8.com/stickers/100/back.png"  alt="forward--v1"/>
        </IconButton>


        <Grid container spacing ={3}>
         {
          // POSTS.slice(left,right).map((post, index) => (
          //   <BlogPostCard key={post.id} post={post} index={index} />
          // ))
          
          repos.slice(left,right).map((repo,index)=>(
            <Grid item xs={6} sm={6} md={6} background-color="#FFF" >
            <Card xs={6} sm={6} md={6}>
            {/* <div className="repo-card" width="161px" data-repo={repo.repo_name}/> */}
            <div>
            <a target="_blank" rel="noreferrer" href={repo.repo_link}><img  style={{objectFit:'cover'}} alt="Repo cards"src={repo.img_src}/></a>
            </div>
            </Card>
            </Grid>
          ))
          }
          </Grid>
         
          <IconButton aria-label="delete" onClick={handleRight} sx={ { borderRadius: 100} }>
          <img width="30" height="30" src="https://img.icons8.com/stickers/100/forward--v1.png" alt="forward--v1"/>
          </IconButton>
        </Grid>
       
        
        {/* <Box>
         
          <IconButton aria-label="delete" onClick={handleLeft} >
          <img width="30" height="30" src="https://img.icons8.com/stickers/100/back.png" alt="forward--v1"/>
          </IconButton>
  
          <IconButton aria-label="delete" onClick={handleRight} >
          <img width="30" height="30" src="https://img.icons8.com/stickers/100/forward--v1.png" alt="forward--v1"/>
          </IconButton>
          
        </Box> */}
        </Grid>

        <Grid item xs={4} md={4} lg={4}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: [400,234,654] },
                { label: 'Japan', value: [430,123,431] },
                { label: 'China', value: [448,234,321] },
                { label: 'Canada', value: [470,389,231] },
              ]}
            />
          </Grid>


       

        {/* <Grid item xs={4} sm={4} lg={4} >
          <Grid item xs={12} sm={3} lg={12}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(2)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                // postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
          </Grid> */}


          {/* <Grid item xs={8} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={"Quiz Website"} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={8} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={"Price Prediction"} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={8} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={"Protest Dashboard"} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={8} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={"Movie Dashboard"} color="error" icon={'ant-design:bug-filled'} />
          </Grid> */}

          {/* <Grid item xs={8} md={6} lg={8}>

          <Card>
           <Grid container spacing={1} alignContent={'center'} wrap="nowrap">
            <Grid item>
            <img alt="Static Badge" src="https://img.shields.io/badge/-Python-05122A%3Fstyle%3Dflat%26logo%3Dpython"/> 
            </Grid>
            <Grid item>
            <img alt="Static Badge" src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript"/>
            </Grid>
            <Grid item>
           <img alt="Static Badge" src="https://img.shields.io/badge/-Java-05122A?style=flat&logo=Java&logoColor=FFA518"/>
           </Grid>
            <Grid item>
           <img alt="Static Badge" src="https://img.shields.io/badge/-C-05122A?style=flat&logo=C&logoColor=A8B9CC"/>
            </Grid>
            <Grid item>
           <img alt="Static Badge" src="https://img.shields.io/badge/-OCaml-05122A?style=flat&logo=ocaml&logoColor=#EC6813"/>
           </Grid>
           </Grid>
           </Card>

           </Grid> */}


         {/* <Grid item xs={8} md={6} lg={8}>
         <div id="vizContainer"/>
        </Grid>
           */}

          <Grid item xs={8} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={3} lg={4} >
          <Stack spacing={2}>
          <Grid item xs={12} sm={3} lg={12}>
            <AppNewsUpdate
              title="Certificates"
              list={certs.slice(0,3).map((cert, index) => ({
                id: faker.datatype.uuid(),
                title: cert.title,
                description: cert.description,
                image: cert.image,
                // postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} sm={3} lg={12}>
          <AppNewsUpdate
              title="Awards"
              list={awards.slice(0,1).map((cert, index) => ({
                id: faker.datatype.uuid(),
                title: cert.title,
                description: cert.description,
                image: cert.image,
                // postedAt: faker.date.recent(),
              }))}
            />
           
          </Grid>
    
          </Stack>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
