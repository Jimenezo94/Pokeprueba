import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebaseConfig";

import { loadData, loadPokeName } from "../actions/pokeactions";
import { POKE_KEY } from "../reducers/pokemonReducer";
import SearchBar from "./Search";
import Favoritos from "./Favoritos";
import axios from "axios";
import { addDoc, collection } from "@firebase/firestore";

const PokeApp = () => {
  let dispatch = useDispatch();
  // view store
  let estados = useSelector((state) => {
    return state[POKE_KEY];
  });

  const activateFavs = async (p) => {
    console.log("jjffgwe", p);
    dispatch(loadPokeName(p.name));
    //  setTimeout(()=>{console.log(estados.pokeUrlData)},3000)

    // dispatch(addTofav(p.items))
    try {
      console.log("I am back here: ", estados.name);
      let dataURL = `https://pokeapi.co/api/v2/pokemon/${p.name}`;
      let response = await axios.get(dataURL);
      console.log(response);
      let objadd = {
        name: p.name,
        altura: response.data.height,
        peso: response.data.weight,
        tipo: response.data.types,
        usuario: "a1@a.com",
      };
      addDoc(collection(db, "favoritos"), objadd)
        .then((resp) => {
          console.log(objadd);
          //window.location.href = '/fav'
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("EEER", error);
    }
  }; 

  useEffect(() => {
    dispatch(loadData());
    console.log("estados.", estados.data_filtrada);
  }, []);

  console.log(POKE_KEY, "kkkj");

  return (
    <div>
      <div className="card">
        <Link to="/fav">
          <p>Favoritos</p>
        </Link>{" "}
        <div className="card-header centered">
          <h5>THE POKE APP</h5>
        </div>
        <SearchBar />
        <div className="card-body">
          <div className="pokeContainer">
            {estados.data_filtrada.length === 0 ? null : (
              <React.Fragment>
                {estados.data_filtrada.results.map((item) => {
                  return (
                    <div key={item.name}>
                      <div className="pokeItem">
                        <div className="pokeNameContainer centered">
                          <p>{item.name}</p>
                        </div>

                        <div className="pokeNameContainer centered"></div>
                        <div className="viewImageContainer centered">
                          <Link to={`/details/${item.name}`}>
                            <p>Detalles</p>
                          </Link>
                        </div>
                      </div>
                      {/* <button
                         onClick={additem()}
                         >Add
                        </button> */}

                      <button style={{margin:'auto'}}onClick={() => activateFavs(item)}>
                        Fav
                      </button>
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
