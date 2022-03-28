import * as types from '../types'
import {  getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { google } from '../firebaseConfig';

const loginStart=() =>({

    type: types.login_start,
  
  
  });
  
  const login_success=(user)=>({
      type: types.login_success,
      payload: user,
  })
  
  
  const Errorlogin=(error)=>({
      type:types.login_fallido,
      payload: error,
   })

   const logoutStart=() =>({
    type: types.logout_start,
  });

   const logout_success=()=>({
    type: types.logout_success,
})


const logout_error =(error)=>({
    type:types.logout_fallido,
    payload: error,
 })


export const setuser = (user) =>({
    type:types.set_user,
    payload: user,
 })
export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

        dispatch(loginStart());
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                // loginSincrono(user.uid,user.displayName)
                login_success(user)
             ) 
             window.location.href = '/home'
       })
       .catch(e =>{
            console.log('El usuario no existe');
            dispatch(Errorlogin(e.message));
       })
    }
}

export const loginGoogle = () => {

    return(dispatch) => {
        dispatch(loginStart());
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            // dispatch(loginSincrono(user.uid,user.displayName))
            login_success(user)
            console.log(`Bienvenid@ ${user.displayName}`);
            window.location.href = '/home'
        })
        .catch(e =>{
            console.log(e);
            dispatch(Errorlogin(e.message));

        })
    }
}


export const logoutInitiate = () =>{
    return (dispatch) =>{

        dispatch(logoutStart());
        const auth = getAuth();
        signOut(auth)
       .then((resp) =>{
             dispatch(
                logout_success(resp)
             ) 
         })
       .catch(e =>{
            dispatch(logout_error(e.message));
       })
    }
}

