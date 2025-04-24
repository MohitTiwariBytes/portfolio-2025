import React from "react";
import "./Home.css"
import FirstSection from "./Sections/FirstSection/FirstSection";
import Navbar from "../../Components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="main-home-page">
            <Navbar></Navbar>
            <div className="homePage">
                <FirstSection></FirstSection>
            </div>
        </div>
    )
}