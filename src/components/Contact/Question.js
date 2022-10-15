import React, { useState } from "react";
import classes from "./Question.module.css";

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
            {isOpen && <p className={classes["info-answer"]}>{props.answer}</p>}
        </div>
    );
};

export default Question;
