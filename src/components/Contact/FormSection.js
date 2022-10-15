import React from 'react'
import Section from './Section'
import Form from './Form'
import classes from './FormSection.module.css'

const FormSection = () => {
    return (
        <div className={classes['form-section']}>
            <div className={classes['form-section__wrapper']} >
                <Section />
                <Form />
            </div>
        </div>
    )
}

export default FormSection