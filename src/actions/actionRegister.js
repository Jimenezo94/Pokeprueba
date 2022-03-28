import * as types from '../types';
import {  getAuth, createUserWithEmailAndPassword} from "@firebase/auth";


const registerStart=() =>({

  type: types.register_start,


});

const register=(user)=>({
    type: types.register,
    payload: user,
})

const Errorregister=(error)=>({
    type:types.register_fallido,
    payload: error,
 })

export const RegisterInitiate = (email,password) =>{

    return function(dispatch) {
        dispatch(registerStart());
        const auth = getAuth();
   createUserWithEmailAndPassword(auth,email,password).then(({user})=>{
       dispatch(register(user))
       window.location.href = '/home'
   })
   .catch((error)=> dispatch(Errorregister(error.message)))

    }
}

