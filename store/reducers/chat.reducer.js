import { combineReducers } from 'redux';

const initialstate = {
  datauser: [],
}

const Chat = (state = initialstate, action) => {
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
      return { ...state };
  }
}

export default combineReducers({
  Chat,
});
