import React,{useContext} from 'react'
import darkContext from '../../store/dark-context'
import classes from './Tools.module.css'
import { MyTools } from '../../util/MyTools'


const Tools = () => {
    const darkCtx = useContext(darkContext)
    let toolsClasses = classes.tools
    if (darkCtx.dark) {
        toolsClasses = `${classes.tools} ${classes.dark}`
    }
    const content = MyTools.map(tool => <div className={classes.tool} key={tool.name}>
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