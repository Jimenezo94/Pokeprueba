import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { actualizar, searchPokemon } from '../actions/pokeactions'
import { POKE_KEY } from '../reducers/pokemonReducer';

const SearchBar = () => {

    let dispatch = useDispatch () 

    const handleInpuSearch= (e) => {
        dispatch(searchPokemon(e))
        console.log(e, estados.search, 'ttt')
        
        let datos= estados.data.results.filter(function(element){
            if(element.name.startsWith(e)){
                return element;

            }
          });
         
          let obj ={ 
              results:datos
          }
           if(estados.search.length === 0){
            console.log('lon')  
            obj = estados.data
          }
          //estados.data_filtrada= obj
          dispatch(actualizar(obj))
        console.log( estados.data_filtrada, 'data',obj)
    }
    let estados = useSelector((state) => {
    return state[POKE_KEY];
    
  });

    const click_search= (e) => {
        e.preventDefault();
        //dispatch(searchPokemon(e))
        console.log( estados.search, 'hfhfghfg')
        console.log( estados.search.length, 'hfhfghfg')
        //console.log( estados.data.results.find( fruta => fruta.name === 'raichu' ), 'data.results')

        let datos= estados.data.results.filter(function(element){
            return element.name === estados.search;
          });
         
          let obj ={ 
              results:datos
          }
           if(estados.search.length === 0){
            console.log('lon')  
            obj = estados.data
          }
          //estados.data_filtrada= obj
          dispatch(actualizar(obj))
        console.log( estados.data_filtrada, 'data',obj)
    }
    

  return (
   
  <div className='Searcher wrapper'>

             
<form htmlFor='for'>
  <label for="gsearch">Busca tu pokemon favorito: </label>
  <input type="search" 
  id="gsearch" 
  name="gsearch"
  onChange={event => handleInpuSearch(event.target.value)}/>
  <input type="submit" onClick={event =>click_search(event)}/> 
</form>
       
    
          </div>

  )
}

export default SearchBar;