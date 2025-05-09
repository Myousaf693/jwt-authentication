import { createSlice } from "@reduxjs/toolkit";


const initialUser = localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user')):null;


const initialToken = localStorage.getItem('token') || null;


const initialState = {
    token: initialToken,
    user: initialUser,
    isLoggedIn: !!initialToken
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuth:(state, action) =>{
            const {token, user} = action.payload;
            state.token =token;
            state.user = user;
            state.isLoggedIn = true;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user))
        },
        logout:(state)=>{
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user')
        },
    },
});
export const {setAuth, logout} = authSlice.actions;
export default authSlice.reducer;