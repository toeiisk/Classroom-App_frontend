import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';


const initialstate = {
    datauser: [],
 
  }
  
  
  const Chat  = (state = initialstate, action) => {
      switch (action.type) {
          case "SEND_SUCCESS":
            return {
              ...state,
            }
          case "SEND_ERROR":
            return {
              ...state,
            }
  
        default:
          return {...state};
      }
  }


export default combineReducers({
    Chat,
  });