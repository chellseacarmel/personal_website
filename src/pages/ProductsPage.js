import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Card, CardContent, Button} from '@mui/material';
import Iconify from '../components/iconify';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> My Resume </title>
      </Helmet>

      <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            Resume
          </Typography>

        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chellsea-carmel-robinson/'>
          <Button variant="contained" startIcon={<Iconify icon="fluent-mdl2:open-in-new-tab" />}>
            View LinkedIn
          </Button>
        </a>

  
        </Stack>

        {/* <Typography variant="h3" sx={{ mb: 5 }}>
        Resume
        </Typography> */}


        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} /> */}
        
        <Card xs="12">
        <CardContent height="700px">
        <object data="https://chellwebsitefiles.s3.ap-south-1.amazonaws.com/Chellsea_Robinson_Resume.pdf" type="application/pdf" width="100%" height="700px">
      <p>Alternative text - include a link <a href="https://chellwebsitefiles.s3.ap-south-1.amazonaws.com/Chellsea_Robinson_Resume.pdf">to the PDF!</a></p>
  </object> 
        </CardContent>
        </Card>
        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}
