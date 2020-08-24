import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import externalStyle from "../style/externalStyle";
import { Image, Text } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const  LoginScreen  = ( { navigation } ) => {
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
        />
        <TextInput
          secureTextEntry={true}
          style={externalStyle.textinput}
          placeholder="Password"
          placeholderTextColor="#000000"
        />
      </View>
      <View style={externalStyle.containerSignin}>
        <TouchableOpacity style={externalStyle.buttonSignin}>
          <Text style={externalStyle.textStyle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View style={externalStyle.containerSignin}>
        <Text style={{ marginBottom: 20, textAlign: "center" }}>
          <Text>Forgot Password ?{"    "}</Text>
          <Text style={{ color: "#5F7BB6" }} onPress={() => navigation.navigate('Register')}>
            Sign Up Now ?
          </Text>
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
      </View>

      <View style={externalStyle.containerSignin}>
        <View style={externalStyle.containerSigninLogo}>
          <TouchableHighlight style={externalStyle.SigninLogo}>
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

export default LoginScreen