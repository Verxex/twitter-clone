import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { Typography, Paper } from '@mui/material';
import TweetFooter from './TweetFooter';
import { selectTweetById } from '../../Redux/Slices/TweetSlice';
import { useAppSelector } from '../../Redux/store';

const Tweet: React.FC<{ id: string }> = ({ id }) => {
  const tweet = useAppSelector(selectTweetById(id));
  if (tweet === undefined) {
    return null;
  }

  return (
    <Paper sx={{ flexGrow: 1, p: 1, borderBottom: '1px solid rgb(0 0 0 / 12%)' }}>
      <Grid
        container
        spacing={0}>
        <Grid xs>
          <Avatar
            alt={`Аватар пользователя ${tweet?.user.fullname}`}
            src={tweet?.user.avatarUrl}
          />
        </Grid>
        <Grid xs={11}>
          <Typography gutterBottom>
            <b>{tweet?.user.fullname}</b>&nbsp;
            <span>@{tweet?.user.username}</span>&nbsp;
            <span>.</span>&nbsp;
            <span>1 ч</span>&nbsp;
          </Typography>
          <Typography gutterBottom>{tweet?.text}</Typography>
        </Grid>
      </Grid>
      <TweetFooter />
    </Paper>
  );
};
export default Tweet;
