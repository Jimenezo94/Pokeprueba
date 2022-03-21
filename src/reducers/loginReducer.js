import { types } from "../types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register_start:
    case types.login_start:
    case types.logout_start:
      return {
        ...state,
        loading: true,
      };
    case types.register:
    case types.login:
    case types.login_success:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.logout_success:
      return {
        ...state,
        user: null,
      };
    case types.set_user:
      return {
        ...state,
        user: action.payload,
      };
    case types.register_fallido:
    case types.login_fallido:
    case types.logout_fallido:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
