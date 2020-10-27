import axios from "axios";
import { AsyncStorage } from 'react-native';

export const createNewUser = (payload) => {
    return async (dispatch) => {        
        try{
            dispatch({
                type: "CREATE_USER_LOADING"
            });
            await axios
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

export const UserLogout = () =>{
    return async (dispatch) => {
        await AsyncStorage.clear()
        dispatch({
            type: "LOGOUT_SUCCESS"
        })
    }
}


export const FacebookLogin = (payload) => {
    return async (dispatch) => {
        try{
            axios
            .post('http://103.13.231.22:3000/api/auth/facebook', payload)
            .then(async (res) => {
                if(res.status == 200) {
                    console.log(res.status)
                    const token = res.data.accessToken
                    await AsyncStorage.setItem('token', token)
                    dispatch({
                        type: "AUTH_LOGIN_SUCCES",
                    })
                }else{
                    dispatch({
                        type: "AUTH_LOGIN_FAIL",
                    })
                }
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
export const UserLogin = (payload) => {
    return async (dispatch) =>{
        try{
            axios
            .post('http://103.13.231.22:3000/api/auth/signin', payload)
            .then(async (res) =>{
                if(res.status == 200) {
                    console.log(res.status)
                    const token = res.data.accessToken
                    await AsyncStorage.setItem('token', token)
                    dispatch({
                        type: "AUTH_LOGIN_SUCCES",
                    })
                }else{
                    dispatch({
                        type: "AUTH_LOGIN_FAIL",
           
                    })
                }
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

 