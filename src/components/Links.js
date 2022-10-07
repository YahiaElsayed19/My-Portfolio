import React from 'react'
import { motion } from 'framer-motion'

const Links = (props) => {

    const onClickHandler = () => {
        props.isMobile && props.closeMobileMenu()
    }
    const listVariant = {
        hidden: {
            opacity: 0,
            y: -40
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
        >
            <motion.li onClick={onClickHandler}
                variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.3 }}>
                <a href="/">HOME</a>
            </motion.li>
            <motion.li onClick={onClickHandler}
                variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.4 }}>
                <a href="/">ABOUT</a>
            </motion.li>
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.5 }}>
                <a href="#gallery">GALLERY</a>
            </motion.li >{" "}
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.6 }}>
                <a href="#contact">CONTACT</a>
            </motion.li>
        </motion.ul>
    )
}

export default Links