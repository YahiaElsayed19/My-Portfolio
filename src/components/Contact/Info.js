import React from "react";
import classes from "./Info.module.css";
import Question from "./Question";
const Info = () => {


    return (
        <div className={classes.info}>
            <div className={classes["info-wrapper"]}>
                <h1 className={classes['before-msg']}>Before sending me a message, here are some things you should know:</h1>
                <Question question="What timezone are you in?" answer="With in 3 months." />
                <Question question="Do we make a contract?" answer="No, We don't." />
                <Question question="How much do you charge for a website?" answer="It depends on size and effort not all with same price." />
                <Question question="Do you charge by the hour?" answer="I do not charge by the hour. I prefer to eliminate the stress of counting the hours. Instead, I charge a flat fee per project, regardless of duration." />
                <Question question="Are you working with a team?" answer="No, Currently i work alone." />
            </div>
        </div>
    );
};

export default Info;
