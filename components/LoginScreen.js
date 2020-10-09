import React, { useState, Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import externalStyle from "../style/externalStyle";
import { Image, Text } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import {connect} from "react-redux";
import {compose} from "redux";
import {UserLogin} from "../store/actions/auth.actions";
import TestScreen from './testScreen';
import * as Facebook from 'expo-facebook';

class  LoginScreen  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userdata: null,
      loginstatus: false,
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeUsername = (input) =>{
    this.setState({
      username: input
    });
  };

  onChangePassword = (input) => {
    this.setState({
      password: input
    });
  };

  UserLogin = async (value) =>{
    try{
      this.props.dispatch(UserLogin(value))
    }catch{
      const newError = new ErrorUtils(error, "Signup Error");
      newError.showAlert();
    }
  }

  onSubmit = (value) =>{
    this.UserLogin(value)
    this.setState({
      username: "",
      password: ""
    })
  }
  
  facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '2990678831035937',
      });
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        
        Alert.alert('Logged in!');
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              loginstatus: true,
              userdata: data
            })
            console.log(this.state.userdata)
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  // logout = () => {
  //   setLoggedinStatus(false);
  //   setUserData(null);
  //   setImageLoadStatus(false);
  // }
  render() {
    const {UserLogin} = this.props
    
    if(UserLogin.isSuccess) return <TestScreen />
    return(
      <View style={externalStyle.container}>
      <View style={externalStyle.containerLogo}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require("../assets/logo-classroom.png")}
        style={externalStyle.Logo}
      />
      </View>
      <View style={externalStyle.containerSignin}>
      <TextInput
        style={externalStyle.textinput}
        placeholder="Username"
        placeholderTextColor="#000000"
        onChangeText={this.onChangeUsername}
        value={this.state.username}
      />
      <TextInput
        secureTextEntry={true}
        style={externalStyle.textinput}
        placeholder="Password"
        placeholderTextColor="#000000"
        onChangeText={this.onChangePassword}
        value={this.state.password}
      />
      {UserLogin.isError ? <Text style={{color: 'red'}}>Username หรือ Password ผิดพลาด</Text>: null}
      </View>
<View style={externalStyle.containerSignin}>
  <TouchableOpacity style={externalStyle.buttonSignin} onPress = {() => {this.onSubmit(this.state)}}>
    <Text style={externalStyle.textStyle}>SIGN IN </Text>
  </TouchableOpacity>
</View>

<View style={externalStyle.containerSignin}>
  <Text style={{ marginBottom: 20, textAlign: "center" }}>
    <Text>Forgot Password ?{"    "}</Text>
    <Text style={{ color: "#5F7BB6" }} onPress={() => this.props.navigation.navigate('Register')}>
      Sign Up Now ?
    </Text>
  </Text>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
  </View>
</View>

<View style={externalStyle.containerSignin}>
  <View style={externalStyle.containerSigninLogo}>
    <TouchableHighlight style={externalStyle.SigninLogo} onPress={() => this.facebookLogIn()}>
      <Image
        source={require("../assets/icon-facebook.png")}
        style={{ height: 60, width: 60 }}
      />
    </TouchableHighlight>
    <TouchableHighlight style={externalStyle.SigninLogo}>
      <Image
        source={require("../assets/icon-google.png")}
        style={{ height: 60, width: 60 }}
      />
    </TouchableHighlight>
  </View>
</View>
</View>
  );
  }
    
}

mapStateToProps = (state) => ({
  UserLogin: state.authReducer.UserLogin
})

mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default  compose(connect(mapStateToProps, mapDispatchToProps, null)(LoginScreen));