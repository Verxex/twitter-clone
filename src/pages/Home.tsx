import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavMenu from '../components/NavMenu';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchFild from '../components/SearchFild';
import MainHeader from '../components/MainHeader';
import TwitsList from '../components/TwitsList';
import LeftAccordions from '../components/LeftAccordion';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0}>
            <Grid
              item
              xs={3}>
              <NavMenu />
            </Grid>
            <Grid
              sx={{
                '--Grid-borderWidth': '1px',
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              }}
              item
              xs={6}>
              <MainHeader />
              <TwitsList />
            </Grid>
            <Grid
              item
              xs={3}>
              <SearchFild />
              <Box>
                <LeftAccordions />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
