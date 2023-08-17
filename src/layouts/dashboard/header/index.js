import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
// import Typography from 'src/theme/overrides/Typography';

// ----------------------------------------------------------------------

const NAV_WIDTH = 250;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 70;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  // ...bgBlur({ color: "#FFFFFF" }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
    height: '7%'
  },
  backgroundColor: "#FFFFFF"
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover />
          <NotificationsPopover /> */}
          <AccountPopover />
          <Stack>
          <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {"Chellsea Robinson"}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.primary' }}>
                {"ccrobinson@cs.stonybrook.edu"}
              </Typography>

          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
