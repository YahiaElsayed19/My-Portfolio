import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import classes from "./Testimonials.module.css";
import { motion } from "framer-motion";
import darkContext from '../../store/dark-context'

const Testimonials = () => {
    const darkCtx = useContext(darkContext)
    let testimonialsClasses = classes.testimonials
    if (darkCtx.dark) {
        testimonialsClasses = `${classes.testimonials} ${classes.dark}`
    }
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
        <div className={testimonialsClasses}>
            <div className={classes["testimonials-wrapper"]}>
                <motion.div
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5, delay: 0.10 }}
                    viewport={{ once: true }}
                    className={classes["testimonials-card"]}>
                    <h5 className={classes["testimonials-h5"]}>
                        “Working with Yahia has been an absolute pleasure and we'll
                        definitely turn to his expertise for new projects.”
                    </h5>
                    <BsPersonCircle className={classes["testimonials-icon"]} size="50px" />
                    <p className={classes["testimonials-name"]}>Ahmed Hassan</p>
                    <p className={classes["testimonials-p"]}>Client</p>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5, delay: 0.20 }}
                    viewport={{ once: true }}
                    className={classes["testimonials-card"]}>
                    <h5 className={classes["testimonials-h5"]}>
                        “Wanna get stuff done professionally, Definitely that's the man I recommend him to anyone”
                    </h5>
                    <BsPersonCircle className={classes["testimonials-icon"]} size="50px" />
                    <p className={classes["testimonials-name"]}>Adam Mohamed</p>
                    <p className={classes["testimonials-p"]}>Client</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;
