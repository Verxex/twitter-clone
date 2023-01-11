import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import TwitterIcon from '@mui/icons-material/Twitter';
import SideBarItem from './SideBarItem';
import HomeIcon from '@mui/icons-material/OtherHousesOutlined';
import TagIcon from '@mui/icons-material/TagOutlined';
import NotifyIcon from '@mui/icons-material/NotificationsOutlined';
import MessageIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import BookmarkIcon from '@mui/icons-material/TurnedInNotOutlined';
import NotesIcon from '@mui/icons-material/TextSnippetOutlined';
import ProfileIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';
import UserIcon from '@mui/icons-material/Person3Outlined';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import PopUp from './PopUp';
import AddTweet from './AddTweet/AddTweet';

const SideBar: React.FC = () => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const handleClose = () => {
    setPopupOpen(false);
  };
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

  return (
    <Paper sx={paperSX}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MenuList>
          <SideBarItem title="">
            <TwitterIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Главная">
            <HomeIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Поиск">
            <TagIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Уведомления">
            <NotifyIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Сообщения">
            <MessageIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Закладки">
            <BookmarkIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Списки">
            <NotesIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Профиль">
            <ProfileIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
          <SideBarItem title="Ещё">
            <MoreIcon
              color="primary"
              fontSize="large"
            />
          </SideBarItem>
        </MenuList>
        <Button
          onClick={() => setPopupOpen(!popupOpen)}
          sx={{ width: 210 }}
          variant="contained"
          color="primary">
          Твитнуть
        </Button>
        <PopUp
          popupOpen={popupOpen}
          handleClose={handleClose}>
          <AddTweet />
        </PopUp>
      </Box>
      <UserIcon
        sx={userIconSX}
        fontSize="large"
      />
    </Paper>
  );
};
export default SideBar;
