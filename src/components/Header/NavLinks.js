import React from 'react'
import classes from './NavLinks.module.css'

const NavLinks = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <a href='/'>HOME</a>
                </li>
                <li>
                    <a href='#about'>ABOUT</a>
                </li>                <li>
                    <a href='#gallery'>GALLERY</a>
                </li>                <li>
                    <a href='#contact'>CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks