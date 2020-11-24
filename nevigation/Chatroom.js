import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Chatroom from "../components/ChatScreen";
import Chatlist from "../components/Chatlist";


const RootScreen = createStackNavigator();

const Chat = () => {
    <RootScreen.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "white", height: 100 },
    }}
  >
    <RootScreen.Screen
      name="Chatroom"
      component={Chatroom}
      options={{ headerShown: false }}
    />
  </RootScreen.Navigator>
}


export default Chat
