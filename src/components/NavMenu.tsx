import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import TwitterIcon from '@mui/icons-material/Twitter';
import NavMenuItem from './NavMenuItem';
import HomeIcon from '@mui/icons-material/OtherHousesOutlined';
import TagIcon from '@mui/icons-material/TagOutlined';
import NotifyIcon from '@mui/icons-material/NotificationsOutlined';
import MessageIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import BookmarkIcon from '@mui/icons-material/TurnedInNotOutlined';
import NotesIcon from '@mui/icons-material/TextSnippetOutlined';
import ProfileIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';
import UserIcon from '@mui/icons-material/Person3Outlined';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const NavMenu: React.FC = () => {
  const paperSX = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const userIconSX = {
    marginBottom: 5,
    marginLeft: 5,
  };
  const twittButtonSx = {
    justifyContent: 'center',
  };
  const TitleSx = {
    fontWeight: 600,
    color: '#fff',
    '& :hover': {
      color: 'rgb(29,161,242)',
    },
  };
  const itemSx = {
    margin: 2,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(29,161,242)',
  };
  return (
    <Paper sx={paperSX}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MenuList>
          <NavMenuItem title="">
            <TwitterIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Главная">
            <HomeIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Поиск">
            <TagIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Уведомления">
            <NotifyIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Сообщения">
            <MessageIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Закладки">
            <BookmarkIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Списки">
            <NotesIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Профиль">
            <ProfileIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
          <NavMenuItem title="Ещё">
            <MoreIcon
              color="primary"
              fontSize="large"
            />
          </NavMenuItem>
        </MenuList>
        <Button
          sx={{ width: 210 }}
          variant="contained"
          color="primary">
          Твитнуть
        </Button>
      </Box>
      <UserIcon
        sx={userIconSX}
        fontSize="large"
      />
    </Paper>
  );
};
export default NavMenu;
