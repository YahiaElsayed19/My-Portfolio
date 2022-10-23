import React, { useState } from 'react';
import { Formik } from 'formik'
import classes from './BasicForm.module.css'
const BasicForm = () => {
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)
    return (
        <div>
            <Formik
                initialValues={{ email: '', name: '', budget: '', timeline: '', project: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Please enter a valid Email';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.name) {
                        errors.name = 'Name can\'t be empty';
                    }
                    if (!values.budget) {
                        errors.budget = 'Budget can\'t be empty';
                    }
                    if (!values.timeline) {
                        errors.timeline = 'Timeline can\'t be empty';
                    }
                    if (!values.project) {
                        errors.project = 'Project details can\'t be empty';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(async () => {
                        setSuccess(false)
                        setSending(true)
                        await fetch(
                            "https://portfolio-940b1-default-rtdb.firebaseio.com/jobs.json",
                            {
                                method: "POST",
                                body: JSON.stringify({
                                    name: values.name,
                                    email: values.email,
                                    project: values.project,
                                    budget: values.budget,
                                    timeline: values.timeline,
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            }
                        );
                        setSending(false)
                        setSuccess(true)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={classes['input-wrapper']}>
                            <label htmlFor='name'>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder='enter your name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <p className={classes.error}>{errors.name && touched.name && errors.name}</p>
                        </div>
                        <div className={`${classes['input-wrapper']} ${classes['email-input']}`}>
                            <label htmlFor='email'>Your Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='enter your email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <p className={classes.error}>{errors.email && touched.email && errors.email}</p>
                        </div>
                        <div className={classes['textarea-wrapper']}>
                            <label htmlFor='project'>Your project</label>
                            <textarea
                                type="text"
                                name="project"
                                rows="3"
                                placeholder='enter your project details'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.project}
                            />
                            <p className={classes.error}> {errors.project && touched.project && errors.project}</p>
                        </div>
                        <div className={classes['input-wrapper']}>
                            <label htmlFor='budget'>Your budget</label>
                            <input
                                type="text"
                                name="budget"
                                placeholder='enter your budget'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.budget}
                            />
                            <p className={classes.error}>{errors.budget && touched.budget && errors.budget}</p>
                        </div>
                        <div className={`${classes['input-wrapper']} ${classes['timeline-input']}`}>
                            <label htmlFor='timeline'>Your timeline</label>
                            <input
                                type="text"
                                name="timeline"
                                placeholder='enter your timeline'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.timeline}
                            />
                            <p className={classes.error}>{errors.timeline && touched.timeline && errors.timeline}</p>
                        </div>
                        <div className={classes['btn-wrapper']}>
                            <button type="submit" disabled={isSubmitting}>
                                Let's do this!
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            {sending && <p className={classes.msg}>sending...</p>}
            {success && <p className={classes.msg}>Successfully sent!</p>}
        </div >
    )
}

export default BasicForm