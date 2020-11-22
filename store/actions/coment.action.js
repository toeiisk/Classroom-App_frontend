import axios from "axios";
import { AsyncStorage } from 'react-native';




export const Postcomment = (datacomment) => {
    const comment = {
        "description" : datacomment.description
    }
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        try{
            axios.post(`http://103.13.231.22:3000/api/classroom/${datacomment.classroomId}/lesson/${datacomment.lessonId}/post/${datacomment.postId}/comment`,
            comment,
            {
                headers: {
                  'x-access-token': token
                }
            })
            .then(() => {
                axios.get(`http://103.13.231.22:3000/api/classroom/${datacomment.classroomId}/lesson/${datacomment.lessonId}/post/${datacomment.postId}/comment`,
                {
                    headers: {
                      'x-access-token': token
                    }
                })
                .then((res) => {
                    dispatch({
                        type: 'POST_SUCCESS',
                        data: res.data
                    })
                })
                .catch((er) => {
                    dispatch({
                        type: 'POST_ERROR'
                    })
                })
            })
            .catch((er) => {
                dispatch({
                    type: 'POST_ERROR'
                })
            })

        }catch(er){
            dispatch({
                type: 'POST_ERROR'
            })
        }
    }
}


export const getComment = (datacomment) => {
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        dispatch({
            type: 'LOAD_COMMENT',
            isLoading: true
        })
        try{
            await axios.get(`http://103.13.231.22:3000/api/classroom/${datacomment.classroomId}/lesson/${datacomment.lessonId}/post/${datacomment.postId}/comment`,
            {
                headers: {
                  'x-access-token': token
                }
            })
            .then(async (res) => {
                dispatch({
                    type: 'POST_SUCCESS',
                    data: res.data,
                    isLoading: false
                })
            })
            .catch((er) => {
                dispatch({
                    type: 'POST_ERROR',
                    isLoading: true
                })
            })
    
        }catch(er){
            dispatch({
                type: 'POST_ERROR',
                isLoading: true
            })
        }
    
    }
}