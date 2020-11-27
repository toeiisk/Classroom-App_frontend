import { combineReducers } from 'redux';
const initialState = {
    LessonmUser: []
}

const Lesson = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON_SUCCESS":
            return {
                ...state,
                LessonmUser: action.data,
                isLoading: action.loading
            }

        case "CREATE_LESSON_ERROR":
            return {
                ...state,
                isLoading: action.loading
            }


        case "LOAD_LESSON":
            return {
                ...state,
                isLoading: action.loading
            }
        default:
            return { ...state }
    }
}

export default combineReducers({
    Lesson
})
