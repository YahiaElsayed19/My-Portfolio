import React, { useContext } from "react";
import classes from "./Landing.module.css";
import { motion } from 'framer-motion'
import darkContext from '../../store/dark-context'


const Landing = (props) => {
    const darkCtx = useContext(darkContext)
    let landingClasses = classes.landing
    if (darkCtx.dark) {
        landingClasses = `${classes.landing} ${classes.dark}`
    }

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
        <div className={landingClasses}>
            <div className={classes["landing-wrapper"]}>
                <h3 className={classes["landing-h3"]}>Hey, I'm Yahia Elsayed</h3>
                <h1 className={classes["landing-h1"]}>
                    React Developer &<br /> React Native Developer
                </h1>
                <p className={classes["landing-p"]}>
                    I help business grow by crafting amazing web experiences. If you're
                    looking for a developer that likes to get stuff done, let's talk.
                </p>
                <div className={classes['landing-btns']}>
                    <a href='https://drive.google.com/file/d/13i91UtV1pq75Xb67gcFqA4nYWmTGPMiP/view?usp=share_link' target='_blank' className={classes['resume-a']}>
                        <motion.button
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            className={classes['landing-btn']}>
                            My resume
                        </motion.button>
                    </a>
                    <motion.button
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        className={classes["landing-btn"]}
                        onClick={scrollToMyWork}>
                        See my work
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
