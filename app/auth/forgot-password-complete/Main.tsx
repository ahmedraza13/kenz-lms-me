"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/navigation';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { otpPattern, passwordPattern } from '../../core';
import axios from "axios"
import { CompanyAvatar, Copyright } from '../signin/Main';
import { theme } from "../../utils/muiTheme"
import { useSelector } from 'react-redux';
import AlertMUI from '@/app/mui/components/AlertMUI';
import PasswordMUI from '@/app/mui/components/PasswordMUI';

export default function ForgotPasswordComplete() {

    const router = useRouter()

    const currentUser = useSelector((state: any) => state?.user)

    const [otp, setOtp] = React.useState<string>('')
    const [clientErrorMessage, setClientErrorMessage] = React.useState<string | null>(null)
    const [clientSuccessMessage, setClientSuccessMessage] = React.useState<string | null>(null)
    const [password, setPassword] = React.useState<string | null>("")
    const [repeatPassword, setRepeatPassword] = React.useState<string | null>("")
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const handleChange = async (newValue: any) => {
        setOtp(newValue)
    }

    const resendOtp = async (email: any) => {

        try {

            setIsLoading(true)

            const response = await axios.post("/api/v1/auth/forgot-password", {
                cnic: currentUser?.globalContextEmail
            }, { withCredentials: true })

            setClientSuccessMessage(response.data.message)
            setTimeout(() => {
                setClientSuccessMessage(null)
            }, 2000);

            setIsLoading(false)

        } catch (error: any) {
            console.log(error);
            setIsLoading(false)
            setClientErrorMessage(error?.response?.data?.message)
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000);
        }

    }

    const handleSubmit = async (event: any) => {

        if (!otpPattern?.test(otp)) {
            setClientErrorMessage("Invalid otp code")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return;
        }

        if (!password || !repeatPassword) return

        if (!passwordPattern?.test(password) || !passwordPattern?.test(repeatPassword)) {
            setClientErrorMessage("Password must be alphanumeric and 8 to 24 characters long")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        if (password !== repeatPassword) {
            setClientErrorMessage("Passwords do not match")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        try {
            setIsLoading(true)

            const response = await axios.put(`/api/v1/auth/forgot-password-complete`, {
                email: currentUser?.globalContextEmail,
                otpCode: otp,
                password: password,
            }, { withCredentials: true })

            router.push("/auth/signin")
            setClientSuccessMessage(response.data.message)
            setTimeout(() => {
                setClientSuccessMessage(null)
            }, 2000)

            setIsLoading(false)
        } catch (error: any) {
            console.log(error);
            setIsLoading(false)
            setClientErrorMessage(error?.response?.data?.message)
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
        }
    }

    return (
        <>
            {
                clientErrorMessage && <AlertMUI status="error" text={clientErrorMessage} />
            }

            {
                clientSuccessMessage && <AlertMUI status="success" text={clientSuccessMessage} />
            }
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <CompanyAvatar />
                    <Typography component="h1" variant="h5">
                        Forgot Password
                    </Typography>
                    <Typography component="p" style={{
                        textAlign: "center",
                        marginTop: "16px",
                    }}>
                        Enter 6 digit code sent to: <b>{currentUser?.globalContextEmail}</b>
                    </Typography>
                    <Box sx={{ mt: 1, width: "100%" }}>
                        <MuiOtpInput length={6} value={otp} onChange={handleChange}
                            style={{
                                margin: "32px 0",
                            }}
                            gap="12px"
                        />
                        <PasswordMUI
                            label="New Password * "
                            onChange={(value: any) => setPassword(value)}
                            name="password"
                        />
                        <div className='p-[8px]'></div>
                        <PasswordMUI
                            label="Repeat New Password * "
                            onChange={(value: any) => setRepeatPassword(value)}
                            name="password"
                        />
                        <Typography component="p"
                            style={{
                                color: theme.palette.text.primary,
                                textDecoration: "underline",
                                textDecorationColor: theme.palette.text.primary,
                                cursor: "pointer",
                                marginTop: "16px",
                                textAlign: "right",
                            }}
                            onClick={() => {
                                resendOtp(currentUser?.globalContextEmail)
                            }}
                        >Resend OTP</Typography>
                        <Box style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "100%" }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {
                                    isLoading ?
                                        <>
                                            <span className="buttonLoader"></span>
                                            <span style={{
                                                textAlign: "center",
                                                paddingLeft: "4px"
                                            }}
                                            >Processing</span>
                                        </>
                                        :
                                        <>
                                            <span style={{
                                                width: "100%",
                                                textAlign: "center",
                                                paddingLeft: "4px"
                                            }}
                                            >Update Password</span>
                                        </>
                                }
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}