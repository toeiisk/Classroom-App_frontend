import axios from "axios";

export const createNewUser = (payload) => {
    return  async (dispatch) => {
        
        try{
            dispatch({
                type: "CREATE_USER_LOADING"
            });
            axios
            .post('http://103.13.231.22:3000/api/auth/signup', payload)
            .then(() =>{
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

export const UserLogin = (payload) => {
    return async (dispatch) =>{
        try{
            dispatch({
                type: "AUTH_LOADING"
            });
            axios
            .post('http://103.13.231.22:3000/api/auth/signin', payload)
            .then(() =>{
                dispatch({
                    type: "AUTH_LOGIN_SUCCES"
                })
            })
            .catch(() => {
                dispatch({
                    type: "AUTH_LOGIN_FAIL"
                })
            })
        }catch (er){
            console.log(er.message)
            dispatch({
                type: "AUTH_LOGIN_FAIL"
            })
        }
    }
    
}

 