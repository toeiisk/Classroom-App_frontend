import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';


const AuthReducer  = (state = {}, action) => {
    switch (action.type) {

        case "CREATE_USER_LOADING":
          return {
            ...state,
            isSuccess: false,
          }
        

        case "CREAT_USER_SUCCESS":
          return {
            ...state,
            isLoggedin: false,
            isSuccess: true,
          }

        case "CREAT_USER_FAIL":
          return {
            ...state,
            isLoggedin: false,
            isSuccess: false,
          }

      default:
        return state;
    }
}

const UserLogin = (state = {}, action) =>{

    switch (action.type) {

        case "AUTH_LOADING":
            return{
                isSuccess: false,
            }
        case "AUTH_LOGIN_SUCCES":
            console.log('login username')
            return{
                ...state,
                isLoggedin: false,
                isSuccess: true,                
            }
        case "AUTH_LOGIN_FAIL":
            return{
                ...state,
                isLoggedin: false,
                isSuccess: false,
            }
        case "LOGOUT_SUCCESS":
            return{
              ...state,
              isLoggedin: false,
              isSuccess: false,
            }
        case "LOGOUT_ERROR":
            return{
              ...state,
              logErr: action.err
            }
        default:
            return state
    }
}

export default combineReducers({
    AuthReducer,
    UserLogin
  });