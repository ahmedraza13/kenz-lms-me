"use client"

import "./Main.css"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { CompanyAvatar, Copyright } from './signin/Main';
import { Button } from '@mui/material';
import AlertMUI from "@/app/mui/components/AlertMUI";

export default function Main() {

    const router = useRouter()

    const [clientErrorMessage, setClientErrorMessage] = React.useState<string | null>(null)
    const [clientSuccessMessage, setClientSuccessMessage] = React.useState<string | null>(null)

    console.log(setClientErrorMessage, setClientSuccessMessage)

    const googleLogin = async () => {

        console.log("google login")

    };

    const facebookLogin = async () => {

        console.log("facebook login")

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
                        KI Academy
                    </Typography>
                </Box>
                <div className="authentication-buttons">
                    <Button style={{ color: "#fff", width: "100%" }}
                        onClick={() => router.push("/auth/signin")}
                        color='primary' variant='contained'
                    >
                        <MdOutlineEmail style={{ fontSize: "1.3em", marginRight: "0.5em", marginTop: "-0.2em" }} />
                        Continue With Email
                    </Button>
                    <Button style={{ width: "100%", color: "#454545", border: "2px solid #454545", margin: 0 }}
                        onClick={googleLogin} color='primary' variant='outlined'
                    >
                        <FaGoogle style={{ fontSize: "1.3em", marginRight: "0.5em", marginTop: "-0.2em" }} />
                        Continue With Google
                    </Button>
                    <Button style={{ width: "100%", color: "#454545", border: "2px solid #454545", marginBottom: 0 }}
                        onClick={facebookLogin} color='primary' variant='outlined'
                    >
                        <FaFacebook style={{ fontSize: "1.3em", marginRight: "0.5em", marginTop: "-0.2em" }} />
                        Continue With Facebook
                    </Button>
                </div>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </>
    );
}