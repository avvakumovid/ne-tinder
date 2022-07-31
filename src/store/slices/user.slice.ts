
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import socket from './../../socket';

export const registration = createAsyncThunk('user/registration', async (payload) => {

    // socket.emit('createUser', payload)
    // const response = await socket.on('createUser', (message) => message)

    // console.log('createUserRes: ', response)
})

const initialState = {}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state, action) => {
            //loading
        })
        builder.addCase(registration.fulfilled, (state, action) => {

        })
        builder.addCase(registration.rejected, (state, action) => {
            //error
        })
    }
})

export default userSlice.reducer;
export const { } = userSlice.actions;