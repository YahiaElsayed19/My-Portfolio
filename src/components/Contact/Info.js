import React, { useState } from "react";
import classes from "./Info.module.css";
const Info = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleHandler1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleHandler2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleHandler3 = () => {
        setIsOpen3(!isOpen3);
    };
    const toggleHandler4 = () => {
        setIsOpen4(!isOpen4);
    };
    const toggleHandler5 = () => {
        setIsOpen5(!isOpen5);
    };
    return (
        <div className={classes.info}>
            <div className={classes["info-wrapper"]}>
                <div className={classes["info-question"]} onClick={toggleHandler1}>
                    {isOpen1 ? <p className={classes["info-sign"]}><span>- </span>What timezone are you in?</p> : <p className={classes["info-sign"]}><span>+ </span>What timezone are you in?</p>}
                    {isOpen1 && <p className={classes["info-answer"]}>With in 2 months</p>}
                </div>
            </div>
        </div>
    );
};

export default Info;
