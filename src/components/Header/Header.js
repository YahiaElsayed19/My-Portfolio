import React, { useContext } from 'react'
import Navigation from './Navigation'
import Accounts from './Accounts'
import classes from './Header.module.css'
import darkContext from '../../store/dark-context'
import { MdDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'


const Header = () => {
    const darkCtx = useContext(darkContext)
    let headerClasses = ''
    if (darkCtx.dark) {
        headerClasses = classes.dark
    }
    return (
        <header className={headerClasses}>
            <div className={classes['header-wrapper']}>
                <Navigation />
                <Accounts />
            </div>
            {darkCtx.dark && <BsSunFill className={`${classes.toggle} ${classes.light}`} onClick={darkCtx.toggleDark} size='30px' />}
            {!darkCtx.dark && <MdDarkMode className={classes.toggle} onClick={darkCtx.toggleDark} size='30px' />}
        </header>
    )
}

export default Header