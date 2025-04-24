import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";
import logo from "../../Assets/logoMe1.png";
import logo2 from "../../Assets/logoMe2.png";
import { Link } from "react-router-dom";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function Navbar() {
    const toggleMenuRef = useRef(null);
    const currentLogoRef = useRef(logo);
    const [currentLogo, setCurrentLogo] = React.useState(logo); // just for logo toggle

    useEffect(() => {
        CustomEase.create("smoothEase", "0.625, 0.05, 0, 1");

        const interval = setInterval(() => {
            const nextLogo = currentLogoRef.current === logo ? logo2 : logo;
            currentLogoRef.current = nextLogo;
            setCurrentLogo(nextLogo);
        }, 400);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const squares = document.querySelectorAll(".squareBottom");

        squares.forEach(square => {
            const navItemLink = square.closest(".nav__item")?.querySelector("a");

            square.addEventListener("mouseenter", () => {
                if (navItemLink) navItemLink.style.color = "white";
            });

            square.addEventListener("mouseleave", () => {
                if (navItemLink) navItemLink.style.color = "black";
            });
        });

        return () => {
            squares.forEach(square => {
                const navItemLink = square.closest(".nav__item")?.querySelector("a");

                square.removeEventListener("mouseenter", () => {
                    if (navItemLink) navItemLink.style.color = "white";
                });

                square.removeEventListener("mouseleave", () => {
                    if (navItemLink) navItemLink.style.color = "black";
                });
            });
        };
    }, []);

    useEffect(() => {
        gsap.set(".menu", { clipPath: "inset(100% 0% 0% 0%)" });
    }, []);

    const openMenu = () => {
        const menuEl = document.querySelector(".menu");
        const toggleText1 = document.getElementById("open__menu");
        const toggleText2 = document.getElementById("close__menu");

        menuEl.classList.add("open");

        gsap.fromTo(
            ".menu",
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.6,
                ease: "power4.inOut"
            }
        );

        toggleText1.style.color = "white";
        toggleText2.style.color = "white";

        gsap.to("#open__menu, #close__menu", {
            top: "-100%",
            ease: "power3.out",
            duration: 0.5
        });
    };

    const closeMenu = () => {
        const menuEl = document.querySelector(".menu");
        const toggleText1 = document.getElementById("open__menu");
        const toggleText2 = document.getElementById("close__menu");

        gsap.to(".menu", {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.6,
            ease: "power4.inOut",
            onComplete: () => {
                menuEl.classList.remove("open");
            }
        });

        toggleText1.style.color = "black";
        toggleText2.style.color = "black";

        gsap.to("#open__menu, #close__menu", {
            top: "0%",
            ease: "power3.out",
            duration: 0.5
        });
    };

    const handleMenuToggle = () => {
        const menuEl = document.querySelector(".menu");
        if (menuEl.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const navItems = [
        { text: "H0me", url: "/", strikeThrough: false, unclickable: false },
        { text: "Ab0ut", url: "/about", strikeThrough: true, unclickable: true },
        { text: "W0rk", url: "/work", strikeThrough: true, unclickable: true },
        { text: "C0ntact", url: "/contact", strikeThrough: true, unclickable: true }
    ];


    return (
        <>
            {/* Mobile Menu */}
            <div className="toggle__menu__wrap">
                <div className="toggle__menu">
                    <div onClick={handleMenuToggle} className="btn__menu">
                        <span id="open__menu">MENU</span>
                        <span id="close__menu">CLOSE</span>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div className="menu__navigation">
                    <div className="wrapper__alignment">
                        {navItems.map((item, index) => (
                            <div className="menu__item" key={index}>
                                <div className="wrap__menu__item">
                                    <Link
                                        to={item.url}
                                        className={item.unclickable ? "unclick" : ""}
                                        style={item.strikeThrough ? { textDecoration: "line-through" } : {}}
                                    >
                                        {item.text}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="socials">
                    <div className="wrap__socials">
                        <div className="title__socials">
                            <span>Curious about what I’ve been working on lately?</span>
                        </div>
                        <div className="links__socials">
                            <a href="https://www.instagram.com/codedbymohit/">Instagram</a>
                            <a href="https://x.com/codedbymohit">X (Twitter)</a>
                            <a href="https://www.linkedin.com/in/codedbymohit/">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="main-navbar">
                <div className="navbar">
                    <div className="logoSide">
                        <Link to={"/"}><img src={currentLogo} alt="logo animation" /></Link>
                    </div>
                    <div className="navigation">
                        {navItems.map((item, index) => (
                            <div className="nav__item" key={index}>
                                <div className="wrap__nav__item">
                                    <div className="squareBottom">
                                        <Link
                                            to={item.url}
                                            className={item.unclickable ? "unclick" : ""}
                                            style={item.strikeThrough ? { textDecoration: "line-through" } : {}}
                                        >
                                            {item.text}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
