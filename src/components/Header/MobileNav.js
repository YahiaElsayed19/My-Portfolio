import React, { useState } from "react";
import classes from "./MobileNav.module.css";
import { CgMenuRound } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import Links from "../Links";

const MobileNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const iconHandler = () => {
        setShowMenu(!showMenu);
    };
    const closeMobileMenu = () => {
        setShowMenu(false);
    }
    const openIcon = (
        <CgMenuRound
            className={classes.icon}
            size="40px"
            color="white"
            onClick={iconHandler}
        />
    );

    const closeIcon = (
        <CgMenuRight
            className={classes.icon}
            size="40px"
            color="white"
            onClick={iconHandler}
        />
    );

    return (
        <nav className={classes["mobile-nav"]}>
            {showMenu ? closeIcon : openIcon}
            {showMenu && (<Links isMobile={true} closeMobileMenu={closeMobileMenu} />)}
        </nav>
    );
};

export default MobileNav;
