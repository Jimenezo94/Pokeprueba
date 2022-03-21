import React, { useState, useEffect } from "react";
import './registro.css'
//import { Form, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginEmailPassword, loginGoogle } from "../actions/actionLogin";
import { RegisterInitiate } from "../actions/actionRegister";
import { POKE_KEY } from '../reducers/pokemonReducer';


function Registro() {

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

 // const {user} =useSelector((state) =>state.data)
  // console.log("state", user)
  // const history = useNavigate()
  const dispatch = useDispatch();

  let estados = useSelector((state) => {
    return state[POKE_KEY];
  
  });
    


  const registro = (e)=>{

    e.preventDefault();
    dispatch(RegisterInitiate(email,password))
    console.log(email,password)
    setEmail("")
    setPassword("")
  }
  
  useEffect(()=>{
    console.log("fsdf")
    if(estados.usuario){
    //history.push("/")
    console.log("history")
    }
      },[estados.usuario, dispatch])
      
  // const handleLogin = (e) => {
  //    e.preventDefault();
  //    dispatch(loginEmailPassword(email,password));
  // }

  // const handleGoogle = () => {
  //      dispatch(loginGoogle());
  // }

  return (
    <div className="register">
      <NavLink to="/">
        <img src="" alt="logo" className="register-logo" />
      </NavLink>
      <div className="register-container">
        <h1>Registro</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' 
          className='login-signIn'
          onClick={registro}>
              Registrate
          </button>
        </form>
        <p>Ya tienes una cuenta?</p>
        <NavLink to="/">
            <button className='sigIn-link'>
               Inicia sesion
            </button>



        </NavLink>
      </div>
    </div>
  );
}

export default Registro;


