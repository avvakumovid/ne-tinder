import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddMessagePayload,
  Chat,
  ChatsState,
  Match,
} from '../../types/chat.type';
import { API } from './../../api/api';

export const getUserChats = createAsyncThunk(
  'chats/getUserChats',
  async (token: string) => {
    return await API.getUserChats(token);
  }
);

const initialState: ChatsState = {
  isLoading: false,
  error: '',
  matches: [],
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats(state: ChatsState, action: PayloadAction<Match[]>) {
      state.matches = action.payload;
    },
    addChat(state: ChatsState, action: PayloadAction<Match>) {
      state.matches = [...state.matches, action.payload];
      state.isLoading = false;
    },
    addMessageToChat(
      state: ChatsState,
      action: PayloadAction<AddMessagePayload>
    ) {
      state.matches = state.matches.map((match) => {
        if (match.chat.chatId === action.payload.chatId) {
          match.chat.messages.push(action.payload.message);
        }
        return match    ;
      });
    },
  },
  extraReducers(builder) {
    //getUserChats
    builder.addCase(getUserChats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserChats.fulfilled, (state, action) => {
      console.log(action.payload);
      state.matches = action.payload.matches;
    });
    builder.addCase(getUserChats.rejected, (state, action) => {});
  },
});

export const { setChats, addMessageToChat } = chatsSlice.actions;
export default chatsSlice.reducer;
