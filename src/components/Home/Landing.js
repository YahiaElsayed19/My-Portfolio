import React from "react";
import classes from "./Landing.module.css";
import { motion } from 'framer-motion'

const Landing = (props) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            },
        }
    }
    const scrollToMyWork = props.onScroll;
    return (
        <div className={classes.landing}>
            <div className={classes["landing-wrapper"]}>
                <h3 className={classes["landing-h3"]}>Hey, I'm Yahia Elsayed</h3>
                <h1 className={classes["landing-h1"]}>
                    React Developer &<br /> React Native Develpoer
                </h1>
                <p className={classes["landing-p"]}>
                    I help business grow by crafting amazing web experiences. If you're
                    looking for a developer that likes to get stuff done, let's talk.
                </p>
                <motion.button
                variants={variants}
                initial="hidden"
                animate="visible"
                className={classes["landing-btn"]} onClick={scrollToMyWork}>See my work </motion.button>
            </div>
        </div>
    );
};

export default Landing;
