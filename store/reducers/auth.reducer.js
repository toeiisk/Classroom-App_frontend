import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';



const user = AsyncStorage.getItem('token')
if(user === null){
  console.log('null')
  initialState = {
    isLoggedin: false,
    isSuccess: false
  }
}else{
  console.log('not null')
  initialState = {
    isLoggedin: true,
    isSuccess: false
  }
}

const AuthReducer  = (state = initialState, action) => {
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

const UserLogin = (state = initialState, action) =>{
    switch (action.type) {

        case "AUTH_LOADING":
            return{
                isSuccess: false,
            }
        case "AUTH_LOGIN_SUCCES":
            console.log('success')
            console.log(user)
            return{
                ...state,
                isLoggedin: false,
                isSuccess: true,                
            }
        case "AUTH_LOGIN_FAIL":
            console.log('faile')
            return{
                ...state,
                isLoggedin: false,
                isSuccess: false,
            }
        default:
            return state
    }
}

export default combineReducers({
    AuthReducer,
    UserLogin
  });