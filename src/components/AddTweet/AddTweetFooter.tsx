import * as React from 'react';
import { Stack, IconButton, Button } from '@mui/material';
import PhotoIcon from '@mui/icons-material/PhotoOutlined';
import GifIcon from '@mui/icons-material/GifBoxOutlined';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EventIcon from '@mui/icons-material/EventAvailableOutlined';
import EqualIcon from '@mui/icons-material/EqualizerOutlined';

export default function AddTweetFooter() {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: 'space-between', mr: 2, mt: 1 }}>
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-around' }}>
        <IconButton>
          <PhotoIcon color="primary" />
        </IconButton>
        <IconButton>
          <GifIcon color="primary" />
        </IconButton>
        <IconButton>
          <EqualIcon color="primary" />
        </IconButton>
        <IconButton>
          <SmileIcon color="primary" />
        </IconButton>
        <IconButton>
          <EventIcon color="primary" />
        </IconButton>
      </Stack>
      <Button
        color="primary"
        variant="contained">
        Твитнуть
      </Button>
    </Stack>
  );
}
