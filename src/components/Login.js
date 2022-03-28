import React, { useState, useEffect } from "react";
//import { Form, Button, Container } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import './Login.css'
import { loginEmailPassword, loginGoogle } from "../actions/actionLogin";
import { useDispatch, useSelector } from "react-redux";
import { POKE_KEY } from '../reducers/pokemonReducer';

function Login() {
 // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const dispatch = useDispatch();
  const singIn = (e)=>{

    e.preventDefault();
    dispatch(loginEmailPassword(email,password))
    setEmail("")
    setPassword("")
  }
  // const singInGoogle = (e)=>{

  //   e.preventDefault();
  //   dispatch(loginGoogle())
  //   setEmail("")
  //   setPassword("")
  // }
  let estados = useSelector((state) => {
    return state[POKE_KEY];
  
  });

  const handleGoogle = () => {
       dispatch(loginGoogle());
  }
  useEffect(()=>{

    if(estados.user){
    //history.push("/")
    console.log("history")
    }
      },[estados.user, dispatch])
  return (
    <div className="login">
     
      <div className="login-container">
        <h1>Sign In</h1>
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
          onClick={singIn}>
              Inicia sesión
          </button>
        </form>
        <button type='' 
          className='login-signIn'
          onClick={handleGoogle}>
              Inicia con google
          </button>
        <NavLink to="/register">


            <button className='login-register'>
              
                Crea una cuenta
            </button>



        </NavLink>
      </div>
    </div>
  );
}

export default Login;

