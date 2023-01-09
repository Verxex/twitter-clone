import * as React from 'react';
import { BottomNavigation, Typography, BottomNavigationAction, Stack } from '@mui/material';
import RetwitIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import UploadIcon from '@mui/icons-material/FileUploadOutlined';
import MessageIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function TweetFooter() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: '100%' }}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction
        label="Сообщения"
        value="recents"
        icon={
          <Stack
            direction="row"
            sx={{ alignItems: 'center' }}>
            <MessageIcon />
            <Typography sx={{ ml: 1 }}>2</Typography>
          </Stack>
        }
      />
      <BottomNavigationAction
        label="Ретвитт"
        value="favorites"
        icon={<RetwitIcon />}
      />
      <BottomNavigationAction
        label="Лайки"
        value="nearby"
        icon={
          <Stack
            direction="row"
            sx={{ alignItems: 'center' }}>
            <LikeIcon />
            <Typography sx={{ ml: 1 }}>15</Typography>
          </Stack>
        }
      />
      <BottomNavigationAction
        label="Пост"
        value="folder"
        icon={<UploadIcon />}
      />
    </BottomNavigation>
  );
}
