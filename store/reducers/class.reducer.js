import { combineReducers } from 'redux';
const initialState = {
    classroomUser : []
}


const Classroom  = (state = initialState, action) =>{
    switch(action.type){
        case "CREATE_CLASSROOM_SUCCESS":            
            return {
                ...state,
                classroomUser : action.data
            }
        
        case "CREATE_CLASSROOM_ERROR":
            return{
                ...state
            }
        default:
            return {...state}
    }
}



export default combineReducers({
    Classroom
})