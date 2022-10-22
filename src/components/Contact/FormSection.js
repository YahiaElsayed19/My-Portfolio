import React, { useContext } from "react";
import darkContext from '../../store/dark-context'
import Section from './Section'
import classes from './FormSection.module.css'
import BasicForm from './BasicForm'

const FormSection = () => {
    const darkCtx = useContext(darkContext)
    let formSectionClasses = classes['form-section']
    if (darkCtx.dark) {
        formSectionClasses = `${classes['form-section']} ${classes.dark}`
    }
    return (
        <div className={formSectionClasses}>
            <div className={classes['form-section__wrapper']} >
                <Section />
                <BasicForm />
            </div>
        </div>
    )
}

export default FormSection