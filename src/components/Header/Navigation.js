import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = () => {
    return (
        <ul className={classes['ul-nav']}>
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
    )
}

export default Navigation