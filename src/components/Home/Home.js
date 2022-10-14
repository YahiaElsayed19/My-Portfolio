import React, { useRef } from 'react'
import Landing from './Landing'
import MyWork from './MyWork'

const Home = () => {
    const myWorkRef = useRef()
    function scrollHandler() {
        myWorkRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <Landing onScroll={scrollHandler} />
            <MyWork ref={myWorkRef} />
        </>
    )
}

export default Home