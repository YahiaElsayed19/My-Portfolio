import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes['footer']} >
            <div className={classes['footer-wrapper']}>
                <p className={classes['footer-p']}>
                    (c) Copyrights Yahia Elsayed all rights reserved
                </p>
                <div className={classes.social}>
                    <a href='https://www.linkedin.com/in/yahiaelsayed19/' target="_blank">
                        <IoLogoLinkedin className={classes['footer-icon']} size='30px' />
                    </a>
                    <a href='https://twitter.com/_Yahiaa_' target="_blank">
                        <BsTwitter className={classes['footer-icon']} size='30px' />
                    </a>
                    <a href='https://github.com/YahiaElsayed19' target="_blank">
                        <BsGithub className={classes['footer-icon']} size='30px' />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer