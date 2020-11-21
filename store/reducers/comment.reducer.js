import { combineReducers } from 'redux';


const initialState = {
    commentData : [],
}

const Comment  = (state = initialState, action) =>{
    switch(action.type){
        case "LOAD_COMMENT":
            return {
                isLoading: action.isLoading
            }
        case "POST_SUCCESS":
            return {
                ...state,
                commentData : action.data,
                isLoading: action.isLoading
               
            }
        case "POST_ERROR":
            return{
                ...state,
                isLoading: action.isLoading
            }
        default:
            return {...state, isLoading: true}
    }
}



export default combineReducers({
    Comment
})
