import { combineReducers } from 'redux';


const AuthReducer  = (state = {}, action) => {
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

const UserLogin = (state = {}, action) =>{
    switch (action.type) {

        case "AUTH_LOADING":
            return{
                isLoading: true,
                isError: false,
                isSuccess: false,
                errors: action.payload   
            }
        case "AUTH_LOGIN_SUCCES":
            console.log('success')
            return{
                isLoading: false,
                isError: true,
                isSuccess: true,
                errors: action.payload,
                
            }
        case "AUTH_LOGIN_FAIL":
            console.log('faile')
            return{
                isLoading: false,
                isError: true,
                isSuccess: false,
                errors: action.payload,
            }
        default:
            return state
    }
}

export default combineReducers({
    AuthReducer,
    UserLogin
  });