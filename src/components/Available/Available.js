import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import classes from './Available.module.css'
import darkContext from '../../store/dark-context'

const Available = () => {
    const darkCtx = useContext(darkContext)
    let availbleClasses = classes.availble
    if (darkCtx.dark) {
        availbleClasses = `${classes.availble} ${classes.dark}`
    }
    const variants = {
        hidden: {
            opacity: 0,
            x: -200,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            },
        }
    }
    return (
        <div className={availbleClasses}>
            <div className={classes['availble-wrapper']}>
                <h3 className={classes['availble-h3']}>
                    I'm currently availble for freelance Work.
                </h3>
                <p className={classes['availble-p']}>
                    If you're looking for developer that likes to get stuff done,let's talk
                </p>
                <p className={classes['availble-email']}>
                    yahiaelsayed19@gmail.com
                </p>
                <Link to='/contact'>
                    <motion.button
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={classes['availble-btn']}>
                        Got a project in mind? Let's talk!
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Available