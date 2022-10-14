import React, { useRef } from 'react'
import Available from './Available'
import Landing from './Landing'
import MyWork from './MyWork'
import Footer from './Footer'

const Home = () => {
    const myWorkRef = useRef()
    function scrollHandler() {
        myWorkRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <Landing onScroll={scrollHandler} />
            <MyWork ref={myWorkRef} />
            <Available />
            <Footer/>
        </>
    )
}

export default Home