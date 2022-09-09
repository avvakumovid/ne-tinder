import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/main.slice';
import userSlice from './slices/user.slice';
import chatsSlice from './slices/chats.slice';


const rootReducer = combineReducers({
    main: mainSlice,
    user: userSlice,
    chats: chatsSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch