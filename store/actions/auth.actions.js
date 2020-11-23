import axios from "axios";
import { AsyncStorage } from 'react-native';


export const reRegister = () =>{
    return async (dispatch) =>{
        dispatch({
            type : "CREAT_USER_FAIL",
            isSuccess: false

        })
    }
}

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
                await AsyncStorage.setItem('token', res.data.accessToken)
                axios.get('http://103.13.231.22:3000/api/test/user', {
                    headers: { 'x-access-token': res.data.accessToken}
                })
                .then(async(res) => {
                    if(res.status == 200) {
                        dispatch({
                            type: "AUTH_LOGIN_SUCCES",
                            dataUser: res.data.user,
                            isSuccess: true
                        })
                    }else{
                        dispatch({
                            type: "AUTH_LOGIN_FAIL",
                        })
                    }
                })
                .catch((er) => console.log('er', er))
            })
            .catch((er) => {
                console.log(er)
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

export const EditUser = (payload) => {
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        let formData = new FormData();
        if(payload.image == null){
            formData.append('firstname', payload.firstname);
            formData.append('lastname', payload.lastname);
            formData.append('phone', payload.phone);
            formData.append('idstudent', payload.idstudent);
        }else{
            formData.append('firstname', payload.firstname);
            formData.append('lastname', payload.lastname);
            formData.append('phone', payload.phone);
            formData.append('idstudent', payload.idstudent);
            formData.append('img', {
                uri: payload.image,
                type: 'image/jpeg',
                name: 'test.jpg'
        });
        }
        try{
            await axios({
                method: 'PATCH',
                url: 'http://103.13.231.22:3000/api/user/edituser',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': token
                }
            })
            .then(async () => {
                await axios.get('http://103.13.231.22:3000/api/test/user', {
                    headers: { 'x-access-token': token}
                })
                .then((res) =>{
                    dispatch({
                        type: "AUTH_LOGIN_SUCCES",
                        dataUser: res.data.user,
                        isSuccess: true,
                        editSuccess: true

                    })
                })
                .catch((er) => {
                    console.log(er)
                    dispatch({
                        type: "AUTH_LOGIN_FAIL",
                        isSuccess: false,
                        editSuccess: false
                    })
                })
            })
            .catch((er) => {
                console.log(er)
                dispatch({
                    type: "AUTH_LOGIN_FAIL",
                    isSuccess: false,
                    editSuccess: false

                })
            })
        }catch(er){
            console.log(er)
            dispatch({
                type: "AUTH_LOGIN_FAIL",
                isSuccess: false

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
                    const token = res.data.accessToken
                    await AsyncStorage.setItem('token', token)
                    var token2 = await AsyncStorage.getItem('token')
                    await axios.get('http://103.13.231.22:3000/api/test/user/', {
                      headers: {
                        'x-access-token': token2
                      }
                    })
                    .then((res) => {
                        if(res.status == 200){
                            dispatch({type : 'AUTH_LOGIN_SUCCES', dataUser : res.data.user,  isSuccess: true})
                        }else{
                          dispatch({type : 'AUTH_LOGIN_FAIL'})
                        }
                      })
                      .catch((er) => console.log(er.message))
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

 