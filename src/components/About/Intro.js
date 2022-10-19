import React from "react";
import me from '../../assets/me.png'
import classes from "./Intro.module.css";

const Intro = () => {
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
                <img src={me} alt="Myself"className={classes["intro-image"]}/>
            </div>
        </div>
    );
};

export default Intro;
