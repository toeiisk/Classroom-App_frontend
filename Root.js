import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ReduxThunk from "redux-thunk";
import AppReducer from "./store/reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AsyncStorage } from 'react-native';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Rootscreens from './nevigation/Rootnevigation'
import Userscreens from './nevigation/Usernevigator'
import {connect} from "react-redux";
import {compose} from "redux";
import {UserLogin} from "./store/actions/auth.actions";




const RootApp = (props) => {
  const {UserLogin} = props
  // console.log(isLogin)
  const [isLogin, setIslogin] = useState(false)
  async function CheckLogin() {
    var token = await AsyncStorage.getItem('token')
    axios.get('http://103.13.231.22:3000/api/test/user/', {
      headers: {
        'x-access-token': token
      }
    })
    .then((res) => {
      if(res.status == 200){
        setIslogin(true)
      }
    })
    .catch((er) => console.log(er.message))
}

  useEffect(() =>{
    CheckLogin()
  },[])
  return (
      <NavigationContainer>
        {isLogin || UserLogin.isSuccess ? <Userscreens /> : <Rootscreens />}
      </NavigationContainer>
  );
};




const mapStateToProps = (state) => ({
  UserLogin: state.authReducer.UserLogin
})
export default  compose(connect(mapStateToProps,null , null)(RootApp));