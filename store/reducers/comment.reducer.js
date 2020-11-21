import { combineReducers } from 'redux';


const initialState = {
    commentData : [],
}

const Comment  = (state = initialState, action) =>{
    switch(action.type){
        case "LOAD_COMMENT":
            return {
                isLoading: action.isLoding
            }
        case "POST_SUCCESS":
            return {
                ...state,
                commentData : action.data,
                isLoding: action.isLoding
               
            }
        case "POST_ERROR":
            return{
                ...state,
                isLoding: action.isLoding
            }
        default:
            return {...state}
    }
}



export default combineReducers({
    Comment
})
