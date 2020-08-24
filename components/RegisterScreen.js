import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert 
} from "react-native";
import axios from "axios";
import { Image, Text } from "react-native-elements";
import externalStyle from "../style/externalStyle";
import * as Animatable from "react-native-animatable";
import { render } from "react-dom";

export default class RegisterScreen extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      username: "",
      email: "",
      roles: ["STUDENT"],
      password: "",
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  
 
  onChangeName = (inputText) => {
    this.setState({
      name: inputText,
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
 
  onSubmit = () => {

    const user = this.state;
    axios
      .post("http://103.13.231.22:3000/api/auth/signup", user)
      .then((res) => console.log(res.data) );

    this.setState({
      name: "",
      username: "",
      email: "",
      password: "",
    });

  };
  
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
              placeholder="Name"
              placeholderTextColor="#000000"
              autoCapitalize="none"
              onChangeText={this.onChangeName}
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
                <TouchableOpacity style={externalStyle.buttonSignin} onPress = {this.onSubmit}>
                  <Text style={externalStyle.textStyle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

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
