import axios from "axios";
import { AsyncStorage } from 'react-native';


export const createClassroom = (payload) =>{
    return async (dispatch) =>{
        var token = await AsyncStorage.getItem('token')
        try{
            await axios.post('http://103.13.231.22:3000/api/classroom/create', payload,{headers: {
                'x-access-token': token
            }})
            .then(() =>{
                axios.get('http://103.13.231.22:3000/api/classroom/get/all/classroombyuser', 
                {headers: {
                    'x-access-token': token
                }})
                .then((res) =>{
                    console.log('getclassroom')
                    dispatch({
                        type: 'CREATE_CLASSROOM_SUCCESS',
                        data : res.data.classrooms
                    })
                })
                .catch((er) => {
                    dispatch({
                        type: 'CREATE_CLASSROOM_ERROR'
                    })
                })
                
            })
            .catch((er) => {
                dispatch({
                    type: "CREATE_CLASSROOM_ERROR"
                })
            })
        }catch{
            dispatch({
                type: "CREATE_CLASSROOM_ERROR"
            })
        }
    }
}


export const getClassroom = () =>{
    return async (dispatch) =>{
        var token = await AsyncStorage.getItem('token')
        try{
            await axios.get('http://103.13.231.22:3000/api/classroom/get/all/classroombyuser', {
                headers: {
                  'x-access-token': token
                }
              })
              .then((res) =>{
                  dispatch({
                      type : 'CREATE_CLASSROOM_SUCCESS',
                      data : res.data.classrooms
                  })
              }).catch((er) => console.log(er.message))
        }catch{
            dispatch({
                type: 'CREATE_CLASSROOM_ERROR'
            })
        }
    }
}