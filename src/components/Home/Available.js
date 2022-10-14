import React from 'react'
import classes from './Available.module.css'

const Available = () => {
    return (
        <div className={classes.availble}>
            <div className={classes['availble-wrapper']}>
                <h3 className={classes['availble-h3']}>
                    I'm currently availble for freelance Work.
                </h3>
                <p className={classes['availble-p']}>
                    If you're lookink for developer that likes to get stuff done,let's talk
                </p>
                <p className={classes['availble-email']}>
                    yahiaelsayed19@gmail.com
                </p>
                <button className={classes['availble-btn']}>
                    Got a project in mind? Let's talk!
                </button>
            </div>
        </div>
    )
}

export default Available