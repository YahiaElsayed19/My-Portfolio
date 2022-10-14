import React from 'react'
import Navigation from './Navigation'
import Accounts from './Accounts'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={classes['header-wrapper']}>
                <Navigation />
                <Accounts />
            </div>
        </header>
    )
}

export default Header