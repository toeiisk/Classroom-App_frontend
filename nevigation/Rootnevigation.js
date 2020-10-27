import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signinscreen from "../components/LoginScreen";
import Registerscreen from "../components/RegisterScreen";
import { Image } from "react-native";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SignInScreen" component={Signinscreen} />
    <RootStack.Screen name="Register" component={Registerscreen}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
