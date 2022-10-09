import React from 'react'
import Navigation from './Navigation'
import Mail from './Mail'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={classes.wrapper}>
                <Navigation />
                <Mail />
            </div>
        </header>
    )
}

export default Header