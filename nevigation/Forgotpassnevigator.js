import {
  createStackNavigator,
} from "@react-navigation/stack";

import ForgotpassScreen from "../components/ForgotpassScreen";
import React from "react";
import ForgotpasscodeScreen from '../components/ForgotpasscodeScreen'
import ForgotpassokScreen from '../components/ForgotpassokScreen'

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
  //   screenOptions={{
  //     headerStyle: { backgroundColor: Color.background_footer, height: 80 },

  //   }}
  >
    <RootStack.Screen
      name="Forgotpass"
      component={ForgotpassScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="ForgotpasscodeScreen"
      component={ForgotpasscodeScreen}
      options={{ headerShown: false }}
    />

    <RootStack.Screen
      name="ForgotpassokScreen"
      component={ForgotpassokScreen}
      options={{ headerShown: false }}
    />

  </RootStack.Navigator>
);

export default RootStackScreen;


