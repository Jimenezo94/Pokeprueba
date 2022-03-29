import React from 'react';
import { shallow} from 'enzyme';
import * as types from './types';
import App from './App';
import pokeReducer from './reducers/pokemonReducer';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import Registro from './components/Registro';
import Search from './components/Search';
import Login from './components/Login';
import PokeApp from './components/PokeApp';
import { mount } from 'enzyme/build';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import {Provider } from 'react-redux'
import store from "./store";
import { Button } from 'bootstrap';

describe('pruebas', ()=>{
    const initialState = { output: 10 };
    const mockStore = configureStore();

    test('debería mostrarse', () => {
      const wrapper = shallow(<Home/>);
  
      expect(wrapper).toMatchSnapshot();
  
   
    })
  
   
    test('estado por defecto', ()=>{
        const state = pokeReducer({loading:true}, {})
  
        expect (state).toEqual({loading:true});
  
    })
    // test('debería regi', () => {
    //   const wrapper = shallow(<PokeApp/>);
  
    //   expect(wrapper).toMatchSnapshot();
  
   
    // })
    // test('debería search', () => {
    //   const wrapper = shallow(<SearchBar/>);
  
    //   expect(wrapper).toMatchSnapshot();
  
   
    // })
  
  
    test('user es', ()=>{
      const state = pokeReducer({user:null}, {})
  
      expect (state).toEqual({user:null});
  })
  test('obj', ()=>{
    expect(types).toEqual({
      ACTUALIZAR_DATA: "ACTUALIZAR_DATA",
         LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE",
         LOAD_DATA_REQUEST: "LOAD_DATA_REQUEST",
         LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
         LOAD_DATA_SUCCESS_2: "LOAD_DATA_SUCCESS_2",
         LOAD_POKE_FAILURE: "LOAD_POKE_FAILURE",
         LOAD_POKE_REQUEST: "LOAD_POKE_REQUEST",
         LOAD_POKE_SUCCESS: "LOAD_POKE_SUCCESS",
         SEARCH: "SEARCH",
         addfav: "addfav",
          login: "login",
         login_fallido: "login_fallido",
         login_start: "login_start",
         login_success: "login_success",
         logout_fallido: "logout_fallido",
         logout_start: "logout_start",
         logout_success: "logout_success",
         register: "register",
         register_fallido: "register_fallido",
            register_start: "register_start",
      set_user: "set_user",
     })
  })
  
  
  test('user',()=>{
      const loginE = {
          type:types.login,
          payload: {
            email:'',
            password:'',
         }
       }
  
  const state = pokeReducer ({loading:false }, loginE)
  expect(state).toEqual({
    loading: false, 
    user:{
      email:'', password:'',
   }
  })
        
  })
  
  test('estado favoritos',()=>{
    const action = {
        type:types.SEARCH,
        payload: 'word'
     }

const state = pokeReducer ({ }, action)
expect(state).toEqual({
  search:'word'
})
      
})
// it('should render correctly with no props', () => {
//   const component = shallow(<Home />);
  
//   expect(component).toMatchSnapshot();
// });
// it('should disable submit button on submit click', () => {
//   //const wrapper = shallow(<PokeApp />);
//   const { wrapper } = render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

//   // const submitButton = wrapper.find();
//   // submitButton.simulate('click');

//   // expect(submitButton.prop('disabled')).toBeTruthy();
//   //wrapper.instance().validateForm()
//   //expect(wrapper.html()).toMatchSnapshot();
//   expect(wrapper.find('Email').length).toEqual(1);
//  })
    // let store;

    it('Shows "Sign In!"', () => {
      //store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <App />
          </Provider>
      );

      expect(screen.getByText('Sign In')).not.toBeNull();
  })
  it('Shows "earch"', () => {
    //store = mockStore(initialState);
    const { getByText } = render(
        <Provider store={store}>
            <Search />
        </Provider>
    );

    expect(screen.getByText('Busca tu pokemon favorito:')).not.toBeNull();
})
  })