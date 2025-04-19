import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import AddIcon from '@mui/icons-material/Add';
import Search from './Search';
import SecondSidebar from './SecondSidebar';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
    
      <Stack direction="row" sx={{ gap: 1 }}>
      <MenuButton  aria-label="menu" onClick={toggleDrawer(true)}>
        <AddIcon /> 
      </MenuButton>
      <SecondSidebar open={open} toggleDrawer={toggleDrawer}/>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
// import Stack from '@mui/material/Stack';
// import NavbarBreadcrumbs from './NavbarBreadcrumbs';
// import MenuButton from './MenuButton';
// import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import CustomDatePicker from './CustomDatePicker';
// import Search from './Search';
// const routeInfo = {
//   '/': { text: 'Home', icon: <HomeRoundedIcon /> },
//   '/analytics': { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
//   '/clients': { text: 'Clients', icon: <PeopleRoundedIcon /> },
//   '/tasks': { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
// };

// export default function Header() {
//   const location = useLocation();
//   const current = routeInfo[location.pathname] || { text: '', icon: null };

//   return (
//     <Stack
//       direction="row"
//       alignItems="center"
//       spacing={1}
//       sx={{
//         backgroundColor: 'background.default',
//         px: 2,
//         py: 1,
//         width: '100%',
//         borderRadius: 2,
//       }}
//     >

//       <NavbarBreadcrumbs />
//       <Stack direction="row" sx={{ gap: 1 }}>
//         <Search />
//         <CustomDatePicker />
//         <MenuButton showBadge aria-label="Open notifications">
//           <NotificationsRoundedIcon />
//         </MenuButton>
//         <ColorModeIconDropdown />
//       </Stack>
//     </Stack>
//   );
// }
