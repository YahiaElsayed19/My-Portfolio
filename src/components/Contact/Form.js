import React from 'react'
import classes from './Form.module.css'

const Form = () => {
    return (
        <form className={classes['form-wrapper']}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id='name' placeholder='Enter Your Name'></input>

            <label htmlFor='email'>Your Email Address</label>
            <input type="email" id='email' placeholder='Enter Email Address'></input>

            <label htmlFor='project'>Project Details</label>
            <textarea type="text" id='project' placeholder='Enter Project Details'></textarea>

            <label htmlFor='budget'>Your Budget Range</label>
            <input type="number" id='budget' placeholder='Enter Budget Range'></input>

            <label htmlFor='timeline'>Your Timeline</label>
            <input type="text" id='timeline' placeholder='Enter Timeline'></input>

            <button>Let's do this</button>
        </form>
    )
}

export default Form