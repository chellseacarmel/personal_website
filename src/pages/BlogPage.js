import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Card, CardMedia } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

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
}

,
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

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Projects </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            Projects
          </Typography>

          <a target="_blank" rel="noreferrer" id="contact" href='https://github.com/chellseacarmel'>
          <Button variant="contained" startIcon={<Iconify icon="fluent-mdl2:open-in-new-tab" />}>
            View GitHub
          </Button>
          </a>

        </Stack>
        
        <Grid container spacing={3}>
          {
              repos.map((repo,index)=>(
                // <Grid item background-color="#FFF" >
                // <a href={repo.repo_link}><img alt="Repo cards"src={repo.img_src}/></a>
                // </Grid>
            <Grid item xs={4} sm={4} md={4} background-color="#FFF" >
            <Card xs={4} sm={4} md={4}>
            <a target="_blank" rel="noreferrer" href={repo.repo_link}>
            <CardMedia sx={{ height: 165 }} image={repo.img_src} title="projects"/>
            </a>
            </Card>
            </Grid>
              ))
          }
        </Grid>

      </Container>
    </>
  );
}
