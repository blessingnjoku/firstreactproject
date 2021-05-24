import React from 'react'
import Example from '../component/state'
import Temp from '../component/temp'
import Trial from '/component/lifecycle'
import {Link} from 'react-router-dom'
import HookPractice from '../component/hook'
import Hero from '../component/hero'


function Home(){
    return(
        <div>
            {/* <Navbar/> */}
            <Temp/>
            <Trial/>
            <Hero/>
            <h1 classNmae="text-primary">this the home page</h1>
            <Link to="/about">click to go about pages</Link>
            <Example/>
            <HookPractice/>

        </div>
    )
}
export default Home;
