import React from "react";
import clock from "../../assets/alarm-clock 1.png";
import medal from "../../assets/medal-alt 1.png";
import rocket from "../../assets/fast-launch 1.png";
import classes from "./Features.module.css";
import { motion } from 'framer-motion'

const Features = () => {
    const variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }
    return (
        <div className={classes.features}>
            <div className={classes["features-wrapper"]}>
                <h3 className={classes["features-h3"]}>
                    Regardless of project size, you will always get:
                </h3>
                <div className={classes["feature-wrapper"]}>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        transition={{ duration: 0.5, delay: 0.10 }}
                        viewport={{once:true}}
                        className={classes["feature-box"]}>
                        <img src={clock} alt="clock"></img>
                        <h5 className={classes["features-h5"]}>On-time delivery</h5>
                        <p className={classes["features-p"]}>
                            I know time is money so I don't want to waste yours. Or mine. So I
                            guarantee that I will always deliver what you pay for as promised.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        transition={{ duration: 0.5, delay: 0.20 }}
                        viewport={{once:true}}
                        className={classes["feature-box"]}>
                        <img src={medal} alt="medal"></img>
                        <h5 className={classes["features-h5"]}>Quality</h5>
                        <p className={classes["features-p"]}>
                            I don't want to put my name on something subpar so my first
                            concern is always quality. No matter what, you will love the end
                            result.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        transition={{ duration: 0.5, delay: 0.30 }}
                        viewport={{once:true}}
                        className={classes["feature-box"]}>
                        <img src={rocket} alt="rocket"></img>
                        <h5 className={classes["features-h5"]}>
                            I can design and build a responsive and accessible website
                        </h5>
                        <p className={classes["features-p"]}>
                            My goal is to build accessible and responsive user interfaces for
                            the web, while preserving the best practices for proper user
                            experience.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Features;
