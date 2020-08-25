import axios from "axios";

export const createNewUser = (payload) => {
    return  (dispatch) => {
        
        try{
            dispatch({
                type: "CREATE_USER_LOADING"
            });
            axios
            .post('http://103.13.231.22:3000/api/auth/signup', payload)
            .then(() =>{
                console.log("Register Complete")
                dispatch({
                    type: "CREAT_USER_SUCCESS"
                })
            })
            .catch((er) =>{
                dispatch({
                    type: "CREAT_USER_FAIL"
                })
                console.log(er.message)
                console.log("Register not complete");
            })
        }catch (er) {
            dispatch({
                type: "CREAT_USER_FAIL",
                payload: error.responseBody
            });
            return er;
        }
        
       
    }
}