import React from 'react'
import PokeApp from './PokeApp'
import SearchBar from './Search'
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