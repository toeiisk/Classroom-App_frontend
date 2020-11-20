import { combineReducers } from 'redux';
const initialState = {
    contentData : []
}


const Content  = (state = initialState, action) =>{
    switch(action.type){
        case "CREATE_CONTENT_SUCCESS":            
            return {
                ...state,
                contentData : action.data
            }
        
        case "CREATE_CONTENT_ERROR":
            return{
                ...state
            }
        default:
            return {...state}
    }
}



export default combineReducers({
    Content
})