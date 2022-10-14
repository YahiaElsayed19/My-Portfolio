import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer} >
            <div className={classes['footer-wrapper']}>
                <p className={classes['footer-p']}>
                    (c) Copyrights Yahia Elsayed all rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer