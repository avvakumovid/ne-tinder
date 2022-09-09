
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API, LoginBody, RegistrationBody } from '../../api/api';

import { LikeUser, UserState } from './../../types/user.type';

export const registration = createAsyncThunk('user/registration', async function (body: RegistrationBody) {
    const response = await API.registration(body)
    return response
})


export const login = createAsyncThunk('user/login', async (body: LoginBody) => {
    const response = await API.login(body)
    return response

})

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (token: string) => {
    return await API.getUserInfo(token)
})
const initialState: UserState = {
    authToken: '',
    isLoading: false,
    error: '',
    _id: '',
    name: '',
    gender: '',
    age: -1,
    location: [],
    myLikes: [],
    meLikes: [],
    matches: [],
    pictures: [],

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string>) {
            state.authToken = action.payload
        },
        addMessageToChat(state, action) { }
    },
    extraReducers: (builder) => {

        //REGISTRATION
        builder.addCase(registration.pending, (state, action) => {
            //loading
        })
        builder.addCase(registration.fulfilled, (state, action) => {

        })
        builder.addCase(registration.rejected, (state, action) => {
            //error
        })

        //LOGIN
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.authToken = action.payload.access_token
            state.isLoading = false

        })
        builder.addCase(login.rejected, (state, action) => {
        })

        //GET USER INFO
        builder.addCase(getUserInfo.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUserInfo.fulfilled, (state, action) => {

            const { _id, name, gender, age, location, myLikes, meLikes, matches, pictures, } = action.payload
            state._id = _id
            state.name = name
            state.gender = gender
            state.age = age
            state.location = location
            state.myLikes = myLikes
            state.meLikes = meLikes
            state.matches = matches
            state.pictures = pictures
        })
        builder.addCase(getUserInfo.rejected, (state, action) => {

        })
    }
})


export const { setAuthToken } = userSlice.actions;
export default userSlice.reducer;