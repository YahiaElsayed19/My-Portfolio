import React from "react";
import classes from "./Home.module.css";
import pic from "../../assets/personal.jpg"
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import tailwend from '../../assets/tailwend.jpg'

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <div className={classes['first-sec']}>
                    <div className={classes.box}>
                        <span>👋</span>
                        <div className={classes.text}>
                            <p>Hello,I'am</p>
                            <h1>Yahia</h1>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.text}>
                            <p>WEB DEVELOPER</p>
                            <p>FREELANCER</p>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <p>
                            Hello there, I'm a computer science student, I'm also a passionate
                            Front end developer, and I will help you build the beautiful
                            website you need.
                        </p>
                    </div>
                </div>
                <div className={classes.image}>
                    <img src={pic} alt="pic" />
                </div>
                <div className={classes.tech}>
                    <img src={redux} alt="redux" />
                    <img src={react} alt="react" />
                    <img src={tailwend} alt="tailwend" />
                </div>
            </div>
        </div>
    );
};

export default Home;
