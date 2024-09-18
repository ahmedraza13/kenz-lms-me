"use client"

import "./main.css"
import { useState } from "react"
import { Button, IconButton, TextField } from "@mui/material"
import { Search } from "@mui/icons-material"
import { RxCross2 } from "react-icons/rx";
import Image from "next/image"
import man from "../../../public/images/man.png"

const SearchBar = ({ text, setText }: any) => {

    return (
        <>
            <TextField
                label=""
                placeholder="Search our 4000+ courses"
                id="fullWidth"
                className="feedSearchinput"
                InputProps={{
                    endAdornment: (
                        text ?
                            <IconButton onClick={() => setText("")}><RxCross2 /></IconButton> : <Search />
                    ),
                    sx: { borderRadius: '100px', width: "400px", padding: "0 1em" },
                }}
                variant="outlined"
                value={text}
                onChange={(e: any) => setText(e?.target?.value)}
                sx={{ background: "#fff", borderRadius: "200px" }}
            />
        </>
    )

}

const Section1 = () => {

    const [searchInput, setSearchInput] = useState<string>("")

    const searchCourses = async (e: any) => {
        e?.preventDefault()
        if (!searchInput || searchInput?.trim() === "") return
    }

    return (
        <>
            <div className="section-1">
                <>
                    <div className="left">
                        <h1>Bring your goals <br /> into focus</h1>
                        <p>KI Academy offers online courses and programs that <br /> prepare you for every career moment</p>
                        <form onSubmit={searchCourses}>
                            <SearchBar text={searchInput} setText={setSearchInput} />
                            {/* <Button type="submit" variant="outlined" color="primary" sx={{ fontSize: "1.1em", backgroundColor: "#fefefe" }}> <Search sx={{ marginRight: "0.2em", marginLeft: "-0.2em" }} /> Search</Button> */}
                            <Button type="submit" style={{ fontSize: "1.1em", backgroundColor: "#fefefe", paddingRight: "3em", paddingLeft: "3em" }}> <Search sx={{ marginRight: "0.2em", marginLeft: "-0.2em" }} /> Search</Button>
                        </form>
                    </div>
                </>
                {/* <>
                    <div className="right">
                        <Image src={man} alt="man" width={100} height={100} />
                    </div>
                </> */}
            </div>
        </>
    )
}

export default Section1