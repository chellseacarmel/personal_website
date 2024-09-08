import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Card, CardMedia, useMediaQuery } from '@mui/material';
// components
import { useTheme } from '@mui/material/styles';
import Iconify from '../components/iconify';
import { Link } from 'react-router-dom';
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
{
  repo_link: "https://github.com/chellseacarmel/The-Notes-Website",
  img_src: "https://gh-card.dev/repos/chellseacarmel/The-Notes-Website.svg"
},
{
  repo_link: "https://github.com/chellseacarmel/Desserts-Gallore-y",
  img_src: "https://gh-card.dev/repos/chellseacarmel/Desserts-Gallore-y.svg"
},
]

// ----------------------------------------------------------------------

export default function BlogPage() {

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const height = lessThanSmall? 200: 150


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

          <Button variant="contained" component={Link} target="_blank" rel="noreferrer" to="https://github.com/chellseacarmel" startIcon={<Iconify icon="fluent-mdl2:open-in-new-tab" />}>
            View GitHub
          </Button>
         

        </Stack>
        
        <Grid container spacing={3}>
          {
              repos.map((repo,index)=>(
                // <Grid item background-color="#FFF" >
                // <a href={repo.repo_link}><img alt="Repo cards"src={repo.img_src}/></a>
                // </Grid>
            <Grid item xs={12} sm={6} md={4} background-color="#FFF" >
            <Card xs={12} sm={6} md={4}>
            <a target="_blank" rel="noreferrer" href={repo.repo_link}>
            <CardMedia sx={{ height: {height} }} image={repo.img_src} title="projects"/>
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
