// @mui
import PropTypes from 'prop-types';
import React from 'react'
import Carousel from 'react-grid-carousel'
import { alpha } from '@mui/material/styles';

import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ title, subheader, list, ...other }) {

  
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Scrollbar>

        <Stack spacing={2} sx={{ p: 2, pr: 0 }}> 
        <Carousel cols={1} rows={3} gap={10} showDots hideArrow dotColorActive={alpha("#1890ff", 0.63)} loop autoplay={5000}breakpoint={800}>
          {list.map((news) => (
            <Carousel.Item>
            <NewsItem key={news.id} news={news} />
            </Carousel.Item>
          ))}
          </Carousel>
         </Stack> 
      </Scrollbar>
      <br/>

      <Divider />

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box> */}
    </Card>
  );
}



// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function NewsItem({ news }) {
  const { image, title, description, postedAt, link } = news; 

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 0, flexGrow: 1 ,overflow: "hidden"}}>
        <Link color="inherit" variant="subtitle2" underline="hover"  noWrap target="_blank" rel="noreferrer" href={link}>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
