import { createSlice } from '@reduxjs/toolkit';
import authOperetions from './authOperation';

const initialState = { 
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:{
        [authOperetions.register.fulfilled](state, {payload}){
            state.user = {
                name: payload.name,
                email: payload.email,
            };
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperetions.logIn.fulfilled](state, {payload}){
            state.user = {
                name: payload.name,
                email: payload.email,
            };
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperetions.logOut.fulfilled](state){
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperetions.fetchCurrentUser.pending](state){
            state.isFetchingCurrentUser = true;
        },
        [authOperetions.fetchCurrentUser.fulfilled](state, {payload}){
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperetions.fetchCurrentUser.rejected](state){
            state.isFetchingCurrentUser = true;
        },

    },
});

export default authSlice.reducer;