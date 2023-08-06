import React, {useState} from 'react';
import ThemeToggleContext from "~/styles/themes/toogle";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Switch = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
`

const Circle = (props: any) => {
    return (
        <motion.circle
            id="Oval"
            r="17.5px"
            initial={false}
            fill={"#333"}
            {...props}
        />
    );
};

const AnimatedDarkModeToggler = () => {
    const {toggleTheme, isDarkTheme} = React.useContext(ThemeToggleContext);
    const colorMode = isDarkTheme ? "moon" : "sun";

    return (
        <Switch onClick={toggleTheme}>
            <motion.svg
                width="100px"
                height="100px"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                variants={{
                    moon: { rotate: 0 },
                    sun: { rotate: colorMode === "sun" && 180 }
                }}
                initial={false}
                animate={colorMode}
                style={{ originX: "50%", originY: "50%", translateY: "0%" }}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    type: "spring",
                    stiffness: 50
                }}
            >
                <Circle
                    cx="200.5"
                    cy="292.5px"
                    variants={{
                        moon: { cy: "220.5px", scale: 0, opacity: 0 },
                        sun: { cy: "292.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    animate={colorMode}
                    transition={{
                        duration: 0.2,
                        delay: colorMode === "sun" && 0.1,
                        type: "spring",
                        stiffness: 100
                    }}
                />
                <Circle
                    cx="114.5px"
                    cy="251.5"
                    variants={{
                        moon: { cx: "150px", scale: 0, opacity: 0 },
                        sun: { cx: "114.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    animate={colorMode}
                    transition={{
                        duration: 0.2,
                        delay: colorMode === "sun" && 0.2,
                        type: "spring",
                        stiffness: 100
                    }}
                />
                <Circle
                    cx="114.5px"
                    cy="169.5px"
                    variants={{
                        moon: { cx: "150px", scale: 0, opacity: 0 },
                        sun: { cx: "114.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    animate={colorMode}
                    transition={{
                        duration: 0.2,
                        delay: colorMode === "sun" && 0.3,
                        type: "spring",
                        stiffness: 100
                    }}
                />

                <Circle
                    cx="200.5"
                    cy="111.5px"
                    variants={{
                        moon: { cy: "160px", scale: 0, opacity: 0 },
                        sun: { cy: "111.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    transition={{
                        duration: 0,
                        delay: colorMode === "sun" && 0.4,
                        type: "spring",
                        stiffness: 100
                    }}
                    animate={colorMode}
                />
                <Circle
                    cx="285.5px"
                    cy="169.5"
                    variants={{
                        moon: { cx: "230px", scale: 0, opacity: 0 },
                        sun: { cx: "285.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    animate={colorMode}
                    transition={{
                        duration: 0.2,
                        delay: colorMode === "sun" && 0.5,
                        type: "spring",
                        stiffness: 100
                    }}
                />
                <Circle
                    cx="285.5px"
                    cy="251.5"
                    variants={{
                        moon: { cx: "240px", scale: 0, opacity: 0 },
                        sun: { cx: "285.5px", scale: 1, opacity: 1, fill:"#fccf6f" }
                    }}
                    animate={colorMode}
                    transition={{
                        duration: 0.2,
                        delay: colorMode === "sun" && 0.6,
                        type: "spring",
                        stiffness: 100
                    }}
                />
                <Circle
                    cx="200"
                    cy="200"
                    r="58px"
                    variants={{
                        moon: { r: "90px", fill: "#9c7f40" },
                        sun: { r: "58px", fill: "#fccf6f" }
                    }}
                    animate={colorMode}
                    initial={false}
                    transition={{ duration: 0.7 }}
                />
                <Circle
                    cx="250"
                    cy="150"
                    r="0px"
                    variants={{
                        moon: {
                            r: "90px",
                            cx: 250,
                            opacity: 1,
                            transition: { duration: 0.4, type: "spring", stiffness: 50 },
                            fill: "#090b0d"
                        },
                        sun: {
                            r: "40px",
                            cx: 450,
                            opacity: 0,
                            transition: { duration: 0.4 },
                            fill: "#fccf6f"
                        }
                    }}
                    animate={colorMode}
                    initial={false}
                />
            </motion.svg>
        </Switch>
    );
};

export default AnimatedDarkModeToggler;