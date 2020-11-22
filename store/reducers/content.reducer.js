import { isLoading } from 'expo-font';
import { combineReducers } from 'redux';
const initialState = {
    contentData : [],
    isLoading: true
}


const Content  = (state = initialState, action) =>{
    switch(action.type){
        case "CREATE_CONTENT_SUCCESS":
            return {
                ...state,
                contentData : action.data,
                isLoading : action.isLoding,
                err: action.err
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
                err: action.err
            }
        default:
            return {...state}
    }
}



export default combineReducers({
    Content
})