import React from "react";
import classes from "./MyWork.module.css";
import template1 from "../../assets/template1.png";
import template2 from "../../assets/template2.png";
import template3 from "../../assets/template3.png";
import completeproject from "../../assets/completeproject.png";
import quizapp from "../../assets/quizapp.png";
import todolist from "../../assets/todolist.png";
import expensetracker from "../../assets/expensetracker.png";
import foodapp from "../../assets/foodapp.png";
import { BsGithub } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

const MyWork = () => {
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
            description: "Complete food order  app with React.Js",
            image: foodapp,
            github: "https://github.com/YahiaElsayed19/Food-order-app",
            live: "https://food-order-app-yahia.vercel.app/",
        },
    ];

    const content = BOXES.map((box) => (
        <div className={classes["my-work__box"]}>
            <p className={classes["my-work__description"]}>{box.description}</p>
            <img src={box.image} alt={box.id} className={classes["my-work__image"]} />
            <div className={classes["my-work__btn"]}>
                <a href={box.github} target='_blank'>
                    <BsGithub className={classes["my-work__icon"]} size="40px" />
                </a>
                <a href={box.live} target='_blank'>
                    <BsFillEyeFill className={classes["my-work__icon"]} size="40px" />
                </a>
            </div>
        </div>
    ));

    return (
        <div className={classes["my-work"]}>
            <div className={classes["my-work__wrapper"]}>
                <h1 className={classes["my-work__h1"]}>My Work</h1>
                {content}
            </div>
        </div>
    );
};

export default MyWork;
