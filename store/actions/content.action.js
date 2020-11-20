import axios from "axios";
import { AsyncStorage } from 'react-native';




export const creteContent = (payload) => {
    console.log(payload.image)
    return async (dispatch) => {
        var token = await AsyncStorage.getItem('token')
        let formData = new FormData()
        formData.append('image', {uri: payload.image, title: payload.title, description: payload.description});
        let url = `http://103.13.231.22:3000/api/classroom/${payload.classroomId}/lesson/${payload.lessonId}/post`
        try{
            await axios({
                method: 'POST',
                url: url,
                data: formData,
                headers : {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': token
                }
            })
            .then((res) => console.log('pass', res))
            .catch((er) => console.log('not pass', er))
        }catch(err){
            console.log('notpass2', err)
        }


    }
}