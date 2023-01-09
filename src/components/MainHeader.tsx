import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MagicIcon from '@mui/icons-material/AutoAwesomeOutlined';
import IconButton from '@mui/material/IconButton';

const MainHeader = () => {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}>
      <ListItem sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          sx={{ mt: 0.5, ml: 2, fontWeight: 600 }}
          display="block"
          variant="h5">
          Главная
        </Typography>
        <IconButton>
          <MagicIcon color="primary" />
        </IconButton>
      </ListItem>
      <Divider component="li" />
    </List>
  );
};
export default MainHeader;
