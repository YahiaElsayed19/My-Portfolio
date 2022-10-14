import React from "react";
import classes from "./Landing.module.css";

const Landing = () => {
    const scrollToMyWork = () => {
        window.scrollTo({
            top: '900',
            behavior: 'smooth',
        });
    };
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
                <button className={classes["landing-btn"]} onClick={scrollToMyWork}>See my work </button>
            </div>

        </div>
    );
};

export default Landing;
