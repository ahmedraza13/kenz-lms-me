"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { userNamePattern, emailPattern, passwordPattern, baseUrl } from '../../core';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRouter } from 'next/navigation';
import { CompanyAvatar, Copyright } from '../signin/Main';
import { Button } from '@mui/material';
import AlertMUI from '@/app/mui/components/AlertMUI';
import PasswordMUI from '@/app/mui/components/PasswordMUI';

export const StudentOrTutor = ({ state, setState }: any) => {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={state}
                onChange={(e: any) => setState(e?.target?.value)}
            >
                <FormControlLabel value="tutor" control={<Radio />} label="Tutor" />
                <FormControlLabel value="student" defaultChecked control={<Radio />} label="Student" />
            </RadioGroup>
        </FormControl>
    );
}

export default function SignUp() {

    const router = useRouter()

    const [password, setPassword] = React.useState<string>("")
    const [repeatPassword, setRepeatPassword] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")
    const [clientErrorMessage, setClientErrorMessage] = React.useState<string | null>(null)
    const [clientSuccessMessage, setClientSuccessMessage] = React.useState<string | null>(null)
    const [role, setRole] = React.useState<string>("student")
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const handleSubmit = async (event: any) => {

        event?.preventDefault();
        const data = new FormData(event?.currentTarget);

        const firstName: any = data.get('firstName')
        const lastName: any = data.get('lastName')
        const email: any = data.get('email')

        if (!firstName || !userNamePattern.test(firstName)) {
            setClientErrorMessage("First Name must between 2 to 15 characters long")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        if (!lastName || !userNamePattern.test(lastName)) {
            setClientErrorMessage("Last Name must between 2 to 15 characters long")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        if (!email || !emailPattern.test(email)) {
            setClientErrorMessage("Email pattern is invalid")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        if (!phoneNumber || phoneNumber?.trim() === "") {
            setClientErrorMessage("Phone number is required")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        if (!passwordPattern.test(password)) {
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

        const roles = ["tutor", "student"]

        if (!role || !roles?.includes(role)) {
            setClientErrorMessage("Role must be a Tutor or Student")
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
        }

        const dataToSend = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role_id: role === "student" ? "3" : "2"
        }

        setIsLoading(true)

        try {

            const resp = await axios.post(`${baseUrl}/users/create`, dataToSend, {
                withCredentials: true,
            });

            console.log("resp", resp)

            router.push("/")

            setTimeout(() => {
                setClientSuccessMessage(null)
            }, 2000)

        } catch (error) {
            setIsLoading(false)
            setTimeout(() => {
                setClientErrorMessage(null)
            }, 2000)
            return
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
                    <Typography component="h1" variant="h5" sx={{ marginTop: "0.8em" }}>
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <StudentOrTutor state={role} setState={setRole} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    type="number"
                                    onChange={(e: any) => setPhoneNumber(e?.target?.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordMUI
                                    name="password"
                                    label="Password * "
                                    onChange={(value: any) => setPassword(value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordMUI
                                    name="repeatPassword"
                                    label="Confirm Password * "
                                    onChange={(value: any) => setRepeatPassword(value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={isLoading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {
                                isLoading ? <span className="buttonLoader"></span> : null
                            }
                            {
                                isLoading ? "Processing" : "Sign Up"
                            }
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/auth/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </>
    );
}