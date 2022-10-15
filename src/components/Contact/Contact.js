import React from 'react'
import Freelance from './Freelance'
import Info from './Info'
import FormSection from './FormSection'
import ContactFooter from './ContactFooter'
import GoToTop from '../Helpers/GoToTop'


const Contact = () => {
    return (
        <>
            <Freelance />
            <Info />
            <FormSection />
            <ContactFooter />
            <GoToTop />
        </>
    )
}

export default Contact