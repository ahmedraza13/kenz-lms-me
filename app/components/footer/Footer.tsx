"use client"

import "./Footer.css"
import logo from "../../../public/images/logo-white.png"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import Image from "next/image"

const FooterList = ({ title, options }: any) => {

    const router = useRouter()

    return (
        <>
            <div className="footerList">
                <h2>{title}</h2>
                {
                    options?.map((option: any, i: number) => (
                        <p key={i} onClick={() => router.push(option?.path)}>{option?.label}</p>
                    ))
                }
            </div>
        </>
    )
}

const Footer = () => {

    const footerOptions = [
        {
            title: "More Information",
            options: [
                { label: "About Us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Course Reactivation", path: "/course-reactivation" },
                { label: "Blog", path: "/blog" },
                { label: "KI Learning", path: "/ki-learning" },
                { label: "Contact Us", path: "/contact" },
            ]
        },
        {
            title: "Help",
            options: [
                { label: "FAQ", path: "/frequently-asked-questions" },
                { label: "Digital Badges", path: "/digital-badges" },
                { label: "Code Of Honour", path: "/code-of-honour" },
                { label: "Peer Assesment", path: "/peer-assesment" },
                { label: "Help Desk", path: "/help-desk" },
            ]
        },
        {
            title: "Follow Us",
            options: [
                { label: "Twitter", path: "/twitter" },
                { label: "Facebook", path: "/facebook" },
                { label: "Community Network", path: "/community-network" },
            ]
        },
    ]

    const sendEmail = async (e: any) => {
        e?.preventDefault()
    }

    return (
        <>
            <div className="footer">
                <div className="second">
                    <>
                        <div className="left">
                            <Image src={logo} alt="logo" width={100} height={100}  />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nesciunt quo amet culpa enim fuga! Ipsa, pariatur? Nulla voluptates animi saepe explicabo aliquid est odit rerum, odio quam facere. Placeat!</p>
                        </div>
                    </>
                    <>
                        <div className="right">
                            {
                                footerOptions?.map((option: any, i: any) => <FooterList title={option?.title} options={option?.options} key={i} />)
                            }
                        </div>
                    </>
                </div>
                <div className="first">
                    <h2>Do you need help with anything?</h2>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="Email Address" />
                        <Button variant="contained" color="primary" type="submit">Subscribe</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer