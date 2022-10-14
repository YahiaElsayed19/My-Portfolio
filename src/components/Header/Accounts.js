import React from "react";
import Social from "../Social/Social";
import classes from './Accounts.module.css'

const Accounts = () => {
return (
    <div className={classes.contact}>
        <a href="mailto:yahiaelsayed19@gamil.com" className={classes.email}>
            yahiaelsayed19@gamil.com
        </a>
        <Social />
    </div>
)}
export default Accounts;
