"use client"

import "./main.css";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { MdFileDownloadDone } from "react-icons/md";
const Optcom = ({ text }: any) => {

    return (
        <>
            <p><MdFileDownloadDone /> {text}</p>
        </>
    )

}

const Section4 = () => {

    const router = useRouter()

    const options = [
        "Full time access",
        "20+ downloadable resources",
        "Certificate of completion",
        "Free trial 7 days"
    ]

    return (
        <>
            <div className="section-4">
                <h2>We have the best instructors available <br /> in the city</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Eaque veritatis commodi laborum saepe rem ratione? Minima fugiat, <br />
                    ab ipsum tempore atque inventore deleniti quam, assumenda debitis <br />
                    sunt aliquam, quos consequuntur!
                </p>
                <div>
                    {
                        options?.map((option: any, i: number) => <Optcom text={option} key={i} />)
                    }
                </div>
                <Button variant="contained" color="secondary" onClick={() => router.push("/auth")}
                    sx={{
                        fontSize: "1.2em",
                        marginTop: "1.5em",
                        marginLeft: "1em",
                        width: "15em"
                    }}
                >Get Enrolled Today</Button>
            </div >
        </>
    )
}

export default Section4;
