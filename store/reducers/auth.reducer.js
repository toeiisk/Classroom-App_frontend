import { combineReducers } from 'redux';

const createUser = (state = {}, action) => {
    switch (action.type) {

      case "CREATE_USER_LOADING":
          return {
              isLoading: true,
              isError: false,
              isSuccess: false,
              errors: null,

          }

      case "CREAT_USER_SUCCESS":
          return {
              isLoading: false,
              isError: false,
              isSuccess: true,
              errors: null
          }

      case "CREAT_USER_FAIL":
          return {
              isLoading: false,
              isError: true,
              isSuccess: false,
              errors: action.payload
          }

      default:
        return state;
    }
}


export default combineReducers({
    createUser,
  });