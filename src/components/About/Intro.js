import React from "react";
import me from '../../assets/me.png'
import classes from "./Intro.module.css";
import { motion } from "framer-motion";

const Intro = () => {
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
    return (
        <div className={classes.intro}>
            <div className={classes["intro-wrapper"]}>
                <h1 className={classes["intro-h1"]}>I'm Yahia Elsayed</h1>
                <p className={classes["intro-p"]}>
                    I was born in Alexandria, Egypt. From an early age I showed interest
                    for computers and that grew into a passion during high school. I got
                    into web design and development in college.
                </p>
                <p className={classes["intro-p"]}>
                    I'm studing computer science and data science at Alexandria university.
                </p>
                <p className={classes["intro-p"]}>
                    Currently I help businesses all around the world by designing and
                    coding websites and currently learning mobile development.
                </p>
                <motion.img
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    src={me} alt="Myself" className={classes["intro-image"]} />
            </div>
        </div>
    );
};

export default Intro;
