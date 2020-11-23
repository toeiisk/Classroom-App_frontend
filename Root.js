import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
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
  const {UserLogin, dispatch} = props
  async function CheckLogin() {
    var token = await AsyncStorage.getItem('token')
    await axios.get('http://103.13.231.22:3000/api/test/user/', {
      headers: {
        'x-access-token': token
      }
    })
    .then((res) => {
      if(res.status == 200){
        if(res.data.user.facebookName == null){
          dispatch({type : 'AUTH_LOGIN_SUCCES', dataUser : res.data.user, isSuccess: true})
        }else{
          dispatch({type : 'AUTH_LOGIN_SUCCES', dataUser : res.data.user, isSuccess: false})
        }
      }else{
        dispatch({type : 'AUTH_LOGIN_FAIL', isSuccess: false})
      }
    })
    .catch((er) => console.log(er.message))
}

  useEffect(() =>{
    CheckLogin()
  },[])
  return (
      <NavigationContainer>
        {UserLogin.isSuccess ? <Userscreens /> : <Rootscreens />}
      </NavigationContainer>
  );
};




const mapStateToProps = (state) => ({
  UserLogin: state.authReducer.UserLogin
})
const mapDispatchToProps = (dispatch) => ({
  dispatch
})
export default  compose(connect(mapStateToProps,mapDispatchToProps , null)(RootApp));