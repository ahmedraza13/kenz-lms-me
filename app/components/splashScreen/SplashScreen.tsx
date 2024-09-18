import React from 'react'
import logo from "../../../public/images/logo-black.png"
import Image from "next/image"

const SplashScreen = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-2 w-screen h-screen'>
                <Image src={logo} width={250} height={120} alt="logo"  />
            </div>
        </>
    )
}

export default SplashScreen