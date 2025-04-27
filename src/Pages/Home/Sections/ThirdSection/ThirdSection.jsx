import React, { useEffect } from "react";
import gsap from "gsap"
import "./ThirdSection.css"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function ThirdSection() {

    return (
        <div className="main-third-section">
            <div className="thirdSection">
                <h1>Hello</h1>
            </div>
        </div>

    )
}