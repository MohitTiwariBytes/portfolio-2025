import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./FirstSection.css";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import ButtonAnimated from "../../../../Components/Buttons/ButtonAnimated/ButtonAnimated";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

export default function FirstSection() {
  const mainText = "Sleek websites. Real results. No shortcuts. No bullsh#t.";
  const fullSmallText =
    "I am Mohit Tiwari, A 14 year old developer from India, who loves to develop awesome sites and sleek animations. I not only develop websites, I put lives in these small little texts through my skills.";
  const shortSmallText =
    "I'm Mohit, a 14 y/o developer from India who builds sleek, animated websites full of life.";
  const descText =
    "I don’t just aim for good-looking websites—I aim for experiences that leave an impression. With every line of code, I focus on design harmony, smooth interactions, and visual storytelling that actually feels alive.";
  const marqueeText =
    "Gamer ✦ Developer ✦ Designer ✦ React ✦ GSAP ✦ Portfolio ✦ 2025 ✦ ";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainTextSplit = mainText.split(" ");
  const descTextSplit = descText.split(" ");
  const smallTextSplit = (isMobile ? shortSmallText : fullSmallText).split(" ");

  useEffect(() => {
    CustomEase.create("smoothEase", ".89, .08, .21, 1.01");
    gsap.set(".notice", { opacity: 0 });
    gsap.fromTo(
      `.text__main div span`,
      { top: "200%" },
      { top: "0", ease: "smoothEase", stagger: 0.02, duration: 1.3 }
    );
    gsap.fromTo(
      `.text__small div span`,
      { top: "200%" },
      {
        top: "0",
        ease: "smoothEase",
        stagger: 0.01,
        duration: 1.3,
        delay: 1,
        onComplete: () => {
          gsap.set(".notice", { opacity: 1 });
          gsap.to(".notice", {
            opacity: 0,
            duration: 0,
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.4,
          });
        },
      }
    );
    gsap.fromTo(
      `.small__desc__text div span`,
      { top: "200%" },
      { top: "0", ease: "smoothEase", stagger: 0.01, duration: 1.3, delay: 2.5 }
    );
    gsap.fromTo(
      ".socials_desktop a",
      { opacity: "0" },
      { opacity: "1", duration: 1, ease: "ease", delay: 3.5, stagger: "0.09" }
    );
    gsap.fromTo(
      `.btn__first__section button`,
      { opacity: "0" },
      { opacity: "1", duration: 1, ease: "ease", delay: 2 }
    );
    gsap.fromTo(
      `.marquee__section`,
      { opacity: 0 },
      { opacity: 1, ease: "ease", stagger: 0.01, duration: 1, delay: 2 }
    );
  }, [isMobile]);

  return (
    <div
      className="main-first-section"
      style={{ minHeight: `${screenHeight}px` }}
    >
      <div className="firstSection">
        <div className="top__left">
          <div className="text__main">
            {mainTextSplit.map((word, index) => (
              <div
                key={index}
                className="wrapper__text"
                style={{ overflow: "hidden" }}
              >
                <span>{word}</span>
              </div>
            ))}
          </div>
          <div className="text__small">
            {smallTextSplit.map((word, index) => (
              <div
                key={index}
                className="wrapper__text"
                style={{ overflow: "hidden" }}
              >
                <span>{word}</span>
              </div>
            ))}
          </div>
          <div className="btn__first__section">
            <ButtonAnimated
              onClick={() => {
                window.location.href = "mailto:mohittiwariis97@gmail.com";
              }}
              secondaryText={"Let's go!"}
              color={"transparent"}
              textColor={"black"}
              borderRadius={"10px"}
              text={"Get in touch"}
              secondaryColor={"black"}
              secondaryTextColor={"white"}
            ></ButtonAnimated>
          </div>
        </div>
        <div className="projects">
          <span>SELECTED PROJECTS</span>
          <div className="projects-group">
            <a href="https://re-regrese.cz">
              Regrese® - <z>w/ALA Design Studio</z>
            </a>
            <a href="https://quickcopies.com">
              QuickCopies - <z>w/SHVDOW</z>
            </a>
            <a href="https://coding4good.in">
              Coding4Good - <z>Independent Work</z>
            </a>
          </div>
        </div>
        <div className="top__right">
          <div className="small__desc__text">
            {descTextSplit.map((word, index) => (
              <div
                key={index}
                className="wrapper__text"
                style={{ overflow: "hidden", height: "1.1em" }}
              >
                <span>{word}</span>
              </div>
            ))}
          </div>
          <div className="socials_desktop">
            <a href="https://www.instagram.com/codedbymohit/">Instagram</a>
            <a href="https://www.linkedin.com/in/codedbymohit/">Linkedin</a>
            <a href="https://x.com/codedbymohit">X (Twitter)</a>
          </div>
        </div>
        <div className="marquee__section">
          <Marquee speed={40} gradient={false} direction="right">
            <span style={{ marginRight: "2rem" }}>
              {marqueeText.repeat(10)}
            </span>
          </Marquee>
          <Marquee speed={40} gradient={false} direction="left">
            <span style={{ marginRight: "2rem" }}>
              {marqueeText.repeat(10)}
            </span>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
