import {Provider } from 'react-redux'
import React from 'react'
import PokeApp from './PokeApp'
import store from "../store";
// import PokeDetails from './PokeDetails'

const Home = () => {
    return (
        <React.Fragment>
            
            <div>
                {/* <PokeDetails/> */}
             
                <PokeApp/>
             
            </div>
        </React.Fragment>
      
    )
}

export default Home