"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Main.css"
import React from 'react'
import Header from "../../components/header/Header";
import Section1 from "./components/Section1";
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import LiveSessionCards from './components/livesessioncards';

const Main = ({ courseId }: any) => {

    return (
        <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <LiveSessionCards/>
        </>
    )
}

export default Main