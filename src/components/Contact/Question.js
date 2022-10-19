import React, { useState } from "react";
import classes from "./Question.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Question = (props) => {
    const [isOpen, setIsOpen1] = useState(false);

    const toggleHandler = () => {
        setIsOpen1(!isOpen);
    };
    return (
        <div className={classes["question-wrapper"]} onClick={toggleHandler}>
            {isOpen ? (
                <p className={classes["info-question__active"]}>
                    <span>- </span>
                    {props.question}
                </p>
            ) : (
                <p className={classes["info-question"]}>
                    <span>+ </span>
                    {props.question}
                </p>
            )}
            {isOpen &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={classes["info-answer"]}>{props.answer}</motion.p>
            }
        </div >
    );
};

export default Question;
