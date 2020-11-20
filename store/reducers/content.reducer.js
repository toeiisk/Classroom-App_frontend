import { isLoading } from 'expo-font';
import { combineReducers } from 'redux';
const initialState = {
    contentData : [],
    isLoading : null
}


const Content  = (state = initialState, action) =>{
    console.log(action.type)
    switch(action.type){
        case "CREATE_CONTENT_SUCCESS":
            return {
                ...state,
                contentData : action.data,
                isLoading : action.isLoding
            }
        case 'LOAD_CONTENT':
            return{
                ...state,
                isLoading : action.isLoding
            }

        case "CREATE_CONTENT_ERROR":
            return{
                ...state,
                isLoading : action.isLoding
            }
        default:
            return {...state}
    }
}



export default combineReducers({
    Content
})