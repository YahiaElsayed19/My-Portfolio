import React from 'react'
import classes from './Freelance.module.css'
const Freelance = () => {
    return (
        <div className={classes.freelance}>
            <div className={classes['freelance-wrapper']}>
                <h3 className={classes['freelance-h3']}>
                    I'm currently availble for freelance Work.
                </h3>
                <p className={classes['freelance-p']}>
                    If you're looking for developer that likes to get stuff done,let's talk
                </p>
                <a href='mailto:yahiaelsayed19@gmail.com'>
                    <button className={classes['freelance-btn']}>
                        yahiaelsayed19@gmail.com
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Freelance