import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_SUCCESS_2,
    LOAD_DATA_FAILURE,
    LOAD_POKE_REQUEST,
    LOAD_POKE_SUCCESS,
    LOAD_POKE_FAILURE,
    SEARCH,
    addfav,
                       } from '../types.js'

import axios from 'axios'
 

export const loadData = () =>{
return async (dispatch) =>{
   try{
      // dispatch({type: LOAD_DATA_REQUEST})
//  let dataURL = `https://pokeapi.co/api/v2/pokemon`
       let dataURL = `https://pokeapi.co/api/v2/pokemon?limit=25&offset=25`
  let response = await axios.get(dataURL)
      dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})
      dispatch({type: LOAD_DATA_SUCCESS_2, payload: response.data})
   }
   catch(error){
       dispatch({type: LOAD_DATA_FAILURE, payload:error})
   }
}
}



// loading poke data

export const loadPokeName = (pokemonName) =>{
    return async (dispatch) =>{
       try{
           console.log('I am back here: '+ pokemonName)
           dispatch({type: LOAD_POKE_REQUEST})
           console.log('I am back here2: '+ pokemonName)
           let dataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
           let response = await axios.get(dataURL)
           dispatch({type: LOAD_POKE_SUCCESS, payload: response.data})
       }
       catch(error){
           dispatch({type: LOAD_POKE_FAILURE, payload:error})
       }
    }
    }

    //search

    export const searchPokemon = (value)=>{
        return async (dispatch) => {
            try{
                console.log('Iiiii  QSWZ ')
                dispatch({type: SEARCH})
                //let resultados = 
            
                dispatch({type: SEARCH, payload: value})
            }
            catch(error){
                dispatch({type: LOAD_POKE_FAILURE, payload:error})
            }

        }

    }
    

    
    export const actualizar = (objeto) =>{
        return async (dispatch) =>{
           try{
              dispatch({type: LOAD_DATA_SUCCESS_2, payload: objeto})
           }
           catch(error){
               dispatch({type: LOAD_DATA_FAILURE, payload:error})
           }
        }
        }
        
        export const addTofav =(item)=>{
            return async (dispatch) =>{
                try{
                    dispatch({type:addfav, payload:item})
                }
                catch(err){
                    console.log('no')

                }

            }
        }