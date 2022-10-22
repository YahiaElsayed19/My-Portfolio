import React, { useState, useContext } from "react";
import darkContext from '../../store/dark-context'

import classes from "./Question.module.css";
import { motion } from "framer-motion";

const Question = (props) => {
    const darkCtx = useContext(darkContext)
    let questionClasses = classes["question-wrapper"]
    if (darkCtx.dark) {
        questionClasses = `${classes["question-wrapper"]} ${classes.dark}`
    }
    const [isOpen, setIsOpen1] = useState(false);

    const toggleHandler = () => {
        setIsOpen1(!isOpen);
    };
    return (
        <div className={questionClasses} onClick={toggleHandler}>
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
