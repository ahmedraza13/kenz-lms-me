
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    user: null,
    isLogin: null,
    isAdminDrawerOpen: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action?.payload
            state.isLogin = true
        },
        logout: (state: any) => {
            state.user = null
            state.isLogin = false
        },
        setGlobalContext: (state, action) => {
            state.user = {
                ...state.user, ...action.payload
            }
        },
        setIsAdminDrawerOpen: (state, action) => {
            state.isAdminDrawerOpen = action.payload
        }
    }
})

export const { login, logout, setGlobalContext, setIsAdminDrawerOpen } = userSlice.actions

export default userSlice.reducer