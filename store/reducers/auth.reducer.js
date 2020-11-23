import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';

const initialstate = {
  datauser: [],
  isSuccess: false,
  isLoggedin: false,
  editSuccess: false
}


const AuthReducer  = (state = initialstate, action) => {
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
        return {...state};
    }
}


const UserLogin = (state = initialstate, action) =>{
    switch (action.type) {
        case "AUTH_LOADING":
            return{
                isSuccess: false,
            }
        case "AUTH_LOGIN_SUCCES":
            return{
                ...state,
                datauser: action.dataUser,
                isSuccess: true,
                editSuccess: action.editSuccess

            }
        case "AUTH_LOGIN_FAIL":
          console.log('loginfail')
            return{
                ...state,
                isLoggedin: false,
                isSuccess: false,
                editSuccess: action.editSuccess
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
            return{ ...state}
    }
}

export default combineReducers({
    AuthReducer,
    UserLogin,
  });