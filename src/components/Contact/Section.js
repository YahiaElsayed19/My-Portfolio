import React, { useContext } from "react";
import darkContext from '../../store/dark-context'
import classes from './Section.module.css'
const Section = () => {
    const darkCtx = useContext(darkContext)
    let sectionClasses = classes.section
    if (darkCtx.dark) {
        sectionClasses = `${classes.section} ${classes.dark}`
    }
    return (
        <div className={sectionClasses}>
            <div className={classes['section-wrapper']}>
                <h1 className={classes['section-h1']}>Got a project in mind?</h1>
                <p className={classes['section-p']}>Use the form to give me as much detail as possible and I’ll get back to you as soon as I can. Alternatively, get in touch using the information below or contact me via social media.</p>
                <p className={classes['section-email']}>yahiaelsayed@gmail.com</p>
            </div>
        </div>
    )
}

export default Section