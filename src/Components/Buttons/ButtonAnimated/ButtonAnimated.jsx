import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./ButtonAnimated.css";

export default function ButtonAnimated({
    text,
    onClick,
    color,
    secondaryColor,
    textColor,
    secondaryTextColor,
    borderRadius,
    secondaryText
}) {
    const btnRef = useRef(null);
    const innerBoxRef = useRef(null);
    const [adjustedBorderRadius, setAdjustedBorderRadius] = useState(borderRadius);

    useEffect(() => {
        const adjustRadius = () => {
            const numericRadius = parseFloat(borderRadius);
            const unit = borderRadius.toString().replace(numericRadius, '') || 'px';

            if (window.innerWidth < 434) {
                setAdjustedBorderRadius(`${Math.max(numericRadius - 5, 0)}${unit}`);
            } else {
                setAdjustedBorderRadius(borderRadius);
            }
        };

        adjustRadius(); // Set on mount
        window.addEventListener("resize", adjustRadius);
        return () => window.removeEventListener("resize", adjustRadius);
    }, [borderRadius]);

    useEffect(() => {
        const btn = btnRef.current;
        const innerBox = innerBoxRef.current;

        const handleEnter = () => {
            gsap.fromTo(
                innerBox,
                { clipPath: "inset(100% 0% 0% 0%)" },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.6,
                    ease: "power4.inOut"
                }
            );
        };

        const handleLeave = () => {
            gsap.to(
                innerBox,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                    duration: 0.6,
                    ease: "power4.inOut",
                }
            );
        };

        btn.addEventListener("mouseenter", handleEnter);
        btn.addEventListener("mouseleave", handleLeave);

        return () => {
            btn.removeEventListener("mouseenter", handleEnter);
            btn.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            style={{
                background: color,
                color: textColor,
                borderRadius: adjustedBorderRadius
            }}
            className="btn__animated"
        >
            {text}
            <div
                ref={innerBoxRef}
                style={{ background: secondaryColor }}
                className="innerBox"
            >
                <span style={{ color: secondaryTextColor }}>{secondaryText || text}</span>
            </div>
        </button>
    );
}
