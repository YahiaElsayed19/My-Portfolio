import React, { forwardRef, useContext } from "react";
import { motion } from 'framer-motion'
import darkContext from '../../store/dark-context'
import { RiGithubFill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri"
import classes from "./MyWork.module.css";
import template1 from "../../assets/template1.png";
import template2 from "../../assets/template2.png";
import template3 from "../../assets/template3.png";
import completeproject from "../../assets/completeproject.png";
import quizapp from "../../assets/quizapp.png";
import todolist from "../../assets/todolist.png";
import expensetracker from "../../assets/expensetracker.png";
import foodapp from "../../assets/foodapp.png";
import mtdb from '../../assets/mtdb.png'


const BOXES = [
    {
        id: "p1",
        description: "Template 1 with HTML&CSS",
        image: template1,
        github: "https://github.com/YahiaElsayed19/Template1",
        live: "https://yahiaelsayed19.github.io/Template1/",
    },
    {
        id: "p2",
        description: "Template 2 with HTML&CSS",
        image: template2,
        github: "https://github.com/YahiaElsayed19/Template2",
        live: "https://yahiaelsayed19.github.io/Template2/",
    },
    {
        id: "p3",
        description: "Template 3 with HTML,CSS and some JS",
        image: template3,
        github: "https://github.com/YahiaElsayed19/Template3",
        live: "https://yahiaelsayed19.github.io/Template3/",
    },
    {
        id: "p4",
        description: "Complete Project with HTML,CSS and JS",
        image: completeproject,
        github: "https://github.com/YahiaElsayed19/Complete-Project",
        live: "https://yahiaelsayed19.github.io/Complete-Project/",
    },
    {
        id: "p5",
        description: "Quiz App with HTML,CSS and JS",
        image: quizapp,
        github: "https://github.com/YahiaElsayed19/Quiz-App",
        live: "https://yahiaelsayed19.github.io/Quiz-App/",
    },
    {
        id: "p6",
        description: "To-Do List App with HTML,CSS and JS",
        image: todolist,
        github: "https://github.com/YahiaElsayed19/To-do-List",
        live: "https://yahiaelsayed19.github.io/To-do-List/",
    },
    {
        id: "p7",
        description: "Complete expanse tracker app with React.Js",
        image: expensetracker,
        github: "https://github.com/YahiaElsayed19/expense",
        live: "https://expense-tracker.yahia.vercel.app/",
    },
    {
        id: "p8",
        description: "Complete food order app with React.Js",
        image: foodapp,
        github: "https://github.com/YahiaElsayed19/Food-order-app",
        live: "https://food-order-app-yahia.vercel.app/",
    },
    {
        id: "p9",
        description: "Complete Movies and Tv Shows Database with React.Js",
        image: mtdb,
        github: "https://github.com/YahiaElsayed19/MTDB",
        live: "https://mtdb.vercel.app/",
    },
];

const MyWork = forwardRef((props, ref) => {
    const darkCtx = useContext(darkContext)
    let myWorkClasses = classes["my-work"]
    if (darkCtx.dark) {
        myWorkClasses = `${classes["my-work"]} ${classes.dark}`
    }
    const variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            },
        }
    }

    const content = BOXES.map((box) => (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={classes["my-work__box"]} key={box.id}>
            <p className={classes["my-work__description"]}>{box.description}</p>
            <img src={box.image} alt={box.id} className={classes["my-work__image"]} />
            <div className={classes["my-work__btn"]}>
                <a href={box.github} target='_blank'>
                    <RiGithubFill className={classes["my-work__icon"]} size="48px" />
                </a>
                <a href={box.live} target='_blank'>
                    <RiEyeFill className={classes["my-work__icon"]} size="48px" />
                </a>
            </div>
        </motion.div>
    ));

    return (
        <div
            className={myWorkClasses} ref={ref} >
            <div className={classes["my-work__wrapper"]}>
                <h1 className={classes["my-work__h1"]}>My Work</h1>
                <p className={classes["my-work__p"]}>I specialize in website design and development.</p>
                {content}
            </div>
        </div>
    );
});

export default MyWork;
