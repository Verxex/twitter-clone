import * as React from 'react';

import { Grid, CssBaseline, Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';

import SearchFild from '../components/SearchFild';
import MainHeader from '../components/MainHeader';
import LeftAccordions from '../components/LeftAccordion';
import Tweet from '../components/Tweet/Tweet';
import AddTweet from '../components/AddTweet/AddTweet';
import SideBar from '../components/SideBar';
import { fetchTweets, selectTweets, tweet } from '../components/Redux/Slices/TweetSlice';
import { useAppDispatch } from '../components/Redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchTweets());
    }
    isMounted.current = true;
  }, []);

  const tweets = useSelector(selectTweets) as tweet[];
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
              <SideBar />
            </Grid>
            <Grid
              sx={{
                borderRight: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
              item
              xs={6}>
              <MainHeader />
              <AddTweet />
              {tweets.map((obj) => (
                <Tweet
                  key={obj.id}
                  id={obj.id}
                />
              ))}
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
