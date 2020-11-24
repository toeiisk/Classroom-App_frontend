import React from "react";
import Chatlist from "../components/Chatlist";
import { Image } from "react-native";
import Chatroom from "../components/ChatScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from "../assets/resources/constants/color";
const RootScreen = createStackNavigator();

const ChatStack = () => (
  <RootScreen.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "white", height: 100 },
    }}
  >
    <RootScreen.Screen
      name="Chatlist"
      component={Chatlist}
      options={{ headerShown: false }}
    />
    <RootScreen.Screen
      name="Chatroom"
      component={Chatroom}
      options={{ headerShown: false }}
    />
  </RootScreen.Navigator>
);

export default ChatStack;
