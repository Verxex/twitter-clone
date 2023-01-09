import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { Typography, Paper, InputBase, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import AddTweetFooter from './AddTweetFooter';
import PublicIcon from '@mui/icons-material/PublicOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AddTweet() {
  const user = {
    userneme: 'Masha',
    fullname: 'MaHa',
    tweetAvatar: 'wdadsfajsdfa',
    avatarUrl: 'https://i.pinimg.com/originals/ac/19/b7/ac19b7b5c5c24e90c140b6b85bcdb99a.jpg',
  };
  const text =
    'В Москве прошли трёхсторонние переговоры министров обороны России, Сирии и Турции - обсудили пути разрешения сирийского кризиса и проблему беженцев, совместные усилия по борьбе с экстремистскими группировками в Сирии.';

  return (
    <Paper sx={{ flexGrow: 1, p: 1, borderBottom: '1px solid rgb(0 0 0 / 12%)' }}>
      <Grid
        container
        spacing={0}>
        <Grid xs>
          <Avatar
            alt={`Аватар пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid xs={11}>
          <InputBase
            sx={{ ml: 1, flex: 1, fontWeight: 600 }}
            placeholder="Что происходит?"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Stack
            direction="row"
            sx={{ alignItems: 'center' }}>
            <PublicIcon
              fontSize="small"
              color="primary"
            />
            <Typography
              color="primary"
              sx={{ ml: 1 }}>
              Отвечать могут все пользователи
            </Typography>
          </Stack>

          <Divider />
          <AddTweetFooter />
        </Grid>
      </Grid>
    </Paper>
  );
}
