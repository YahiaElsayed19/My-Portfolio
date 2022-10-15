import React, { useRef, useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const projectRef = useRef();
    const budgetRef = useRef();
    const timelineRef = useRef();
    const [show, setShow] = useState(false)
    const [sending, setsending] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault();
        setsending(true)
        await fetch(
            "https://portfolio-9ff74-default-rtdb.firebaseio.com/jobs.json",
            {
                method: "POST",
                body: JSON.stringify({
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    project: projectRef.current.value,
                    budget: budgetRef.current.value,
                    timeline: timelineRef.current.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        setShow(true)
    };
    return (
        <form className={classes["form-inline"]}>
            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                ref={nameRef}
            ></input>

            <label htmlFor="email">Your Email Address</label>
            <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                ref={emailRef}
            ></input>

            <label htmlFor="project">Project Details</label>
            <input
                type="text"
                id="project"
                placeholder="Enter Project Details"
                ref={projectRef}
            ></input>

            <label htmlFor="budget">Your Budget Range</label>
            <input
                type="text"
                min="10"
                id="budget"
                placeholder="Enter Budget Range"
                ref={budgetRef}
            ></input>

            <label htmlFor="timeline">Your Timeline</label>
            <input
                type="text"
                id="timeline"
                placeholder="Enter Timeline"
                ref={timelineRef}
            ></input>

            <button onClick={submitHandler}>Let's do this</button>
            {sending && !show && <p className={classes['form-msg']}>Sending...</p>}
            {show && <p className={classes['form-msg']}>Successfully sent!</p>}
        </form>
    );
};

export default Form;
