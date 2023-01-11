import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export type user = {
  username: string;
  fullname: string;
  avatarUrl: string;
};

export type tweet = {
  id: string;
  text: string;
  user: user;
};

export interface TweetSliceState {
  items: tweet[];
  loadingStatus: 'success' | 'loading' | 'error' | 'never';
}

const initialState: TweetSliceState = {
  items: [],
  loadingStatus: 'never',
};

// First, create the thunk
export const fetchTweets = createAsyncThunk<tweet[]>('tweets/fetchTweets', async () => {
  const { data } = await axios.get<tweet[]>('/tweets');
  return data;
});

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addTweet: (state, action: PayloadAction<tweet>) => {
      state.items.push(action.payload);
    },
    removeTweet: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
  extraReducers: (tweetsBuilder) => {
    tweetsBuilder.addCase(fetchTweets.pending, (state) => {
      state.loadingStatus = 'loading';
      state.items = [];
    });
    tweetsBuilder.addCase(fetchTweets.fulfilled, (state, action) => {
      state.loadingStatus = 'success';
      state.items = action.payload;
    });
    tweetsBuilder.addCase(fetchTweets.rejected, (state) => {
      state.loadingStatus = 'error';
      state.items = [];
      console.log('ошибка загрузки Твиттов');
    });
  },
});
export const selectTweets = (state: RootState) => state.tweets.items;
export const selectTweetById = (id: string) => (state: RootState) =>
  state.tweets.items.find((obj) => obj.id === id);

export const { addTweet, removeTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
