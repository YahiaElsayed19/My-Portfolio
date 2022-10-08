import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { TiHome } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/home"
                        className={(navData) => (navData.isActive ? classes.active : "")}
                    >
                        <TiHome size="30px" color="white" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={(navData) => (navData.isActive ? classes.active : "")}
                    >
                        <BsPersonFill size="30px" color="white" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={(navData) => (navData.isActive ? classes.active : "")}
                    >
                        <RiGalleryFill size="30px" color="white" />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={(navData) => (navData.isActive ? classes.active : "")}
                    >
                        <IoMdMail size="30px" color="white" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
