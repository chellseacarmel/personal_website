// component
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: <img width="30" height="30" src="https://img.icons8.com/stickers/100/exterior.png" alt="exterior"/>
  },
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: <img width="30" height="30" src="https://img.icons8.com/stickers/100/web-analystics.png" alt="web-analystics"/>
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: <img width="30" height="30" src="https://img.icons8.com/stickers/100/squared-menu.png" alt="squared-menu"/>,
  },
  {
    title: 'Resume',
    path: '/dashboard/resume',
    icon: <img width="30" height="30" src="https://img.icons8.com/stickers/100/parse-from-clipboard.png" alt="parse-from-clipboard"/>,
  },
  {
    title: 'Contact',
    path: 'mailto: ccrobinson@cs.stonybrook.edu',
    icon: <img width="30" height="30" src="https://img.icons8.com/stickers/100/business-contact.png" alt="contact-card"/>,
  }

 
];

export default navConfig;
