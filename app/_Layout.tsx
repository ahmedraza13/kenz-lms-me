"use client"

import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/muiTheme';
import { useSelector } from 'react-redux';
import SplashScreen from './components/splashScreen/SplashScreen';

const Layout = ({ children }: any) => {

    const isLogin = useSelector((state: any) => state?.isLogin)

    return (
        <>
            <ThemeProvider theme={theme}>
                {isLogin == null ? <SplashScreen /> : children}
            </ThemeProvider>
        </>
    )
}

export default Layout