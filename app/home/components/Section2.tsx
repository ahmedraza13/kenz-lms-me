"use client"

import "./main.css";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const Card = ({ title, text, image, id }: any) => {

    const router = useRouter()

    return (
        <>
            <div className="card">
                <img src={image} alt="image" />
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Button
                        variant="contained" color="secondary"
                        style={{ width: "100%", marginTop: "1em", marginBottom: "1em", color: "#fff" }}
                        onClick={() => router.push(`/course/${id}`)}
                    >Learn more...</Button>
                </div>
            </div>
        </>
    )
}

const Section2 = () => {

    const cardOptions = [
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Basic HTML Programming",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum soluta omnis veniam? Quidem deserunt id hic. Excepturi voluptate corporis nulla dolore corrupti cupiditate laborum eveniet accusantium sit, ipsum nostrum non!",
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Digital Marketing Analytics",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum soluta omnis veniam? Quidem deserunt id hic. Excepturi voluptate corporis nulla dolore corrupti cupiditate laborum eveniet accusantium sit, ipsum nostrum non!",
        },
        {
            id: "3",
            image: "https://plus.unsplash.com/premium_photo-1720468041652-6e53b3936e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Digital Marketing Strategy",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum soluta omnis veniam? Quidem deserunt id hic. Excepturi voluptate corporis nulla dolore corrupti cupiditate laborum eveniet accusantium sit, ipsum nostrum non!",
        },
    ]

    return (
        <>
            <div className="section-2">
                <h2>Explore top courses</h2>
                <div className="cards-cont">
                    {cardOptions?.map((option: any, i: number) => <Card key={i} title={option?.title} text={option?.text} image={option?.image} id={option?.id} />)}
                </div>
                <div className="button-end">
                    <Button color="primary" variant="contained" style={{ color: "#fff", paddingLeft: "4em", paddingRight: "4em" }}>View all courses</Button>
                </div>
            </div>
        </>
    )
}

export default Section2;
