"use client"

import "./main.css"
import { useRouter } from "next/navigation"
import image from "../../../public/images/section-5.avif"
import Image from "next/image"
import { Button } from "@mui/material"

const Section5 = () => {

    const router = useRouter()

    return (
        <>
            <div className="section-5">
                <div className="left">
                    <Image src={image} alt="image" width={100} height={100}  />
                </div>
                <div className="right">
                    <h1>Discover world of KI Academy expertise</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam facilis quo cumque, explicabo iure deleniti dolorem dolore enim illo nemo quos tempora dolorum beatae nostrum repellendus vel reiciendis voluptas.</p>
                    <Button
                        onClick={() => router.push("/auth")}
                        color="secondary" variant="contained"
                        style={{ paddingLeft: "4em", paddingRight: "4em" }}
                    >Get enrolled today</Button>
                </div>
            </div>
        </>
    )
}

export default Section5