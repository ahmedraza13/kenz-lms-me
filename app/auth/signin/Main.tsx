"use client"

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { emailPattern, passwordPattern, webUrl } from '../../core';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux"
import { login } from "../../redux/user"
import logo from "../../../public/images/logo-black.png"
import Image from "next/image"
import AlertMUI from '@/app/mui/components/AlertMUI';
import PasswordMUI from '@/app/mui/components/PasswordMUI';

export const CompanyAvatar = () => {

    const router = useRouter()

    return (
        <Image src={logo} width={50} height={50} objectFit='cover' alt="logo" 
            className='w-[80px] h-[80px] object-cover object-center cursor-pointer'
            onClick={() => router.push("/")}
        />
    )
}

export function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" target="_blank" href={webUrl} style={{
                textDecoration: "none"
            }}>
                KI Academy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Main() {

    const [password, setPassword] = React.useState<string>("")
    const [clientErrorMessage, setClientErrorMessage] = React.useState<string | null>(null)
    const [clientSuccessMessage, setClientSuccessMessage] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = async (e: any) => {

        e.preventDefault();
        const data = new FormData(e?.currentTarget);
        const email: any = data.get('email')

        if (!email || !password || !emailPattern?.test(email) || !passwordPattern?.test(password)) {
            setClientErrorMessage("Email or Password incorrect")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        try {

            setIsLoading(true)

            const response = await axios.post("/api/v1/auth/signin", {
                cnic: email,
                password: password,
            }, { withCredentials: true })

            setIsLoading(false)
            setClientSuccessMessage(response.data.message)
            dispatch(login(response.data.data))
            if (response?.data?.data?.isAdmin) {
                router.push("/admin/students")
            } else {
                router.push("/")
            }
            setTimeout(() => {
                setClientSuccessMessage(null)
            }, 2000);

        } catch (error: any) {
            console.error(error);
            setIsLoading(false)
            setClientErrorMessage(error?.response?.data?.message)
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
        }

    };

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: "100%" }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            autoFocus
                            type="email"
                            name="email"
                            style={{
                                marginBottom: "16px",
                            }}
                        />
                        <PasswordMUI
                            label="Password * "
                            required
                            onChange={(value: any) => setPassword(value)}
                            name="password"
                        />
                        <FormControlLabel style={{
                            marginTop: "16px"
                        }}
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={isLoading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {
                                isLoading ?
                                    <>
                                        <span className="buttonLoader"></span>
                                        Processing
                                    </>
                                    : "Sign In"
                            }
                        </Button>
                        <Grid container>
                            <Grid item xs style={{ marginRight: "16px" }}>
                                <Link className="cursor-pointer"
                                    onClick={() => router?.push("/auth/forgot-password")}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/auth/signup" variant="body2">
                                    Dont have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}