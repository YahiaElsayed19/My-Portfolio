import React, { forwardRef, useContext } from "react";
import { motion } from 'framer-motion'
import darkContext from '../../store/dark-context'
import { RiGithubFill } from "react-icons/ri";
import classes from "./MyWork.module.css";
import { MyProjects } from "../../util/MyProjects";



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
                duration: 0.3
            },
        }
    }
    const content = MyProjects.map((box) => (
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
