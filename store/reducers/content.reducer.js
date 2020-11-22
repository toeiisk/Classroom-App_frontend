import { isLoading } from 'expo-font';
import { combineReducers } from 'redux';
const initialState = {
    contentData : [],
}


const Content  = (state = initialState, action) =>{
    switch(action.type){
        case "CREATE_CONTENT_SUCCESS":
            return {
                ...state,
                contentData : action.data,
                isLoading : action.isLoding,
                havecontent : true
            }
        case 'LOAD_CONTENT':
            return{
                ...state,
                isLoading : action.isLoding
            }

        case "CREATE_CONTENT_ERROR":
            return{
                ...state,
                isLoading : action.isLoding,
                havecontent : false
            }
        default:
            return {...state, isLoading : true}
    }
}



export default combineReducers({
    Content
})