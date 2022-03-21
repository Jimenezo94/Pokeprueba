import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../actions/pokeactions";
import { POKE_KEY } from '../reducers/pokemonReducer';
import SearchBar from "./Search";

const PokeApp = () => {
  let dispatch = useDispatch();
 // view store
 let viewPoke = useSelector((state) => {
  return state[POKE_KEY];

});
  
  useEffect(() => {
    dispatch(loadData());
    console.log("viewPoke.",viewPoke.data_filtrada)
  }, );

 
  console.log("vvvvvvvv",viewPoke.data_filtrada)

console.log(POKE_KEY,'kkkj')

  return (
    <div>
      <div className="card">
        <div className="card-header centered">
          <h5>THE POKE APP</h5>
        </div>
                     <SearchBar />
        <div className="card-body">
          <div className="pokeContainer">
            {viewPoke.data_filtrada.length === 0 ? null : (
              <React.Fragment>
                {viewPoke.data_filtrada.results.map((item) => {
                  return (
                    <div key={item.name} >
                      <div className="pokeItem">
                      <div className="pokeNameContainer centered">
                          <p>{item.name}</p>
                        </div> 
                        
                        <div className="pokeNameContainer centered">
                        </div>
                        <div className="viewImageContainer centered">
                        <Link to={`/details/${item.name}`}><p>Detalles</p></Link> 
                        </div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>


      
     
  
  );
};

export default PokeApp;