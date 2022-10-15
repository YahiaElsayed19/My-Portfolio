import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import classes from './ContactFooter.module.css'

const ContactFooter = () => {
    return (
        <div className={classes['contact-footer']} >
            <div className={classes['contact-footer__wrapper']}>
                <div className={classes.social}>
                    <a href='https://www.linkedin.com/in/yahiaelsayed19/' target="_blank">
                        <IoLogoLinkedin className={classes['contact-footer__icon']} size='30px' />
                    </a>
                    <a href='https://twitter.com/_Yahiaa_' target="_blank">
                        <BsTwitter className={classes['contact-footer__icon']} size='30px' />
                    </a>
                    <a href='https://github.com/YahiaElsayed19' target="_blank">
                        <BsGithub className={classes['contact-footer__icon']} size='30px' />
                    </a>
                </div>
                <p className={classes['contact-footer__p']}>
                    (c) Copyrights Yahia Elsayed all rights reserved
                </p>
            </div>
        </div>

    )
}

export default ContactFooter