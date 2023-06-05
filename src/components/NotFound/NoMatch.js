import React from 'react'
import classes from './NoMatch.module.css'
function NoMatch() {
    return (
        <div className={classes['no-match']}><p>Error 404 not found!</p></div>
    )
}

export default NoMatch