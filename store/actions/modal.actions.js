
export const setVisible = (condition) => {
    // console.log('condition', condition)
    return async (dispatch) => {
        if (condition) {
            dispatch({
                type: 'VISIBLE',
                condition: condition
            })
        } else {
            dispatch({
                type: 'UNVISIBLE',
                condition: condition
            })
        }
    }
}