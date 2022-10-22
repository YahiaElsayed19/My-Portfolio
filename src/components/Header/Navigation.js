import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
import darkContext from '../../store/dark-context'


const Navigation = () => {
    const darkCtx = useContext(darkContext)
    let ulClasses = classes['ul-nav']
    if (darkCtx.dark) {
        ulClasses = `${classes['ul-nav']} ${classes.dark}`
    }

    return (
        <>
            <ul className={ulClasses}>
                <li>
                    <NavLink to="/home" className={(navData) => navData.isActive ? `${classes.active}` : ''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={(navData) => navData.isActive ? `${classes.active}` : ''}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={(navData) => navData.isActive ? `${classes.active}` : ''}>Contact</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navigation