import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import classes from './Social.module.css'

const Social = () => {
    return (
        <div className={classes.social}>
            <a href='https://www.linkedin.com/in/yahiaelsayed19/' target="_blank">
                <IoLogoLinkedin className={`${classes.icon} ${classes.linked}`} size='30px' />
            </a>
            <a href='https://twitter.com/_Yahiaa_' target="_blank">
                <BsTwitter className={`${classes.icon} ${classes.twitter}`} size='30px' />
            </a>
            <a href='https://github.com/YahiaElsayed19' target="_blank">
                <BsGithub className={`${classes.icon} ${classes.git}`} size='30px' />
            </a>
        </div>
    )
}

export default Social