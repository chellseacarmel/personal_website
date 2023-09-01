import React from 'react'
import Carousel from 'react-grid-carousel'
import { Grid, Container, Typography, Box, Stack,Button,IconButton, Card, CardMedia} from '@mui/material';

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
  repo_link: "https://github.com/chellseacarmel/QuizHub",
  img_src: "https://gh-card.dev/repos/chellseacarmel/QuizHub.svg"
},
{
repo_link: "https://github.com/chellseacarmel/Multi-threaded-Chat-Server",
img_src: "https://gh-card.dev/repos/chellseacarmel/Multi-threaded-Chat-Server.svg"
}
,
{
repo_link: "https://github.com/chellseacarmel/Flight-Routes-Database",
img_src: "https://gh-card.dev/repos/chellseacarmel/Flight-Routes-Database.svg"
}
,
]


export default function SimpleSlider () {
  return (
    <Carousel cols={2} rows={1} gap={10} loop breakpoint={800}>

      {repos.map((repo)=>{
        return(
        <Carousel.Item>
          <Card>
            <a  target="_blank" rel="noreferrer" href={repo.repo_link}>
            <img width="100%"  src={repo.img_src} alt="project"/>
            </a>
          </Card>
        </Carousel.Item>
        )

      })}

    </Carousel>
  )
}

// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// export default function SimpleSlider () {
//   return (
//     <Carousel
//     plugins={[
    
//     'infinite',
//     'arrows',
//     {
//       resolve: slidesToShowPlugin,
//       options: {
//        numberOfSlides: 2,
//       },
//     },
//   ]}   
// >
//   <img src={"https://gh-card.dev/repos/chellseacarmel/Protest-Data-Dashboard.svg"} height="170px" alt="projects" />
//   <img src={"https://gh-card.dev/repos/chellseacarmel/Protest-Data-Dashboard.svg"} height="200px" alt="projects" />
//   <img src={"https://gh-card.dev/repos/chellseacarmel/Protest-Data-Dashboard.svg"} height="200px" alt="projects" />
// </Carousel>
//   )
// }



