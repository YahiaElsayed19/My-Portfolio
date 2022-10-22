import React,{useContext} from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import classes from './Footer.module.css'
import darkContext from '../../store/dark-context'


const Footer = () => {
    const darkCtx = useContext(darkContext)
    let footerClasses = classes['footer']
    if (darkCtx.dark) {
        footerClasses = `${classes['footer']} ${classes.dark}`
    }
    return (
        <div className={footerClasses} >
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