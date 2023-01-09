import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

interface SideBarItemProps {
  title: string;
  children?: React.ReactNode;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ title, children }) => {
  const TitleSx = {
    marginLeft: 2,
    fontWeight: 600,
  };
  const itemSx = {
    margin: 2,
    borderRadius: 5,
  };
  return (
    <MenuItem sx={itemSx}>
      <ListItemIcon>{children}</ListItemIcon>
      <Typography
        sx={TitleSx}
        variant="inherit">
        {title}
      </Typography>
    </MenuItem>
  );
};
export default SideBarItem;
