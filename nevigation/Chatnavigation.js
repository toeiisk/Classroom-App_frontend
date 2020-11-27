import React from "react";
import Chatlist from "../components/Chatlist";
import Chatroom from "../components/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";
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
