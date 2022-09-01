
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, RegistrationBody } from '../../api/api';
// import socket from './../../socket';

export const registration = createAsyncThunk('user/registration', async (body: RegistrationBody) => {

    const response = await API.registration(body)
    return response
})

const initialState = {
    isLoading: false,
    error: '',

}
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


export const { } = userSlice.actions;
export default userSlice.reducer;