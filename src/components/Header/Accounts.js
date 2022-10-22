import React, { useContext } from "react";
import { IoLogoLinkedin } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import darkContext from '../../store/dark-context'
import classes from './Accounts.module.css'


const Accounts = () => {
    const darkCtx = useContext(darkContext)
    let contactClasses = classes.contact
    if (darkCtx.dark) {
        contactClasses = `${classes.contact} ${classes.dark}`
    }
    return (
        <div className={contactClasses}>
            <a href="mailto:yahiaelsayed19@gamil.com" className={classes.email}>
                yahiaelsayed19@gamil.com
            </a>
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
        </div>
    )
}
export default Accounts;
