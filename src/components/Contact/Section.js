import React from 'react'
import classes from './Section.module.css'
const Section = () => {
    return (
        <div className={classes.section}>
            <div className={classes['section-wrapper']}>
                <h3 className={classes['section-h3']}>
                    I'm currently availble for freelance Work.
                </h3>
                <p className={classes['section-p']}>
                    If you're looking for developer that likes to get stuff done,let's talk
                </p>
                <a href='mailto:yahiaelsayed19@gmail.com'>
                    <button className={classes['section-btn']}>
                        yahiaelsayed19@gmail.com
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Section