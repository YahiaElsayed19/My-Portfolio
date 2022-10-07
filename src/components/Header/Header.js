import React from 'react'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import classes from './Header.module.css'


const Header = () => {
    return (
        <header>
            <NavLinks />
            <MobileNav />
        </header>
    )
}

export default Header