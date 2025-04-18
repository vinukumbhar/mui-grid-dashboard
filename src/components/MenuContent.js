import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// const mainListItems = [
//   { text: 'Home', icon: <HomeRoundedIcon /> },
//   { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
//   { text: 'Clients', icon: <PeopleRoundedIcon /> },
//   { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
// ];

// const secondaryListItems = [
//   { text: 'Settings', icon: <SettingsRoundedIcon /> },
//   { text: 'About', icon: <InfoRoundedIcon /> },
//   { text: 'Feedback', icon: <HelpRoundedIcon /> },
// ];


const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/' },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, path: '/analytics' },
  { text: 'Clients', icon: <PeopleRoundedIcon />, path: '/clients', children: [
    { text: 'Accounts', icon: <FiberManualRecordIcon />,path: '/clients/accounts' },
    { text: 'Contacts', icon: <FiberManualRecordIcon />,path: '/clients/contacts' },
  ], },
  { text: 'Tasks', icon: <AssignmentRoundedIcon />, path: '/tasks' },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/settings' },
  { text: 'About', icon: <InfoRoundedIcon />, path: '/about' },
  { text: 'Feedback', icon: <HelpRoundedIcon />, path: '/feedback' },
];

export default function MenuContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = React.useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  
  const renderMenuItem = (item) => {
    const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
    const hasChildren = Array.isArray(item.children);
    const isOpen = openSubmenus[item.text];
  
    return (
      <React.Fragment key={item.text}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
           selected={isActive}

            onClick={() => {
              if (hasChildren) {
                toggleSubmenu(item.text);
              } else {
                navigate(item.path);
              }
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon >{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) => (
                <ListItem key={child.text} disablePadding >
                  <ListItemButton
                    selected={location.pathname === child.path}
                    onClick={() => navigate(child.path)}
                    sx={{ borderRadius: 2 }}
                  >
                     <ListItemIcon >{child.icon}</ListItemIcon>
                    <ListItemText primary={child.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };
  
  return (
//     <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
//       {/* <List dense>
//         {mainListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton selected={index === 0}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List dense>
//         {secondaryListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//       <List dense>
//   {mainListItems.map((item, index) => (
//     <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//       <ListItemButton
//         selected={index === 0}
//         onClick={() => navigate(item.path)}
//       >
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.text} />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>

// <List dense>
//   {secondaryListItems.map((item, index) => (
//     <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//       <ListItemButton onClick={() => navigate(item.path)}>
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.text} />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>

//     </Stack>
<Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      {/* <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
<List dense>
  {mainListItems.map(renderMenuItem)}
</List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
