import React from "react";
import Chatlist from "../components/Chatlist";
import Chatroom from "../components/ChatScreen";
import { Image } from "react-native";
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
      options={{
        title: "CLASSROOM001",
        headerTitleStyle:{
          fontFamily: "MitrMedium",
          fontSize: 22,
          letterSpacing: 2
        },
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              source={require("../assets/resources/icon/previous.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </RootScreen.Navigator>
);

export default ChatStack;
