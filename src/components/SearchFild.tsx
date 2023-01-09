import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchFild = () => {
  return (
    <Paper
      component="form"
      sx={{
        m: 1,
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 29,
        backgroundColor: 'rgb(235,238,240)',
        boxShadow: 'none',
        height: 35,
      }}>
      <IconButton
        sx={{ p: '10px' }}
        aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontWeight: 600 }}
        placeholder="Поиск в Твиттере"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
};
export default SearchFild;
