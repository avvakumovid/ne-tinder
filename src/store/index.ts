import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/main.slice';
import userSlice from './slices/user.slice';


const rootReducer = combineReducers({
    main: mainSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>