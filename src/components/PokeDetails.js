import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPokeName } from '../actions/pokeactions.js'
 import { POKE_KEY } from '../reducers/pokemonReducer.js'
import {Link} from 'react-router-dom'


const PokeDetails = () => {


    let dispatch = useDispatch()

    let pokemonName = useParams().url
    console.log(pokemonName, 'hhh')

    //const {pokemonInfo} =useSelector((state) =>state.pokeUrlInfo)

    useEffect(() => {
   dispatch(loadPokeName(pokemonName))

    }, )

      //  view store
        let viewPoke = useSelector((state) => {
    console.log(pokemonName, 'hhh')
        
          return state[POKE_KEY];
        });

    return (
   
      <div className="detailContainer" style={{display:'flex', padding:'15px 15px'}}>
              <div >
              <h4>Nombre:</h4>
        <h4>{pokemonName} </h4>
        <h3>Altura</h3>
        <h5>{viewPoke.pokeUrlData.height}</h5>
              <h3>Peso</h3>
        <h5>{viewPoke.pokeUrlData.weight}</h5>
        {/* <h5>{viewPoke.pokeUrlData.types}</h5> */} </div>  

        
      <div className="detailContent centered" >
         <div> 
        {
          
          Object.keys(viewPoke.pokeUrlData).length === 0? null:
          <React.Fragment>
           
                <h3>Habilidades</h3>

                 {viewPoke.pokeUrlData.abilities.map((skill) => {
                  return (
                    <p> {skill.ability.name} </p>
                  );
                })}
                 <div> 
                <h3>Movimientos</h3>
                 {viewPoke.pokeUrlData.moves.map((item) => {
                  return (
                    <p> {item.move.name} </p>
                  );
                })}
                 <h3>Tipo</h3>
                 {viewPoke.pokeUrlData.types.map((item) => {
                  return (
                    <p> {item.type.name} </p>
                  );
                })}
            
            </div>  

          <img src={viewPoke.pokeUrlData.sprites.front_default} alt="" width='300' height='300'/>
         <Link to='/home' ><h5><i className="fa fa-arrow-left" ></i> BACK</h5></Link>
          </React.Fragment>
        }
             
          </div>
      </div>
      </div>
    
  
  
    
     )
}

export default PokeDetails