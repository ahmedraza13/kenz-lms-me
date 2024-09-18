"use client"

import "./main.css"
import brainImage from "../../../public/images/section-6-brain.png"
import Image from "next/image"

const List = ({ title, text }: any) => {

    return (
        <>
            <h2>{title}</h2>
            <p>{text}</p>
        </>
    )

}

const Section6 = () => {

    const section_6_Data = [
        {
            title: "Experience",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi debitis, quia possimus aperiam mollitia."
        },
        {
            title: "Practice",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi debitis, quia possimus aperiam mollitia."
        },
        {
            title: "Apply",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi debitis, quia possimus aperiam mollitia."
        },
    ]

    return (
        <>
            <div className="section-6">
                <div className="left">
                    <h1>Learn and Grow</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi debitis, quia possimus aperiam mollitia. Minus tenetur ipsam iusto quisquam, rerum aut reiciendis nostrum ratione. Iure repellendus temporibus error obcaecati?</p>
                    {
                        section_6_Data?.map((data: any, i: number) => <List key={i} title={data?.title} text={data?.text} />)
                    }
                </div>
                <div className="right">
                    <Image src={brainImage} alt="brain-image" width={100} height={100}  />
                </div>
            </div>
        </>
    )
}

export default Section6