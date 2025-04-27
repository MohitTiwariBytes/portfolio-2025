import React, { useEffect } from "react";
import gsap from "gsap"
import "./SecondSection.css"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function SecondSection() {

    useEffect(() => {
        gsap.to(".main-second-section", {
            top: "-200px",
            boxShadow: "0px -26px 118px -26px rgba(0, 0, 0, 0.27)",

            duration: 1,
            scrollTrigger: {
                trigger: ".main-second-section",
                start: "top bottom",
                scrub: true
            }
        })

        // gsap.to(".main-first-section", {
        //     background: "hsla(220, 13%, 0%, 0.3) 40%",
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".main-second-section",
        //         start: "top bottom",
        //         scrub: true
        //     }
        // })
    }, [])

    return (
        <div className="main-second-section">
            <div className="secondSection">
                <h1>Hi</h1>
            </div>
        </div>

    )
}