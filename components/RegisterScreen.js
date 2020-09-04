import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert 
} from "react-native";
import { Image, Text } from "react-native-elements";
import externalStyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import {connect} from "react-redux";
import {compose} from "redux";
import {createNewUser} from "../store/actions/auth.actions";



class RegisterScreen extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      roles: ["STUDENT"],
      password: "",
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName1 = this.onChangeName1.bind(this);
    this.onChangeName2 = this.onChangeName2.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  
 
  onChangeName1 = (inputText) => {
    this.setState({
      firstname: inputText,
    });
  };
  onChangeName2 = (inputText) => {
    this.setState({
      lastname: inputText,
    });
  };
  onChangeUsername = (inputText) => {
    this.setState({
      username: inputText,
    });
  };
  onChangeEmail = (inputText) => {
    this.setState({
      email: inputText,
    });
  };
  onChangePassword = (inputText) => {
    this.setState({
      password: inputText,
    });
  };
  

  createNewUser = async (values) =>{
    try{
      this.props.dispatch(createNewUser(values));
      // this.props.navigation.navigate('LoginScreen')
        Alert.alert(
          "สมัครข้อมูลสำเร็จ",
          "ยืนยัน",
          [
            {
              text: "ตกลง",
              onPress: () =>this.props.navigation.navigate('LoginScreen'),
              style: "ok"
            },
          ],
          { cancelable: false }
        );
      
    }catch{
      const newError = new ErrorUtils(error, "Signup Error");
          newError.showAlert();
    }
  }

  onSubmit = (values) => {
      this.createNewUser(values)
      this.setState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
      });     
  }  
  render() {
    
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="fadeIn"
              duration={1500}
              source={require("../assets/logo-classroom.png")}
              style={externalStyle.Logo}
            />
          </View>
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUp"
          duration={1500}
        >
          <Text style={styles.text_Footer}>REGISTER</Text>
          <View style={externalStyle.containerSignin}>
            <TextInput
              style={externalStyle.textinput}
              placeholder="Firstname"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={this.onChangeName1}
            />
            <TextInput
              style={externalStyle.textinput}
              placeholder="Lastname"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={this.onChangeName2}
            />
            <TextInput
              style={externalStyle.textinput}
              placeholder="E-mail"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={this.onChangeEmail}
            />
            <TextInput
              style={externalStyle.textinput}
              placeholder="Username"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={this.onChangeUsername}
            />
            <TextInput
              secureTextEntry={true}
              style={externalStyle.textinput}
              placeholder="Password"
              placeholderTextColor="#000000"
              onChangeText={this.onChangePassword}
            />
            <View style={externalStyle.containerSignin}>
                <TouchableOpacity style={externalStyle.buttonSignin} onPress = {() => {this.onSubmit(this.state)}}>
                  <Text style={externalStyle.textStyle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111b36",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  text_Footer: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  containerLogo: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

mapStateToProps = (state) => ({
  AuthReducer: state.authReducer.AuthReducer
})

mapDispatchToProps = (dispatch) => ({
  dispatch
});


export default compose(connect(mapStateToProps, mapDispatchToProps, null)(RegisterScreen));