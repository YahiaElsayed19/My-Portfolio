import React from 'react'
import Section from './Section'
import classes from './FormSection.module.css'
import BasicForm from './BasicForm'

const FormSection = () => {
    return (
        <div className={classes['form-section']}>
            <div className={classes['form-section__wrapper']} >
                <Section />
                <BasicForm />
            </div>
        </div>
    )
}

export default FormSection