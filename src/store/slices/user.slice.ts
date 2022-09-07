
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API, LoginBody, RegistrationBody } from '../../api/api';
// import socket from './../../socket';

export const registration = createAsyncThunk('user/registration', async function (body: RegistrationBody) {

    const response = await API.registration(body)
    return response
})


export const login = createAsyncThunk('user/login', async (body: LoginBody) => {

    const response = await API.login(body)
    return response

})

const initialState = {
    authToken: '',
    isLoading: false,
    error: '',

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string>) {
            state.authToken = action.payload
        }
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
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action)
            state.authToken = action.payload.access_token
        })
        builder.addCase(login.rejected, (state, action) => {

        })
    }
})


export const { setAuthToken } = userSlice.actions;
export default userSlice.reducer;