import React from "react";
import "./Home.css"
import FirstSection from "./Sections/FirstSection/FirstSection";
import Navbar from "../../Components/Navbar/Navbar";
import SecondSection from "./Sections/SecondSection/SecondSection";
import ThirdSection from "./Sections/ThirdSection/ThirdSection";

export default function Home() {
    return (
        <div className="main-home-page">
            <Navbar></Navbar>
            <div className="homePage">
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
                {/* <ThirdSection></ThirdSection> */}
            </div>
        </div>
    )
}