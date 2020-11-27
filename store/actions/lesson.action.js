import axios from "axios";
import { AsyncStorage } from 'react-native';

export const createLesson = (payload) =>{
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        const data = {
            'name' : payload.namelesson
        }
        try{
            await axios.post(`http://103.13.231.22:3000/api/classroom/${payload.idclassroom}/lesson/create`, data, {
                headers : { 'x-access-token': token}
            })
            .then(async() => {
                await axios.get(`http://103.13.231.22:3000/api/classroom/${payload.idclassroom}/lesson`, 
                {headers: {
                    'x-access-token': token
                }})
                .then((res) => {
                    dispatch({
                        type: 'CREATE_LESSON_SUCCESS',
                        data : res.data.lessons,
                    })
                })
                .catch((er) => {
                    dispatch({
                        type: 'CREATE_LESSON_ERROR'
                    })
                })
            })
            .catch((er) => {
                dispatch({
                    type: 'CREATE_LESSON_ERROR'
                })
            })
        }catch{
            dispatch({
                type: 'CREATE_LESSON_ERROR'
            })
        }
    }
}

export const getLesson = (payload) => {
    return async (dispatch) =>{
        var token = await AsyncStorage.getItem('token')
        dispatch({
            type: 'LOAD_LESSON',
            loading : true
        })
        try{
            await axios.get(`http://103.13.231.22:3000/api/classroom/${payload}/lesson`, {
                headers: {
                  'x-access-token': token
                }
              })
              .then((res) =>{
                  dispatch({
                    type: 'CREATE_LESSON_SUCCESS',
                    data : res.data.lessons,
                    loading : false
                  })
              }).catch((er) => {
                dispatch({
                    type: 'CREATE_LESSON_ERROR',
                    loading : false
                  })
              })
        }catch{
            dispatch({
                type: 'CREATE_LESSON_ERROR',
                loading : false
            })
        }
    }
}
