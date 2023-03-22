import React, { forwardRef, useContext } from "react";
import { motion } from 'framer-motion'
import darkContext from '../../store/dark-context'
import { RiGithubFill } from "react-icons/ri";
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
        name: "Template 1",
        tools: ["HTML", "CSS"],
        image: template1,
        github: "https://github.com/YahiaElsayed19/Template1",
        live: "https://yahiaelsayed19.github.io/Template1/",
    },
    {
        id: "p2",
        name: "Template 2",
        tools: ["HTML", "CSS"],
        image: template2,
        github: "https://github.com/YahiaElsayed19/Template2",
        live: "https://yahiaelsayed19.github.io/Template2/",
    },
    {
        id: "p3",
        name: "Template 3",
        tools: ["HTML", "CSS", "JS"],
        image: template3,
        github: "https://github.com/YahiaElsayed19/Template3",
        live: "https://yahiaelsayed19.github.io/Template3/",
    },
    {
        id: "p4",
        name: "Complete Project",
        tools: ["HTML", "CSS", "JS"],
        image: completeproject,
        github: "https://github.com/YahiaElsayed19/Complete-Project",
        live: "https://yahiaelsayed19.github.io/Complete-Project/",
    },
    {
        id: "p5",
        name: "Quiz App",
        tools: ["HTML", "CSS", "JS"],
        image: quizapp,
        github: "https://github.com/YahiaElsayed19/Quiz-App",
        live: "https://yahiaelsayed19.github.io/Quiz-App/",
    },
    {
        id: "p6",
        name: "To-Do List App",
        tools: ["HTML", "CSS", "JS"],
        image: todolist,
        github: "https://github.com/YahiaElsayed19/To-do-List",
        live: "https://yahiaelsayed19.github.io/To-do-List/",
    },
    {
        id: "p8",
        name: "Complete food order app",
        tools: ["React.js", "CSS"],
        image: foodapp,
        github: "https://github.com/YahiaElsayed19/Food-order-app",
        live: "https://food-order-app-yahia.vercel.app/",
    },
    {
        id: "p9",
        name: "Complete Movies and Tv Shows Database",
        tools: ["React.js", "CSS", "Axios", "React router", "Framer motion"],
        image: mtdb,
        github: "https://github.com/YahiaElsayed19/MTDB",
        live: "https://mtdb.vercel.app/",
    },
];
// {
//     id: "p7",
//     name: "Complete expanse tracker app",
//     tools: ["React.js", "CSS"],
//     image: expensetracker,
//     github: "https://github.com/YahiaElsayed19/expense",
//     live: "https://expense-tracker.yahia.vercel.app/",
// },

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
            <p className={classes["my-work__name"]}>{box.name}</p>
            <div className={classes["my-work__tools"]}>
                {box.tools.map((tool) => <div key={Math.random()} className={classes["my-work__tool"]}>{tool}</div>)}
            </div>
            <a href={box.live} target='_blank'>
                <img src={box.image} alt={box.id} className={classes["my-work__image"]} />
            </a>
            <div className={classes["my-work__btn"]}>
                <a href={box.github} target='_blank'>
                    <RiGithubFill className={classes["my-work__icon"]} size="48px" />
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
