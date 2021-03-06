import Login from "./components/Login";
import Registro from "./components/Registro";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokeDetails from "./components/PokeDetails";
import Favoritos from "./components/Favoritos";

import {Provider } from 'react-redux'

import { Fragment } from "react";
import store from "./store";

function App() {
  return (
<Fragment>
  <Provider store={store} >
  <BrowserRouter > 

<Routes>

  <Route path='/' exact element={<Login/>}/>
  <Route path='/register' exact element={<Registro/>}/> 
<Route path='/home' exact element={<Home/>}/>
<Route path='/details/:url'exact element={<PokeDetails/>}/>
<Route path='/fav' exact element={<Favoritos/>}/>


</Routes>

</BrowserRouter>
  </Provider>

</Fragment>
  );
}

export default App;
