import axios from "axios";
import { AsyncStorage } from 'react-native';

export const creteContent = (payload) => {
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        let formData = new FormData();
        formData.append('title', payload.title);
        formData.append('description', payload.description);
        formData.append('img', {
            uri: payload.image,
            type: 'image/jpeg',
            name: 'test.jpg'
        });
        let url = `http://103.13.231.22:3000/api/classroom/${payload.classroomId}/lesson/${payload.lessonId}/post`
        await dispatch({
            type: 'LOAD_CONTENT',
            isLoding : true
        })
        try {
            await axios({
                method: 'POST',
                url: url,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': token
                }
            })  
                .then(() => {
                    axios.get(`http://103.13.231.22:3000/api/classroom/${payload.classroomId}/lesson/${payload.lessonId}/post`,
                    {headers: {'x-access-token': token}}
                    )
                    .then((res) => {
                        dispatch({
                            type: 'CREATE_CONTENT_SUCCESS',
                            data : res.data,
                            isLoding : false
                        })
                    })
                })
                .catch((er) => {
                    dispatch({
                        type: 'CREATE_CONTENT_ERROR',
                        isLoding : true,
                    })
                })
        } catch (err) {
            dispatch({
                type: 'CREATE_CONTENT_ERROR',
                isLoding : true
            })
        }


    }
}


export const getContent = (payload) => {
    return async (dispatch) =>{
        await dispatch({
            type: 'LOAD_CONTENT',
            isLoding : true
        })
        try{
            var token = await AsyncStorage.getItem('token')
            await axios.get(`http://103.13.231.22:3000/api/classroom/${payload.classroomId}/lesson/${payload.lessonId}/post`, {
                headers: {
                  'x-access-token': token
                }
              })
              .then((res) =>{
                  if(res.status == 200){
                    console.log('status', res.status)
                    dispatch({
                        type: 'CREATE_CONTENT_SUCCESS',
                        data : res.data,
                        isLoding : false,
                        err: false
    
                    })
                  }else{
                    console.log('not get content')
                    dispatch({
                        type: 'CREATE_CONTENT_ERROR',
                        data : res.data,
                        isLoding : true,
                        err: true
    
                    })
                  }
              }).catch((er) => {
                console.log('error', er)
                dispatch({
                    type: 'CREATE_CONTENT_ERROR',
                    isLoding : false,
                    err: true
                })
              })
        }catch(er){
            console.log(er.message)
            dispatch({
                type: 'CREATE_CONTENT_ERROR',
                isLoding : true,
                err: true
            })
        }
    }
}