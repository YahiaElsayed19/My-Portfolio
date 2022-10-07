import React, { useState } from "react";
import classes from "./MobileNav.module.css";
import { CgMenuRound } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const iconHandler = () => {
        setShowMenu(!showMenu);
    };

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
            {showMenu && (
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>{" "}
                    <li>
                        <a href="#gallery">GALLERY</a>
                    </li>{" "}
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default MobileNav;
