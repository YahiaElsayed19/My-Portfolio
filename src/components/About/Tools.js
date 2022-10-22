import React,{useContext} from 'react'
import darkContext from '../../store/dark-context'
import photoshop from '../../assets/photoshop 1.png'
import figma from '../../assets/figma 1.png'
import xd from '../../assets/xd 1.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import classes from './Tools.module.css'

const tools = [
    {
        src: photoshop,
        name: "Photoshop",
    },
    {
        src: figma,
        name: "Figma",
    },
    {
        src: xd,
        name: "XD",
    },
    {
        src: html,
        name: "HTML",
    },
    {
        src: css,
        name: "CSS",
    },
    {
        src: bootstrap,
        name: "Bootstrap",
    },
    {
        src: tailwind,
        name: "Tailwind",
    },
    {
        src: js,
        name: "Javascript",
    },
    {
        src: react,
        name: "React.js",
    },

    {
        src: redux,
        name: "React Redux",
    },
]
const Tools = () => {
    const darkCtx = useContext(darkContext)
    let toolsClasses = classes.tools
    if (darkCtx.dark) {
        toolsClasses = `${classes.tools} ${classes.dark}`
    }
    const content = tools.map(tool => <div className={classes.tool} key={tool.name}>
        <img src={tool.src} alt={tool.name} className={classes['tools-icon']} />
        <h6 className={classes['tools-h6']}>{tool.name}</h6>
    </div>
    )
    return (
        <div className={toolsClasses}>
            <div className={classes['tools-title']}>Tools I use</div>
            <div className={classes['tools-wrapper']}>
                {content}
            </div>
        </div>
    )
}

export default Tools