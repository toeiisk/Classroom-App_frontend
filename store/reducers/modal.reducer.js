import { combineReducers } from 'redux';

const Modal = (state = {}, action) => {
    switch (action.type) {
        case "VISIBLE":
            return {
                ...state,
                visible: action.condition
            }
        case "UNVISIBLE":
            return {
                ...state,
                visible: false
            }
        default:
            return { ...state }
    }
}

export default combineReducers({
    Modal
})
