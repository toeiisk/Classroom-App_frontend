import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'



import authReducer from "./auth.reducer";
import classReducer from './class.reducer'
import modalReducer from './modal.reducer'
import lessonReducer from './lesson.reducer'
import contentReducer from './content.reducer'
import commentReducer from './comment.reducer'
import chatReducer from './chat.reducer'



const reducers = {
    authReducer,
    classReducer,
    modalReducer,
    lessonReducer,
    contentReducer,
    commentReducer,
    chatReducer
};

const appReducer = combineReducers(reducers);


const rootReducer = (state, action) => {

    if (action.type === "USER_LOGGED_OUT_SUCCESS") {
        state = {}
    }

    return appReducer(state, action);
}

export default rootReducer;