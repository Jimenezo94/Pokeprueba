import * as types from "../types.js";

export const POKE_KEY = 'pokeStore';

let initialState = {
    data: [],
    data_filtrada: [],
    loading:false,
    errorMessage:'', 
    pokeUrlData:{}, 
    search:'',
    user: null,
    error:null,
}

const pokeReducer = (state = initialState, action) =>{
  let {type, payload} = action
  switch(type){
       
      case types.LOAD_DATA_REQUEST:
          return{
              ...state,
              loading:true
          }
          case types.LOAD_DATA_SUCCESS:
              return{
                  ...state,
                  loading:false,
                  data:payload,
              }
              case types.LOAD_DATA_SUCCESS_2:
                  return{
                      ...state,
                      loading:false,
                      data_filtrada:payload
                  }

               
              case types.LOAD_DATA_FAILURE:
                  return{
                      ...state,
                      errorMessage:payload
                  }

                  // poke section
                  case types.LOAD_POKE_REQUEST:
                      return{
                          ...state,
                          loading:true
                      }
                    case types.LOAD_POKE_SUCCESS:
                          return{
                              ...state,
                              loading:false,
                              pokeUrlData:payload
                          }
          
                           
                          case types.LOAD_POKE_FAILURE:
                              return{
                                  ...state,
                                  errorMessage:payload
                              }
                              case types.SEARCH:
                                return{
                                    ...state,
                                    search:payload
                                }
                                case types.register_start:
                                    case types.login_start:
                                    case types.logout_start:
                                    return{
                                        ...state,
                                        loading: true,
                                       
                                    }
                                    case types.register:
                                    case types.login:
                                    case types.login_success:
                                    return{
                                        ...state,
                                        loading: false,
                                        user: action.payload,
                                       
                                    }
                                    case types.logout_success:
                                        return{
                                            ...state,
                                            user:null,
                                        }
                                    case types.set_user:
                                        return{
                                            ...state,
                                            user:action.payload
                                        }
                                    case types.register_fallido:
                                    case types.login_fallido:
                                    case types.logout_fallido:
                                    return{
                                        ...state,
                                        loading: false,
                                        error: action.payload,
                                       
                                    }
                  default: return state
  }

}
export default pokeReducer;