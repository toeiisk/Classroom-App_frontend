import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {connect} from "react-redux";
import {compose} from "redux";
import {UserLogin} from "../store/actions/auth.actions";
import {FacebookLogin} from "../store/actions/auth.actions"
import * as Facebook from 'expo-facebook';
import Externalstyle from "../style/externalStyle";

class  LoginScreen  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userdata: null,
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

  FacebookLogin = async (value) =>{
    try{
      this.props.dispatch(FacebookLogin(value))
    }catch{
      const newError = new ErrorUtils(error, "Signup Error");
      newError.showAlert();
    }
  }

  onSubmit = () =>{
    const user = {
      "username": this.state.username,
      "password": this.state.password
    }
    this.UserLogin(user)
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
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
                // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.setState({
              userdata: data
            })
            this.FacebookLogin(this.state.userdata)
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }



  render() {
    // const {UserLogin} = this.props    
    // if(UserLogin.isSuccess || this.state.loggedin) return <TestScreen />
    return(
      <SafeAreaView style={Externalstyle.container}>
      <StatusBar barStyle="light-content" />
      <View style={Externalstyle.login_header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/logo.png")}
          style={Externalstyle.login_logo}
          resizeMode={"stretch"}
        />
      </View>
      <Animatable.View
        style={Externalstyle.login_footer}
        animation="fadeInUpBig"
        duration={1500}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={Externalstyle.text_title_primary}>LOGIN</Text>
        </View>
        <Text style={Externalstyle.login_text_label}>Username</Text>
        <View style={Externalstyle.inputContainer}>
          <TextInput
            style={Externalstyle.login_input}
            numberOfLines={1}
            placeholder={"Username"}
            placeholderTextColor="#fff"
            onChangeText={this.onChangeUsername}
            value={this.state.username}
          />
        </View>
        <Text style={Externalstyle.login_text_label}>Password</Text>
        <View style={Externalstyle.inputContainer}>
          <TextInput
            style={Externalstyle.login_input}
            numberOfLines={1}
            placeholder={"Password"}
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={this.onChangePassword}
            value={this.state.password}
          />
          {UserLogin.isError ? <Text style={{color: 'red'}}>Username หรือ Password ผิดพลาด</Text>: null}
        </View>
        <View style={Externalstyle.login_button}>
          <TouchableOpacity style={Externalstyle.login_signin} onPress = {() => {this.onSubmit()}}>
            <Text style={Externalstyle.text_button}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.facebookLogIn()}
            style={[
              Externalstyle.login_signin,
              { backgroundColor: "#3A559F", marginTop: 10 },
            ]}
          >
            <Text style={Externalstyle.text_button}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Externalstyle.login_signin,
              { backgroundColor: "#FFF", marginTop: 10 },
            ]}
          >
            <Text style={[Externalstyle.text_button, { color: "#000" }]}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />
        <View style={Externalstyle.login_button_forgot}>
          <TouchableOpacity>
            <Text style={[Externalstyle.login_text_forgot, { color: "#FF0000" }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={[Externalstyle.login_text_forgot, { color: "#0578FF" }]}>
              Register Now?
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
    );
  }
    
}

const mapStateToProps = (state) => ({
  UserLogin: state.authReducer.UserLogin
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default  compose(connect(mapStateToProps, mapDispatchToProps, null)(LoginScreen));

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.5 * 0.4;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#2D232E",
//   },
//   header: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
  // footer: {
  //   flex: 3,
  //   backgroundColor: "#E0DDCF",
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   justifyContent: "center",
  //   paddingHorizontal: 30,
  // },
  // logo: {
  //   width: height_logo,
  //   height: height_logo,
  // },
  // text_title: {
  //   color: "#000",
  //   fontWeight: "400",
  //   fontSize: 30,
  //   marginBottom: 10,
  // },
  // text_label: {
  //   color: "#000",
  //   fontWeight: "500",
  //   marginTop: 10,
  // },
  // inputContainer: {
  //   marginTop: 5,
  //   marginBottom: 10,
  //   borderRadius: 3,
  //   flexDirection: "row",
  //   backgroundColor: "#0000009c",
  // },
  // input: {
  //   flex: 1,
  //   padding: 8,
  //   color: "#fff",
  //   fontWeight: "500",
  // },
  // button: {
  //   alignItems: "center",
  //   marginTop: 15,
  // },
  // signin: {
  //   width: "100%",
  //   height: 35,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 3,
  //   backgroundColor: "#474448",
  // },
  // text_button: {
  //   fontSize: 16,
  //   fontWeight: "400",
  //   color: "#FFF",
  // },
  // button_forgot: {
  //   marginTop: 15,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // text_forgot: {
  //   fontWeight: "400",
  //   fontSize: 14,
  // },
// });
