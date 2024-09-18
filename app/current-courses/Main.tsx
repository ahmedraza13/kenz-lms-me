"use client"

import "./Main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import CenterHeading from "./components/Section1"
import React from 'react'
import SearchAndDropdowns from "./components/Section2"
import Card from "./components/Card"

const Main = () => {
    return (
        <>
            <Header />
            <CenterHeading />
            <SearchAndDropdowns />
            <Card />
            <Footer />
        </>
    )
}

export default Main