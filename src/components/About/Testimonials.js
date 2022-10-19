import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import classes from "./Testimonials.module.css";
const Testimonials = () => {
    return (
        <div className={classes.testimonials}>
            <div className={classes["testimonials-wrapper"]}>
                <div className={classes["testimonials-card"]}>
                    <h5 className={classes["testimonials-h5"]}>
                        “Working with Yahia has been an absolute pleasure and we'll
                        definitely turn to his expertise for new projects.”
                    </h5>
                    <BsPersonCircle className={classes["testimonials-icon"]} size="50px" />
                    <p className={classes["testimonials-name"]}>Ahmed Hassan</p>
                    <p className={classes["testimonials-p"]}>Client</p>
                </div>
                <div className={classes["testimonials-card"]}>
                    <h5 className={classes["testimonials-h5"]}>
                        “Wanna get stuff done professionally, Definitely that's the man I recommend him to anyone”
                    </h5>
                    <BsPersonCircle className={classes["testimonials-icon"]} size="50px" />
                    <p className={classes["testimonials-name"]}>Adam Mohamed</p>
                    <p className={classes["testimonials-p"]}>Client</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;