import React from 'react'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import classes from './Header.module.css'
import logo from '../../assets/Logo.png'


const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt='logo' className={classes.logo}></img>
            </div>
            <NavLinks />
            <button>RESUME</button>
            <MobileNav />
        </header>
    )
}

export default Header