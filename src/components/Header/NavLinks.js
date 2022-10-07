import React from 'react'
import Links from '../Links'
import classes from './NavLinks.module.css'

const NavLinks = () => {
    return (
        <nav className={classes.navigation}>
            <Links />
        </nav>
    )
}

export default NavLinks